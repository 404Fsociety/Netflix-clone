import './App.css';
import Carrousel from './Carrousel/Carrousel';
import MobileApp from './MobileApp/MobileApp';
import Navigation from './Navigation/Navigation';
import Publicite from './Navigation/Publicite';
import { moviesData } from './Data';
import { useState } from 'react';
import MovieList from './MovieList/MovieList';
import Footr from './footer/Footr';
import Welcome from './Navigation/Welcome';
import AllScreens from './MobileApp/AllScreens';
import AddMovie from './addMovie/AddMovie';
import MovieFilter from './MovieFilter/MovieFilter';
import FAQ from './FAQ/FAQ';
import SlideList from './SlideList/SlideList';
import Slide2 from './SlideList/Slide2';
import Slide3 from './SlideList/Slide3';
import Slide4 from './SlideList/Slide4';
import Slide5 from './SlideList/Slide5';

function App() {
  const [movies,setmovies]=useState(moviesData)

  const add=(newmovie) =>{
    setmovies([...movies,newmovie])
  }
  const [search,setsearch]=useState("")

  const[newRate,setnewRate]=useState(0)
  return (
    <div className="App">
      <Navigation/>
      <Welcome/>
      <Publicite/>
      <Carrousel/>
      <AllScreens/>
      <Slide2/>
      <SlideList/>
      <Slide5/>
      <Slide3/>
      <Slide4/>
      <MovieFilter search={search} setsearch={setsearch} newRate={newRate} setnewRate={setnewRate}/>
      <MovieList movies={movies} search={search} newRate={newRate}/>
      <MobileApp/>
      <AddMovie add={add}/>
      <FAQ/>
      <Footr/>
    </div>
  );
}

export default App;
