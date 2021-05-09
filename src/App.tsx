import React from 'react';
import Location from './components/Location'

import './App.css';

const App: React.FunctionComponent = () => {
  
  fetch(`api.openweathermap.org/data/2.5/weather?lat=39&lon=-86&appid=3a275e1d9dcae14ac0fe211c29463182`)
      .then(response => response.json())
      .then(data => {
          console.log(data);
         
          
      })    
      
      .catch(e => {
          console.log();
          
      });

  
 
  return (
    <div className="App">
      <Location />

      <h2></h2>
    </div>
  );
}

export default App;


