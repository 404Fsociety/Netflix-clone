import React from 'react'
import { Button, Form } from 'react-bootstrap'
import ReactStars from 'react-stars'
import './MovieFilter.css'
import SearchIcon from '@mui/icons-material/Search';

const MovieFilter = ({search,setsearch,newRate,setnewRate}) => {

  const reset =()=>{
    setsearch("")
    setnewRate(0)
  }
  return (
    <div style={{marginTop:"8%"}}>
        <Form.Control id='form' placeholder="Search..." value={search} onChange={(e)=> setsearch(e.target.value)}/>
        <div id='starsDiv'>
        <Form.Label className='label'><SearchIcon/> Search by movie rate  :</Form.Label>
        <ReactStars  count={5} size={30} color2={'#ffd700'} half={false} value={newRate} onChange={(rate)=>setnewRate(rate)}/>
        </div>
        <div id='btn'>
        <Button onClick={reset} style={{backgroundColor:"red",borderColor:"red",width:"90px",height:"35px"}}>RESET</Button>
        </div>
    </div>
  )
}

export default MovieFilter