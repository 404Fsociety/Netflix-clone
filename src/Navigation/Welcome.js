import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import image from "./welcomeImg.jpg"
import { Fade, Slide } from 'react-reveal';

const Welcome = () => {
  return (
    <Slide left>
          <div style={{backgroundImage:`url(${image})`,backgroundSize:"cover",height:"690px"}}>
       <div style={{textAlign:"end",marginRight:"40px",paddingTop:"5%"}}>
        <Button onClick={() => alert('stop playing boy and go to the real website if you wanna sign in')} style={{backgroundColor:"red",borderColor:"red",width:"90px",height:"35px"}}>Sign In</Button>
        </div> 
        <Fade right cascade>
          <div style={{color:"white",marginTop:"7%"}}>
            <h1 style={{fontSize:"66px",marginRight:"25%",marginLeft:"25%"}}>Unlimited movies, TV shows, and more.</h1>
            <h3 style={{marginTop:"20px"}}>Watch anywhere. Cancel anytime.</h3>
            <h5 style={{marginTop:"20px"}}>Ready to watch? Enter your email to create or restart your membership.</h5>
        </div>
        <div style={{display:"flex",justifyContent:"center"}}>
        <Form style={{width:"700px",height:"100px",marginTop:"1%"}}>
      <Form.Group style={{display:"flex"}} className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Control style={{width:"1000px",height:"60px",borderTopRightRadius:"0",borderBottomRightRadius:'0'}} type="email" placeholder="Email address" />
        <Button onClick={() => alert('your first step : click on the sign in button ')} style={{backgroundColor:"red",borderColor:"red",width:"300px",height:"60px",fontSize:"18px",borderTopLeftRadius:"0",borderBottomLeftRadius:"0"}}>GET STARTED</Button>
      </Form.Group>
    </Form>
    
        </div>
        </Fade>
        
        
    </div>
    </Slide>
  )
}

export default Welcome