import React from 'react'
import './MobileApp.css'
import{Fade} from 'react-reveal'

const AllScreens = () => {
  return (
    <div style={{marginTop:"100px",marginBottom:"50px"}}>
      <div className='black-bg'>
        <Fade left>
        <div>
    <h1>Watch Everywhere.</h1> <br/>
        <p>
        Stream unlimited films and TV programmes on your phone,tablet,laptop and TV without paying more.
        </p>
    </div>
        </Fade>
        <Fade right>
        <img alt='img' src='https://xcxz-netflix.netlify.app/images/misc/home-imac.jpg' id='tv'/>
        </Fade>
    </div></div>
  )
}

export default AllScreens