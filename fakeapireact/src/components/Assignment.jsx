import { Button, Card, CardActions, CardContent, CardMedia, Grid, IconButton, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';

const Assignment = () => {
    var[store,setstore]=useState([])
    useEffect(()=>{
        axios.get(" https://fakestoreapi.com/products")
        .then((response)=>{
            console.log(response.data)
            setstore(response.data)
        })
    },[])

    
  return (
    <div>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      {store.map((val)=>{
        return(
            <Grid item xs={2} sm={4} md={4} >
       

      <Card sx={{ maxWidth: 600,maxHeight:2000}}>
      <CardMedia
        sx={{ height: 610,width:350, objectFit: 'cover',objectPosition: 'center' }}
        image={val.image}
        title={val.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {val.title}<br></br>
          Rs:{val.price}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {val.category}<br/>
          {val.description}
        </Typography>
      </CardContent>
      <CardActions>
      <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        
      </CardActions>
    </Card><br></br><br></br><br></br><br></br><br></br>

    </Grid>
     )
    })}
    </Grid>
    </div>
  )
}

export default Assignment
