import React, { Component } from 'react';

class Question extends Component {

    render() {
        return (
            <div>
                <h3>
                    Did you workout today?
                </h3>
                <input type="radio" id="yes-button" name="workout-button" />
                <label htmlFor="yes-button">Yes</label>
                <input type="radio" id="not-yet-button" name="workout-button" />
                <label htmlFor="not=yet-button">Not Yet</label>
            </div>
        )
    }
}

export default Question;