import { Slider, TextField } from '@mui/material'
import { Typography ,  Button } from '@mui/material'
import React, { Component } from 'react'
import axios from 'axios'
import './search.css'
import Reimage  from '../image-result/Reimage'






export class Search extends Component {
     state={
        Searchtext:'',
        amount:15,
        apiurl:'https://pixabay.com/api',
        apikey:'23676200-6508963c3a3d198c31689fd21',
        img:[],
        col:3,
        rh:230
    }
    
    
   ontextchange = (e)=>{
    this.setState({Searchtext:e.target.value})

    if(e.target.value===''){
        this.setState({img:[]})
    }
   } 

searchbut = ()=>{
    axios.get(`${this.state.apiurl}/?key=${this.state.apikey}&q=${this.state.Searchtext}
    &image_type=photo&per_page=${this.state.amount}&safesearch=true`).then((res)=>{
        this.setState({
            img:res.data.hits,
        })
    }).catch((err)=>{alert(err)}) 


    if (document.documentElement.clientWidth<700) {
        this.setState({
            col:1,
            rh:270,
        })
    }
    else if (document.documentElement.clientWidth>700 && document.documentElement.clientWidth<900) {
        this.setState({
            col:2,
            rh:250,
        })  
    }
    else{
        this.setState({
            col:3,
            rh:230,
        })
    }
}

 


    render() {
        return (
            <div  className="flex">
                <TextField
                label='search'
                variant='outlined'
                color='primary'
                placeholder='Search your photo'
                name="searchtext"
                value={this.state.Searchtext}
                onChange={this.ontextchange}
                sx={{
                    width:'30%',
                    margin:'20px',
                    color:'#eee'
                }}
                ></TextField>

        

                <Typography sx={{
                    margin:'20px'
                }}>Amount  :</Typography>

                <Slider
                aria-label='amout of image'
                min={0}
                max={100}
                step={5}
                valueLabelDisplay="auto"
                value={this.state.amount}
                sx={{
                    width:'30%',
                    display:'block',
                    margin: '20px'
                }}
                onChange={(e)=>{
                    this.setState({
                        amount:e.target.value,
                    })
                }}
                >
                </Slider>


                <br/>

                <Button variant='contained' color='primary' onClick={this.searchbut}>search</Button>

                
                

                

                <Reimage images={this.state.img}
                col={this.state.col}
                rh={this.state.rh}/>

            
        

               

               
                
            </div>
        )
    }
}

export default Search
