import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

const Add = () => {
    const backgroundImageStyle = {
        backgroundImage: 'url("https://img.freepik.com/free-photo/abstract-blur-shopping-mall_1203-7949.jpg?w=740&t=st=1722078754~exp=1722079354~hmac=708023c0485054cadcf9fcde0e743e4ff20e872da05015d0d7f4956b999bf4ec")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
      };
  return (
    <div style={backgroundImageStyle}>
      <Typography variant='h4'>ADD ITEM TO STORE</Typography><br /><br /><br />
      <TextField id="outlined-basic" label="Product Name" variant="outlined" /><br /><br /><br />
      Image:
      <input type="file" name="" id="" label="Image"/><br /><br /><br />
      <TextField id="outlined-basic" label="Price" variant="outlined" /><br /><br /><br />
      <TextField id="outlined-basic" label="Category" variant="outlined" /><br /><br /><br />
      <TextField id="outlined-basic" label="Description" variant="outlined" /><br /><br /><br />
      <Button variant="contained">ADD ITEM</Button>
    </div>
  )
}

export default Add
