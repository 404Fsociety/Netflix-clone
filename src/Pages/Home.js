import React from 'react'
import Welcome from '../Navigation/Welcome'
import Publicite from '../Navigation/Publicite'
import Carrousel from '../Carrousel/Carrousel'
import AllScreens from '../MobileApp/AllScreens'
import MobileApp from '../MobileApp/MobileApp'
import FAQ from '../FAQ/FAQ'

const Home = () => {
  return (
    <div>
      <Welcome/>
      <Publicite/>
      <Carrousel/>
      <AllScreens/>
      <div style={{backgroundColor:"grey",height:"10px",borderBottomStyle:"2px",borderColor:"red"}}>.</div>
      <MobileApp/>
      <FAQ/>
    </div>
  )
}

export default Home