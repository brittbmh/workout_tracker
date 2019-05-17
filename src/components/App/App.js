import React from 'react';
import './App.css';
import PullDate from '../PullDate/PullDate'
import Streak from '../Streak/Streak';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          DYWT
        </h1>
      </header>
      <div>
        <PullDate />
        <Streak />
        <h3>
          Did you workout today?
        </h3>
        <input type="radio" id="yes-button" name="workout-button"/>
        <label htmlFor="yes-button">Yes</label>
        <input type="radio" id="not-yet-button" name="workout-button"/>
        <label htmlFor="not=yet-button">Not Yet</label>
      </div>
    </div>
  );
}

export default App;
