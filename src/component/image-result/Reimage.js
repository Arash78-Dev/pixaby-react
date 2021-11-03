import React, { Component } from 'react'
import PropType from 'prop-types'
import {ImageList,ImageListItem } from '@mui/material'
import './reimage.css'
import { Backdrop } from '@mui/material'
import Favorite from '@mui/icons-material/Favorite'




export class Reimage extends Component {
    state={
        open:false,
        currentimg:'',
        im:true,
    }
    handleopen=(input)=>{
        this.setState({
            open:true,
            currentimg:input,
        })
    }
    handleclose=()=>{

    setTimeout(() => {
        if(this.state.im){
            this.setState({
                open:false,
                currentimg:'',
            })
        }
        else{
            this.setState({im:true})
        }
    }, 200);
    
    }

    componentDidUpdate(){
        console.log('hey');
        console.log(document.documentElement.clientWidth);
        
    }

    render() {
        const {images} = this.props
        

        let imagelist 
        let list

        if(images.length===0){
            imagelist= (
                <h2 className="vay">nothing is here......</h2>
               )

               list = (imagelist)
               
        }
        else{
            
          imagelist=images.map((item)=>{
              let src = `${item.largeImageURL}`
              
                return(
                    <ImageListItem 
                    className='div'
                    key={item.id}
                    sx={{ overflow:'hidden',cursor:'pointer',
                       margin:'0px' }}
                    onClick={()=> this.handleopen(src)}
                   >
                    
                    
                    <img 
                      src={src}
                      alt={item.title}
                      loading="lazy"
                      className='img'
                      
                    />

                    <div className='divchild'>
                        <h3>{item.tags}</h3>
                        <p>by : {item.user} </p>
                        <p className='ve'><Favorite sx={{color:'white' , verticalAlign:'-4px'}} fontSize='small'/>  <span> {item.likes}</span> </p>

                    </div>





                  </ImageListItem>
                )
            })
            
        }
         
        if(images.length!==0){
            list=(
                    <ImageList sx={{ marginTop:10 , width: '100%',
                     position:'relative'}}
                    variant='standard'
                    cols={this.props.col}
                    rowHeight={this.props.rh}>
                       {imagelist}
                    </ImageList>
            )
        }
        return (
            <div>
                {list}
                <Backdrop
                    sx={{ color: '#fff' ,display:'flex'}}
                    open={this.state.open}
                    onClick={this.handleclose}>


                    <img onClick={()=>this.setState({
                        im:false,
                    })} className='bak' alt='yess' src={this.state.currentimg}/>
                </Backdrop>
         </div>
        )
    }
}


Reimage.PropType={
    images:PropType.array.isRequired
}


export default Reimage






