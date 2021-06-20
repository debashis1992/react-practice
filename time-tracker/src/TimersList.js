import React from 'react';
import Timer from './Timer';

class TimersList extends React.Component {
    render() {
        const listOfTimers = this.props.information.map((info, index) => {
            return <Timer info={info} key={index}></Timer>
        });

        return (
            <div>
                <h3>Timers</h3>
                <ul>
                    {listOfTimers}
                </ul>
            </div>
        )
    }
}



export default TimersList;