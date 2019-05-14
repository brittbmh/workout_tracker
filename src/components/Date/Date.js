import React, { Component } from 'react';

import moment from 'moment';

class Date extends Component {
    getCurrentDate = () => {
        const today = new Date();
        console.log(today);
        
        const dd = today.getDate();
        const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        const yyyy = today.getFullYear();
        const date = `${dd}/${mm}/${yyyy}`;
        console.log('Hio', date);

        return `<h3>Today is: ${date}</h3>`;
    }

    render() {
        return (
            <div>
                <p>Hi</p>
                { moment(this.getCurrentDate()).format("MMM Do, YYYY")}
            </div>
        )
    }
}

export default Date;