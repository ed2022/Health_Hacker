import React from 'react';
import '../styles/Cards.css';
import CardInput from './CardInput';

export default function InfoCards() {
  return (
    <div className='cards'>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardInput
              src={require('./pages/images/physicalHealth.jpg')}
              text='Choose from 100s of physical fitness plans that works for you! From at home to the fitness center, we have personalized recommendations!'
              label='Physical Health'
              path='/'
            />
            <CardInput
              src={require('./pages/images/meal.png')}
              text='Choose the right plan that works best for you! From our expertly picked recipes to put in site meal-preps delieved to your door!'
              label='Healthy Eating Habitis'
              path='/'
            />
          </ul>
          <ul className='cards__items'>
            <CardInput
              src={require('./pages/images/journal.jpg')}
              text='Working on yourself can be challanging without all the right components. Health Hacker will provide you with all that you need to see your progress!'
              label='Personal Health Journal'
              path='/'
            />
            <CardInput
              src={require('./pages/images/community.jpg')}
              text='You are not alone! We provide a great platform for you and others like you by forming a community! Help support each other in the nurashment of health both physically and mentally!'
              label='Community'
              path='/'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

