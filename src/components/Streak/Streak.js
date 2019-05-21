import React, { Component } from 'react';

class Streak extends Component {
    streakCount = () => {
        return 10;
    }

    render() {
        return (
            <div>
                <h3>Your current streak is: {this.streakCount()} days</h3>
            </div>
        )
    }
}

export default Streak;