import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import ReactStars from 'react-stars';
import './MovieCard.css'
import { Fade, Slide } from 'react-reveal';
import { Button } from 'react-bootstrap';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoIcon from '@mui/icons-material/Info';
import { Link } from 'react-router-dom';


const MovieCard = ({movie}) => {
  return (
    <div>
      <Slide bottom>
      <Card id='card' style={{height:"370px",margin:"30px",marginBottom:"4%",width:"310px"}} sx={{ maxWidth: 345 }}>
      <CardActionArea style={{cursor:"default"}} >
      <Fade left >
      <div style={{textAlign:"start",position:"absolute",bottom:"8%",left:"5%"}}>
      <a href={movie.trailer}>
        <Button className='trailer'><PlayArrowIcon/> Trailer</Button>
          </a>
          <Link to={`/movies/${movie.id}`}>
          <Button variant="secondary"  style={{width:"130px",fontSize:"15px",height:"40px"}}><InfoIcon/> Description</Button>
            </Link>
      </div>
        </Fade>
      
      
        <CardMedia className='imgCard'
          image={movie.posterUrl}
          alt="green iguana"
          position="absolute"
        />
        <CardContent style={{backgroundColor:"DimGray",height:"220px",color:"white"}}>
          <Typography gutterBottom variant="h5" component="div">
            {movie.title}
          </Typography>
          <Typography variant="body2" >
            {movie.Year}
          </Typography>
          <div style={{display:"flex",justifyContent:"space-between",marginTop:"5%"}}>
          <Typography variant="body2" style={{fontSize:"17px",color:"rgb(246, 255, 0)"}} >
            {movie.Type}
          </Typography>
          <Typography variant="body2" >
            {movie.RuningTime}
          </Typography>
          </div>
          <Typography variant="body2" color="text.secondary" fontSize="16px" display={'flex'} justifyContent={'space-between'}>
           <b>{movie.rate} stars </b> 
           <ReactStars count={5} size={24} color2={'#ffd700'} value={movie.rate} half={false} edit={false}/>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    
      </Slide>
    </div>
  )
}

export default MovieCard