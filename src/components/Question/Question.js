import React, { Component } from 'react';
import './Question.css';

class Question extends Component {
    //add conditional render to display something different if they already answered yes that day
    //switch to particle effect YES button that follows up with a random affirmative message

    handleYes = () => {
        //dispatch to saga to add today to database
        //replace button with star
    }

    render() {
        return (
            <div>
                <h3 id="workoutQuestion">
                    Did you workout today?
                </h3>
                <button id="yesButton" onClick={this.handleYes}>
                    <span>YES!</span>
                </button>
                <p id="notYet"><a href="#">not yet</a></p>
            </div>
        )
    }
}

export default Question;