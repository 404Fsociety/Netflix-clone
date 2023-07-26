import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';


const AddMovie = ({add}) => {

const [show, setShow] = useState(false);

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

const[title,setTitle]=useState("")
const[description,setDescription]=useState("")
const[rate,setRate]=useState(0)
const[posterUrl,SetPosterUrl]=useState("")

const handleAdd = ()=>{
    let newmovie ={title,description,rate,posterUrl}
    add(newmovie)
    handleClose()
}
  return (
    <div style={{marginLeft:"5%",marginBottom:"10%",marginTop:"3%"}}>
    <Button style={{backgroundColor:"red",border:"red"}} onClick={handleShow} size="lg">
        Wanna add your movie ?
      </Button>

      <Modal show={show} onHide={handleClose} >
        <Modal.Header closeButton style={{backgroundColor:"#181c22"}}>
          <Modal.Title style={{color:"#ff1d1f"}}>Adding new movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form.Label>Movie title</Form.Label>
        <Form.Control onChange={(e)=>setTitle(e.target.value)} placeholder="Enter your movie title please"  style={{marginBottom:"5%"}} type='text'/>
        <Form.Label>Movie description</Form.Label>
        <Form.Control onChange={(e)=>setDescription(e.target.value)} placeholder="Enter your movie description please" style={{marginBottom:"5%"}}type='text'/>
        <Form.Label>Movie rate</Form.Label>
        <Form.Control max={5} min={0} onChange={(e)=>setRate(e.target.value)} placeholder="Enter your movie rate please" style={{marginBottom:"5%"}}type='number'/>
        <Form.Label>Movie poster URL</Form.Label>
        <Form.Control onChange={(e)=>SetPosterUrl(e.target.value)} placeholder="Enter your movie poster url please" type='text'/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button style={{backgroundColor:"red",border:"red"}} onClick={handleAdd}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default AddMovie