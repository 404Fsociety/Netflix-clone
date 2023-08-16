import React from 'react'
import './SlideList.css'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Slide from 'react-reveal/Slide';

export default function SlideList() {
  return (
    <div className='list'>
      <Slide right>
      <span className='listTile'>Continue watching for Nizar</span>
        <div className='wrapper'>
        <ArrowBackIosIcon className='slideArrow left'fontSize='large'/>
            <div className='containerSlide'>
                <img className='imgSlide' alt='img' src='https://www.streamingdigitally.com/wp-content/uploads/2023/06/spiderhead.webp'/>
                <img className='imgSlide' alt='img' src='https://www.streamingdigitally.com/wp-content/uploads/2023/06/silverton-siege.jpeg'/>
                <img className='imgSlide' alt='img' src='https://occ.a.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABRFXxJYU9mw5swSkT8rESA73T1diESk48bpghj5d-mWnv2Up320Sehv56bPvJAil3fWmLs5y0mHIC-wshtrU-SzBtOQmfUbOsFx_61eyiXLb-UIpxhjuOgJUFydxKO9DrOG6Kg.jpg?r=4e7'/>
                <img className='imgSlide' alt='img' src='https://occ-0-37-41.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABTW_A7CnAGiI1q_tL26XJos2JHoIVkz4Gc-034J1PA9TsDAxeU13NnZ4dcKSMcyKZ8tMtYu8Ukkg366G0dBZNdeQU0GmkzXNP7CJL04iv7K6q6jnfyL3Jfo1yQuhpG_QCRX4fQ.jpg?r=80b'/>
                <img className='imgSlide' alt='img' src='https://occ-0-7200-778.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABXpLQo5Rn1rTrT3pO-5_6C5r8lkfwf-geNAmR9SbqUMMN8hpQee6hZPus8VFgdAjcC-69x-Ae9MM4WcHlZJAZlnnfMAK394nsfi78wwSsjEAhKxIM5nTqxu39hf1Nxl21F7n.jpg?r=be7'/>
                <img className='imgSlide' alt='img' src='https://occ-0-7200-778.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABTdlqFkIVicxW8G65iOV3D9TBjKrfo6XCxAEYbbcHm43XA96UVMMNBfdpNKlOZGJhj8yhG45g0bRqJkQSHZqnMY64HrQh44oYB9URKblckt1COMBjjU4cx2fGmb9zTIvcNhZ.jpg?r=44d'/>
                <img className='imgSlide' alt='img' src='https://occ-0-7200-778.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABe4WLPYbOZBaUw665Z_LCsQGxuZFf3lfa4UHkJlzqzAe978kvMoWyO4JVFmKcIlCnCP51EFADe121UV2uhhT4xbxzzsDrpdiMG8Jrq7PB9NkbeW5FbFQUQz_dzMJIUGjU2A1.jpg?r=e51'/>
                <img className='imgSlide' alt='img' src='https://occ-0-7200-778.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABSQIJsM1ufFpXG2AGFzfKD_zqb7RJdDPovP0jQKL-3arFIsQOdoeoQlmswX58jAJrWD-3LkPjPf7VWf_BLaYMO-PMT73pAOzuhQh8tvsR_6jubA8AB13vwVsY0UIpLVoqWD0.jpg?r=86a'/>
            </div>
        <ArrowForwardIosIcon className='slideArrow right'fontSize='large'/>
        </div>
      </Slide>
    </div>
  )
}
