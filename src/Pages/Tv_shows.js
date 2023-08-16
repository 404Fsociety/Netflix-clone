import React from 'react'
import Slide2 from '../SlideList/Slide2'
import Slide6 from '../SlideList/Slide6'
import SlideList from '../SlideList/SlideList'
import Slide3 from '../SlideList/Slide3'
import Slide5 from '../SlideList/Slide5'
import Slide4 from '../SlideList/Slide4'
import WelcomeMovies from '../Navigation/WelcomeMovies'

const TvShows = () => {
  return (
    <div>
      <WelcomeMovies/>
      <Slide2/>
      <Slide6/>
      <SlideList/>
      <Slide3/>
      <Slide4/>
      <Slide5/>
    </div>
  )
}

export default TvShows