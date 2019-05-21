import React, { Component } from 'react';
import ParticleEffectButton from 'react-particle-effect-button'

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
                <ParticleEffectButton
                    color='#00FF00'
                    hidden={this.state.hidden}>
                <button id="yesButton">
                        YES!
                </button>
                </ParticleEffectButton>
            </div>
        )
    }
}

export default Question;