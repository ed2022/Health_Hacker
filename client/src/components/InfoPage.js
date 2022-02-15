import React from 'react';
import { Button } from './Button';
import '../styles/InfoPage.css';

function InfoPage() {
  return (
    <div className='hero-container'>
      
      {/* <img src='../components/pages/images/front_page.jpg'/> */}
      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default InfoPage;
