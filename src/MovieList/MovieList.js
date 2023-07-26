import React from 'react';
import MovieCard from '../MovieCard/MovieCard';

const MovieList = ({ movies,search,newRate }) => { 
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', marginTop: '20px' }}>
      {newRate?
      movies.filter((movie)=>movie.rate===newRate)
      .map((movie) => 
        <MovieCard movie={movie} key={movie.id} /> )
        :
      movies.filter((movie)=>
      movie.title.toUpperCase().includes(search.toUpperCase().trim()))
      .map((movie) => 
        <MovieCard movie={movie} key={movie.id} /> )
        }
    </div>
  );
};

export default MovieList;