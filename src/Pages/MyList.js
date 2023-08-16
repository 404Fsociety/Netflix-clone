import React from 'react'
import Slide6 from '../SlideList/Slide6'
import { Fade } from 'react-reveal'

const MyList = () => {
  return (
    <div>
      <Fade top>
        <img style={{width:"100%",height:"630px"}}
        alt='img' src='https://miro.medium.com/v2/resize:fit:8572/1*MDctmwqOtLomM_4TsaFJ5Q.jpeg'/>
        </Fade>
        <div style={{marginTop:"-1%",marginBottom:"10%"}}>
        <Slide6/>
        </div>
    </div>
  )
}

export default MyList