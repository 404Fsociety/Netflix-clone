import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './FAQ.css'
import Slide from 'react-reveal/Slide';

export default function BasicAccordion() {
  return (
    <div id='FAQ'>
        
        <Slide top>
        <h1 id='title'>Frequently Asked Questions</h1>
        </Slide>
        <Slide bottom>
        <Accordion style={{marginBottom:"0.7%",backgroundColor:" rgb(61, 61, 61)",color:"white",borderBottomColor:"rgba(255, 3, 3, 0.400)",borderBottomStyle:"solid"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>What is Netflix ?</Typography>
        </AccordionSummary>
        <AccordionDetails className='typo'>
          <Typography>
          Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.

You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!
          </Typography>
        </AccordionDetails>
      </Accordion>
        </Slide>

        <Slide bottom>
        <Accordion style={{marginBottom:"0.7%",backgroundColor:" rgb(61, 61, 61)",color:"white",borderBottomColor:"rgba(255, 3, 3, 0.400)",borderBottomStyle:"solid"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>How much does Netflix cost ?</Typography>
        </AccordionSummary>
        <AccordionDetails className='typo'>
          <Typography>
          Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from USD9.99 to USD3.99 a month. No extra costs, no contracts.
          </Typography>
        </AccordionDetails>
      </Accordion>
        </Slide>

        <Slide bottom>
        <Accordion style={{marginBottom:"0.7%",backgroundColor:" rgb(61, 61, 61)",color:"white",borderBottomColor:"rgba(255, 3, 3, 0.400)",borderBottomStyle:"solid"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Where can i watch ?</Typography>
        </AccordionSummary>
        <AccordionDetails className='typo'>
          <Typography>
          Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.

You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.
          </Typography>
        </AccordionDetails>
      </Accordion>
        </Slide>

        <Slide bottom>
        <Accordion style={{marginBottom:"0.7%",backgroundColor:" rgb(61, 61, 61)",color:"white",borderBottomColor:"rgba(255, 3, 3, 0.400)",borderBottomStyle:"solid"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>How do i cancel ?</Typography>
        </AccordionSummary>
        <AccordionDetails className='typo'>
          <Typography>
          Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.
          </Typography>
        </AccordionDetails>
      </Accordion>
        </Slide>

        <Slide bottom>
        <Accordion style={{marginBottom:"0.7%",backgroundColor:" rgb(61, 61, 61)",color:"white",borderBottomColor:"rgba(255, 3, 3, 0.400)",borderBottomStyle:"solid"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>What can i watch on Netflix  ?</Typography>
        </AccordionSummary>
        <AccordionDetails className='typo'>
          <Typography>
          Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.
          </Typography>
        </AccordionDetails>
      </Accordion>
        </Slide>

        <Slide bottom>
        <Accordion style={{marginBottom:"0.7%",backgroundColor:" rgb(61, 61, 61)",color:"white",borderBottomColor:"rgba(255, 3, 3, 0.400)",borderBottomStyle:"solid"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>is Netflix good for kids ?</Typography>
        </AccordionSummary>
        <AccordionDetails className='typo'>
          <Typography>
          The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.

Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.
          </Typography>
        </AccordionDetails>
      </Accordion>
        </Slide>
    </div>
  );
}