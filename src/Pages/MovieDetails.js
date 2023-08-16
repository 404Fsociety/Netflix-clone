import React from 'react';
import { useParams } from 'react-router-dom';
import { moviesData } from '../Data';
import { Fade, Slide } from 'react-reveal';
import { Box, Rating, Typography } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';

const MovieDetails = () => {
  const { id } = useParams();
  const movie = moviesData.find((movie) => movie.id === Number(id));

  const containerStyle = {
    position: 'relative',
    width: '100%',
    height: '750px',
    backgroundImage: `url(${movie.Background})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    
  };

  const textStyle = {
    position: 'absolute',
    bottom: '10%',
    left: '5%',
    color: 'white',
    textAlign: 'start',
  };

  const labels = {
    0.5: 'Useless',
    1: 'Useless+',
    1.5: 'Poor',
    2: 'Poor+',
    2.5: 'Ok',
    3: 'Ok+',
    3.5: 'Good',
    4: 'Good+',
    4.5: 'Excellent',
    5: 'Excellent+',
  };
  return (
    <div>
    <Slide top>
            <div style={containerStyle}>
      <Fade right>
        <div style={textStyle}>
          <h2>{movie.title}</h2>
          <div style={{ width: '40%', fontSize: '22px', marginTop: '1.5%' }}>{movie.description}</div>
        </div>
      </Fade>
    </div>
    </Slide>
    <div style={{marginTop:"7%",height:"600px",display:"flex",justifyContent:"space-around"}}>
    <Slide left >
        <div style={{margin:"auto",boxShadow: '-6px 5px 12px red',borderRadius:"10px",backgroundColor:"rgb(55, 55, 55)",height:"100%",width:"26%"}}>
        <Typography gutterBottom variant="h5" component="div"style={{color:"grey",fontSize:"45px",paddingTop:"25%"}}>
            {movie.title}
          </Typography>
          <Typography variant="body2" style={{fontSize:"28px",color:"grey"}} >
            {movie.Year}
          </Typography>
          <div style={{marginTop:"5%"}}>
          <Typography variant="body2" style={{fontSize:"22px",color:"rgb(246, 255, 0)"}} >
            {movie.Type}
          </Typography>
          <Typography variant="body2" style={{fontSize:"20px",color:"white",paddingTop:"10%"}} >
            {movie.RuningTime}
          </Typography>
          </div>
          <div style={{display:"flex",justifyContent:"space-around",paddingTop:"15%",marginBottom:"10%"}}>
          <Rating
  name="text-feedback"
  value={movie.rate}
  readOnly
  precision={0.5}
  emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
/>
<Box color={'white'} fontSize={'18px'} sx={{ ml: 2 }}>{labels[movie.rate]}</Box>
          </div>
          <h1 style={{color:"red",margin:"auto",fontSize:"50px"}}>Official Trailer</h1>
        </div>

        </Slide>
    <Slide bottom>
    <iframe
      width="70%"
      height="100%"
      src={movie.trailer}
      title="Youtube Player"
      frameborder="0"
      allowFullScreen
    />
    </Slide>

    </div>
    </div>
  );
};

export default MovieDetails;
