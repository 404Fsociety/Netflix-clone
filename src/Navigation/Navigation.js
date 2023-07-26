import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import PublishedWithChangesIcon from '@mui/icons-material/PublishedWithChanges';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import './Navigation.css'

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
  };

  return (
    <div>
       <Navbar collapseOnSelect fixed="top" expand="lg" className={isScrolled ?"p-2 mb-2 bg-black bg-gradient text-white":"p-2 mb-2 bg-transparent bg-gradient text-white"}bg="dark" data-bs-theme="dark" style={{padding:"0px",height:"60px",}}  >
      <Container style={{marginLeft:"25px",marginRight:"25px", padding:"0px"}}>
        <Navbar.Brand href="#home">
          <img style={{width:"100px",height:"35px"}} alt='logo' src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto" style={{fontSize:"16px"}}>
            <Nav.Link href="#features">Home</Nav.Link>
            <Nav.Link href="#pricing">TV Shows</Nav.Link>
            <Nav.Link href="#pricing">Movies</Nav.Link>
            <Nav.Link href="#pricing">Latest</Nav.Link>
            <Nav.Link href="#pricing">MyList</Nav.Link>
            
          </Nav>
          <Nav style={{fontSize:"16px"}}>
            
            <Nav.Link eventKey={2} href="#memes">
              KIDS
            </Nav.Link>
            <Nav.Link href="#deets"><OverlayTrigger
      placement="bottom"
      overlay={
        <List className='listNav' sx={{ width: '25%' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <img className='img' alt="code 8" src="https://dnm.nflximg.net/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABbh33Kak_FAukPc9Uf0Y_WUH_ihzt1VvfAJnbHM8rQ1J-Cco-0zNKP0VL4ly1CEGrCzKWWG4YSh1wksYwuDTaulmh1G_Dds.jpg?r=2d9" />
        </ListItemAvatar>
        <ListItemText
          primary="Continue watching code 8"
          secondary={
            <React.Fragment>
              {" — 8 days ago"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li"/>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <img className='img' alt="code 8" src="https://assets.nflxext.com/us/email/gem/comingsoon/csInapp_112x63.png" />
        </ListItemAvatar>
        <ListItemText
          primary="Explore what's coming soon"
          secondary={
            <React.Fragment>
              {" — 1 month ago"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <img className='img' alt="code 8" src="https://dnm.nflximg.net/api/v6/kvDymu0eXRyicIuSUzvRrxrm5dU/AAAABQZs0iyJgXynM9kk-PFmiJfNY5xlbFwZxs_rZEv3OfPnngM_8qPgPBiMTP77j7YtNp2DSqf9xVe3qLtGEXCfwKZyKESTxvD11mtH3aT4S3KRJUWZ5fgEKQ7YO5UYfcZfURacWRxLM9VZv64.jpg?r=a68" />
        </ListItemAvatar>
        <ListItemText
          primary="New arrival Arnold"
          secondary={
            <React.Fragment>
              {" — 1month ago"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <img className='img' alt="code 8" src="https://dnm.nflximg.net/api/v6/kvDymu0eXRyicIuSUzvRrxrm5dU/AAAABXa9GmWmmrdc9zVsy0Z514OEtZkmwi9UT1XZ05T6h4-sqK7L_cWoY6GZCgDVxM6aGaData86oxWQmTSRuAuXEia-lsU43ZPinbL_EGEJ9qjo4smsdO2IXFxx5r_WP6BTncgP3eyA-5nXnbc.jpg?r=8e7" />
        </ListItemAvatar>
        <ListItemText
          primary="New arrival FUBAR"
          secondary={
            <React.Fragment>
              {" — 2 months ago"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <img className='img' alt="code 8" src="https://dnm.nflximg.net/api/v6/kvDymu0eXRyicIuSUzvRrxrm5dU/AAAABdlojzj17UIGrjc7YyJe0fimgrdVwH1psQ1G9FBDmWLTJECATaHtuTq20KnfiqWpRQHmzd1BZ6EnB8q7OKmIxGwF-SpPZHsR6-ip0SrYlar3B66AzvVtLWUAeKwkEefdwOnjFDot7COTmes.jpg?r=be5" />
        </ListItemAvatar>
        <ListItemText
          primary="New arrival quarterback"
          secondary={
            <React.Fragment>
              {" — 8 days ago"}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
      }
    >
      {({ ref, ...triggerHandler }) => (
        <NotificationsNoneIcon ref={ref} {...triggerHandler}/>
      )}
    </OverlayTrigger></Nav.Link>
            <NavDropdown title="Profile" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1"><img alt='nizar' src='https://occ-0-7199-784.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABXvHfQy06KCq87W959_ASfZ78T-34XjYXvXndSdD6n9DKjeKaMooe7LiYFm2kVFFtB_wH6sT4g_5TC1cDFHso1g86IUDq10.png?r=962'/> Nizar</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2"><img alt='Karim' src='https://occ-0-7199-784.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABY20DrC9-11ewwAs6nfEgb1vrORxRPP9IGmlW1WtKuaLIz8VxCx5NryzDK3_ez064IsBGdXjVUT59G5IRuFdqZlCJCneepU.png?r=229'/> Karim
              </NavDropdown.Item>
              <NavDropdown.Item style={{marginLeft:"8px"}} href="#action/3.3"><DriveFileRenameOutlineIcon/> Manage Profiles</NavDropdown.Item>
              <NavDropdown.Item style={{marginLeft:"8px"}} href="#action/3.3"><PublishedWithChangesIcon/> Transfer Profile</NavDropdown.Item> 
              <NavDropdown.Item style={{marginLeft:"8px"}} href="#action/3.3"><PermIdentityIcon/> Account</NavDropdown.Item> 
              <NavDropdown.Item style={{marginLeft:"8px"}} href="#action/3.3"><HelpOutlineIcon/> Help Center</NavDropdown.Item> 
              <NavDropdown.Divider />
              <NavDropdown.Item style={{textAlign:"center",fontSize:"13px"}} href="#action/3.4">
                Sign out of Netflix
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Navigation