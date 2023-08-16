import { Fade, Slide } from 'react-reveal';
import './publicite.css';

const Publicite = () => {
  return (
    <div id='pub'>
      <Slide right>
        <img
          alt='img'
          src='https://i.pinimg.com/originals/57/28/ae/5728aef13f51223982c0b8f9d71c0aba.gif'
          id='ntflx'
        />
      </Slide>
      <div className='black-bg'>
        <Fade top>
          <div>
            <h1>Enjoy on your TV.</h1> <br />
            <p>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
          </div>
        </Fade>
        <Fade right>
          <img
            style={{ width: '60%', height: '130%' }}
            alt='img'
            src='https://netflix-images.manikantp.repl.co/Netflix1.gif'
            id='tv'
          />
        </Fade>
      </div>
    </div>
  );
};

export default Publicite;

