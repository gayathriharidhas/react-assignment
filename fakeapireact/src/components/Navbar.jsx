import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
       {/* <Box sx={{ flexGrow: 1 }}> */}
        <AppBar>
            <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Product Store
          </Typography>
          <Link to='/add'>
          <Button variant="contained">ADD</Button>
          </Link>
          <Link to='/'>
          <Button variant="contained">HOME</Button>
          </Link>
            </Toolbar>
        </AppBar>
       {/* </Box> */}
    </div>
  )
}

export default Navbar
