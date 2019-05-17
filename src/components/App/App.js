import React from 'react';
import './App.css';
import PullDate from '../PullDate/PullDate'
import Streak from '../Streak/Streak';
import Calendar from '../Calendar/Calendar';
import Question from '../Question/Question';

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
        <Question />
        <Calendar />
      </div>
    </div>
  );
}

export default App;
