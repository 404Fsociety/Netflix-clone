import React from 'react'
import './MobileApp.css'
import Slide from 'react-reveal/Slide';
const MobileApp = () => {
  return (
    <div>
         <div style={{marginTop:"8%"}}>
        <div className='black-bg'>
          <Slide left>
          <img alt='img' src='https://netflix-images.manikantp.repl.co/Netflix2.gif' id='tv'/>
          </Slide>
          <Slide top>
          <div style={{lineHeight:"40px",marginRight:"50px"}}>

          <h1>Download your programmes to watch on the go.</h1> <br/>
          <p>
            Save your data and watch all your favorites offline
          </p>
          </div>
          </Slide>
        </div>
    </div>
    </div>
  )
}

export default MobileApp