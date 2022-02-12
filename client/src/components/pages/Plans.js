import React from 'react';

export default function Portfolio() {
  return (
    <div>
        <div className="card col-12 project1">
         <img id="profile-img" src={require('./images/wfh.png')} alt="project-img"/>
          <div className="card-body">
            <h1 className="card-title">At-Home Workout Routine</h1>
            <p className="card-text"> Whether you’re a seasoned expert or new to strength training, working out at home is a great option when you can’t get to the gym or need a change of pace.<br/><br/>The at-home workouts below require a limited amount of equipment. Plus, some of the movements can be substituted for bodyweight exercises in which you use your body’s own weight as resistance.<br/><br/>These exercises can serve as a weeklong beginner’s routine or cycled to provide several sessions per week for advanced trainees.<br/><br/>If your goal is weight loss, you can add a form of cardio, such as running or cycling, between sessions. <a href="http//www.google.com">click here to read more.</a></p>
          </div>
        </div>
        <div className="card col-12 project2">
          {/* <img id="profile-img" src={require('./')} alt="project-img"></img> */}
          <div className="card-body">
            <h1 className="card-title">Beginner’s Workout Routine</h1>
            <p className="card-text">Starting out in the gym can seem intimidating, but with proper guidance the process becomes more approachable — and even invigorating.<br/><br/>As a beginner, you can progress very quickly because almost any exercise promotes muscle and strength gains. Still, it’s important to avoid overexertion, which can lead to injuries or decreased performance.<br/><br/>This workout routine has you in the gym 3 days per week (such as Monday, Wednesday, and Friday), with full-body sessions completed each day. This allows you to get used to new movements, focus on proper form, and take time to recover.<br/><br/>You can add reps and sets as needed as you progress.<br/><br/>The beginner phase should last as long as you continue to improve. Some people may plateau at around 6 months, whereas others may continue to see results for over a year.<a href="https://www.healthline.com/nutrition/workout-routine-for-men#beginner">click here to read More </a></p>
          </div>
        </div>
        <div className="card col-12 project3">
          {/* <img id="profile-img" src={require('./images/note.png')} alt="project-img"></img> */}
          <div className="card-body">
            <h1 className="card-title">Intermediate Workout Routine</h1>
            <p className="card-text about-mes">After working hard in the gym for several months, it’s time to step your training up a notch to keep your gains coming.<br/><br/>At this point, you should have good exercise technique and be able to handle more weight on the bar.<br/><br/>This 4-day-per-week intermediate program increases reps and sets to stimulate new muscle growth. When they become too easy, you can gradually add more weight or more reps/sets.<br/><br/>If done right, you can follow this routine for several years until you reach an advanced level. It may be helpful to switch up your exercises on occasion to keep yourself engaged and prevent burnout.<br/><br/>Remember that soreness is not always an indicator of muscle growth. Now that you have some training experience, you may not get sore after every workout.<a href="https://www.healthline.com/nutrition/workout-routine-for-men#beginner">click here to read More </a></p> 
          </div>
      </div>
      <div className="card col-12 project3">
          {/* <img id="profile-img" src={require('./images/note.png')} alt="project-img"></img> */}
          <div className="card-body">
            <h1 className="card-title">Advanced Workout Routine</h1>
            <p className="card-text about-mes">Additional volume (sets and reps) and intensity (weight on the bar) is essential for advanced gym-goers to keep gaining muscle. Keep in mind that this routine should not be attempted unless you’ve been training consistently for 2 or more years.<br/><br/>While the muscle gains won’t come as fast as they did when you were a beginner, there’s still room for significant progress at this stage.<br/><br/>This gruelling workout routine has you in the gym 6 days per week with 1 rest day in between. It follows a pull-push-legs pattern, hitting each muscle group twice per week, with supersets incorporated for maximum hypertrophy (muscle growth).<br/><br/>Again, you can increase weight on the bar, as well as sets and reps, from week to week to ensure continued progress while following this program.<a href="https://www.healthline.com/nutrition/workout-routine-for-men#beginner">click here to read More </a></p> 
          </div>
      </div>
    </div>
  );
}
