import React from 'react';
import '../styles/Cards.css';
import CardInput from './CardInput';

function Cards() {
  return (
    <div className='cards'>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardInput
              src={require('./pages/images/currentPlans.jpeg')}
              text='View your plans and update them!'
              label='Current Plans'
              path='/'
            />
            <CardInput
              src={require('./pages/images/bmi.webp')}
              text='See your most recent reported BMI records'
              label='BMI Check'
              path='/'
            />
          </ul>
          <ul className='cards__items'>
            <CardInput
              src={require('./pages/images/heart.jpg')}
              text='See if you are reaching your maxiumm by viewing your reported heart rate here!'
              label='Heart Rate'
              path='/'
            />
            <CardInput
              src={require('./pages/images/eat.gif')}
              text='See the recommended mean plans and update them to see if you are on the right track!'
              label='Healthing Eating'
              path='/'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
