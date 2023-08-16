import React, { useState } from 'react'
import MovieFilter from '../MovieFilter/MovieFilter'
import AddMovie from '../addMovie/AddMovie';
import { moviesData } from '../Data';
import MovieList from '../MovieList/MovieList';
import WelcomeMovie from '../Navigation/WelcomeMovie';

const Movies = () => {
  const [movies,setmovies]=useState(moviesData)

  const add=(newmovie) =>{
    setmovies([...movies,newmovie])
  }
  const [search,setsearch]=useState("")

  const[newRate,setnewRate]=useState(0)
  return (
    <div>
      <WelcomeMovie/>
      <MovieFilter search={search} setsearch={setsearch} newRate={newRate} setnewRate={setnewRate}/>
      <MovieList movies={movies} search={search} newRate={newRate}/>
      <AddMovie add={add}/>
    </div>
  )
}

export default Movies