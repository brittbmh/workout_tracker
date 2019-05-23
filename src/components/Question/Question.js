import React, { Component } from 'react';

class Question extends Component {
    //add conditional render to display something different if they already answered yes that day
    //switch to particle effect YES button that follows up with a random affirmative message

    state = {
        hidden: false
    }

    render() {
        return (
            <div>
                <h3 id="workoutQuestion">
                    Did you workout today?
                </h3>
                <button id="yesButton">
                        YES!
                </button>
                <p><a>not yet</a></p>
            </div>
        )
    }
}

export default Question;