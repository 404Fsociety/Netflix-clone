import React, { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Navigation from './Navigation/Navigation';
import Footr from './footer/Footr';
import Home from './Pages/Home';
import Movies from './Pages/Movies';
import TvShows from './Pages/Tv_shows';
import MyList from './Pages/MyList';
import Latest from './Pages/Latest';
import MovieDetails from './Pages/MovieDetails';

function App() {
  const location = useLocation();

  // Scroll to the top when the location (route) changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Tv_shows' element={<TvShows />} />
        <Route path='/Movies' element={<Movies />} />
        <Route path='/MyList' element={<MyList />} />
        <Route path='/Latest' element={<Latest />} />
        <Route exact path="/movies/:id" element={<MovieDetails />} />
      </Routes>
      <Footr />
    </div>
  );
}

export default App;
