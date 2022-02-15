import React from 'react';
import InfoCards from '../InfoCards'
import  '../../styles/InfoPage.css'


export default function About() {
  return (
    <div className='info-container'>
      {/* <img id="info-img" src={require('./images/front_page.jpg')} alt="info-img"/> */}
      <video src={require('../pages/images/firstPage.mp4')} autoPlay loop muted />
      <h1><br/>YOU'RE HEALTH JOURNEY STARTS HERE!</h1>
      <div className='hero-btns'>
       <InfoCards></InfoCards>
      </div>
    </div>
  );
}
