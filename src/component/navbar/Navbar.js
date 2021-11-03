import { Menu } from '@mui/icons-material'
import { AppBar, IconButton,  Toolbar, Typography } from '@mui/material'
import React from 'react'
import { makeStyles } from '@mui/styles'
import { createStyles } from '@mui/styles'
 

const stylish = makeStyles(()=>
    createStyles({
        header:{
            fontStyle:'italic',
            fontWeight:'bold',
            textTransform:'capitalize',
        }
    })
)


export const Navbar = () => {
    const classes = stylish();
    
    return(
        <div>
            <AppBar position='relative' variant='outlined' color='primary'>
                <Toolbar >
                    <IconButton size='large' color='inherit'><Menu fontSize='large' /></IconButton>
                    <Typography variant='h5' fontStyle='italic' align='center' className={classes.header} sx={{ml:10}}>search with pixaby </Typography>
                </Toolbar>
            </AppBar>
        </div>
        )

}
