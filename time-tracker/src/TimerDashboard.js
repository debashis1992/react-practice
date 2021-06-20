import React from 'react';
import TimersList from './TimersList';
import './TimerDashboard.css';

class TimerDashboard extends React.Component {
    state = {
        info: information,
        isToggleAddTimer: false,
        tempField: ''
    }

    handleAddTimer = () => {
        this.setState(prevState => ({
            isToggleAddTimer: !prevState.isToggleAddTimer
        }))
    }

    handleChange = (e) => {
        this.setState({tempField : e.target.value})
    }

    handleAddNewTimerItem = () => {
        
        this.setState(prevState => ({
            info: prevState.info.concat({title: prevState.tempField, initialTime: 0}),
            isToggleAddTimer : false
        }))
    }

    handleCancel = () => {
        this.setState({isToggleAddTimer : false})
    }

    render() {
        return (
            <div className="dashboard">
                <h3>TimerDashboad</h3>
                <TimersList information={this.state.info}/>
                <button onClick={this.handleAddTimer}>Add Timer</button>
                {this.state.isToggleAddTimer && 
                <div>
                    <input type="text" value={this.state.tempField} onChange={this.handleChange} />
                    <button onClick={this.handleAddNewTimerItem}>Add new Timer</button>
                    <button onClick={this.handleCancel}>Cancel</button>
                </div>}
            </div>
            
        )
    }
}
const information = [
    {title: "Learn React", initialTime: 0},
    {title: "Learn JS", initialTime: 0},
    {title: "Learn Datastructures", initialTime: 0},
    {title: "Learn Algorithms", initialTime: 0},
    {title: "Learn Git Advances", initialTime: 0},
]

export default TimerDashboard;