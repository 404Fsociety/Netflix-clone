import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import ReactStars from 'react-stars';
import './MovieCard.css'


const MovieCard = ({movie}) => {
  return (
    <div>
      <a href={movie.trailer} id='link'>
      <Card id='card' style={{height:"700px",margin:"30px"}} sx={{ maxWidth: 345 }}>
      <CardActionArea >
        <CardMedia className='imgCard'
          image={movie.posterUrl}
          alt="green iguana"
        />
        <CardContent style={{backgroundColor:"DimGray",height:"220px",color:"white"}}>
          <Typography gutterBottom variant="h5" component="div">
            {movie.title}
          </Typography>
          <Typography variant="body2" >
            {movie.description}
          </Typography>
          <Typography variant="body2" color="text.secondary" fontSize="16px" display={'flex'} justifyContent={'space-between'}>
           <b>{movie.rate} stars </b> 
           <ReactStars count={5} size={24} color2={'#ffd700'} value={movie.rate} half={false} edit={false}/>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
      </a>
    </div>
  )
}

export default MovieCard