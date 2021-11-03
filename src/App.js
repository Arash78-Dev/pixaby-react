import './App.css';
import { Navbar } from './component/navbar/Navbar';
import { ThemeProvider } from '@mui/material';
import React, { Component } from 'react'
import { createTheme } from '@mui/material';
import Search from './component/search/Search';


const theme = createTheme({
palette:{
  primary:{
    main:"#52ab98",
  },
  secondary:{
    main:"#34abee"
  }
}
})
export class App extends Component {
  
  render() {
    return (
      <ThemeProvider theme={theme}>
          <div>
            <Navbar/>
            <Search/>
          </div>
      </ThemeProvider>
    )
  }
}

export default App

