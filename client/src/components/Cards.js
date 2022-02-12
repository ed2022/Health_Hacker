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
              src='./components/images/currentPlan.jpeg'
              text='View your plans and update them!'
              label='Current Plans'
              path='/'
            />
            <CardInput
              src='./components/images/'
              text='See your most recent reported BMI records'
              label='BMI'
              path='/'
            />
          </ul>
          <ul className='cards__items'>
            <CardInput
              src='images/img-3.jpg'
              text='See if you are reaching your maxiumm by viewing your reported heart rate here!'
              label='Heart Rate'
              path='/'
            />
            <CardInput
              src='images/img-4.jpg'
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
