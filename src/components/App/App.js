import React from 'react';
import './App.css';
import PullDate from '../PullDate/PullDate'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>
          Workout Tracker
        </h2>
      </header>
      <div>
        <PullDate />
        <h3>
          Did you workout today?
        </h3>
        <input type="radio" id="yes-button"/>
        <label htmlFor="yes-button">Yes</label>
        <input type="radio" id="no-button" />
        <label htmlFor="no-button">No</label>
        <input type="radio" id="not-yet-button" />
        <label htmlFor="not=yet-button">Not Yet</label>
      </div>
    </div>
  );
}

export default App;
