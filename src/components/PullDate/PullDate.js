import React, { Component } from 'react';

import moment from 'moment';

class PullDate extends Component {
    getCurrentDate = () => {
        const today = new Date();
        const dd = today.getDate();
        console.log(dd);
        const mm = today.getMonth() + 1; //January is 0!
        const yyyy = today.getFullYear();
        const date = `${mm}/${dd}/${yyyy}`;
        console.log('Hio', date);

        return date;
    }

    render() {
        return (
            <div>
                <h2>Welcome!</h2>
                <h3>Today is: { moment(this.getCurrentDate()).format("MMM Do, YYYY")}</h3>
            </div>
        )
    }
}

export default PullDate;