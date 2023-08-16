import React from 'react'
import image from './image.png'
import { Fade, Slide } from 'react-reveal'
import { Button } from 'react-bootstrap'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoIcon from '@mui/icons-material/Info';

const WelcomeMovie = () => {
  return (
    <Slide top>
      <div style={{backgroundImage: `url(${image})`,backgroundSize:"cover",height:"750px",color:"white"}}>
    <Fade right>
    <div style={{textAlign:"start",paddingTop:"220px",paddingLeft:"40px"}}>
    <img style={{width:"40%"}}
     alt='img' src='https://occ-0-7199-784.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABdizvQ3w7OL9FcqrX3BQ682OPVI4a0jiBjA_TS20e2lyyZ80hLWu6db1X2Ysoefmv5UGUoaw4qQ2_sOkhTyuxuleGY5ftwEOl6B_xpB8HK_wlVfSdug3g5WkuLrK3HmC6b6grYR0Wk57qVyWtl4gGXKOCAbK3284s3KH4KphXRMy5u23UZcjPA.webp?r=dd3'/>
<div style={{width:"40%",fontSize:"22px",marginTop:"1.5%"}}>
Birmingham, in 1919. A family gang reigns over a district of the city: the Peaky Blinders, so named for the razor blades they hide in the visor of their caps.
</div>
<div style={{marginTop:"1.5%"}}>
<Fade top cascade >
<a href='https://www.netflix.com/watch/80003008?trackId=254015180&tctx=0%2C0%2Cef9c4dcb-13f3-43e9-aaac-201fea0c864d-146034962%2CNES_F216E4F3A695CF11193057505507F3-951BB306AEF2A8-80EE9359A4_p_1690575565951%2CNES_F216E4F3A695CF11193057505507F3_p_1690575565951%2C%2C%2C%2C%2CVideo%3A80002479%2CbillboardPlayButton'>
<Button variant="light" size='lg' style={{marginRight:"10px",width:"120px"}}><PlayArrowIcon/> Play</Button>
  </a>
  <a href='https://www.netflix.com/watch/80003008?trackId=254015180&tctx=0%2C0%2Cef9c4dcb-13f3-43e9-aaac-201fea0c864d-146034962%2CNES_F216E4F3A695CF11193057505507F3-951BB306AEF2A8-80EE9359A4_p_1690575565951%2CNES_F216E4F3A695CF11193057505507F3_p_1690575565951%2C%2C%2C%2C%2CVideo%3A80002479%2CbillboardPlayButton'>
  <Button variant="secondary" size='lg' style={{width:"170px"}}><InfoIcon/> More Info</Button>
  </a>
</Fade>
</div>
</div>
    </Fade>

</div>

    </Slide>
      )
}

export default WelcomeMovie