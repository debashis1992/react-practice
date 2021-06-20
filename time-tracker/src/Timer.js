import React from 'react';
import './TimerItem.css';

class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {...props.info, isToggleOn: false, tempText:'', isDeleted: false};
        this.tick = this.tick.bind(this);
        this.handleStart = this.handleStart.bind(this);
        this.handleStop = this.handleStop.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleStart() {
        if(this.timerID!== undefined) {
            console.log("Timer already started")
            return;
        }
        this.timerID = setInterval(this.tick, 1000);
    }

    handleStop() {
        clearInterval(this.timerID);
        this.setState({initialTime: 0})
    }

    handleEdit() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }))
    }

    tick() {
        this.setState(prevState => ({
            initialTime: prevState.initialTime + 1
        }));
    }

    handleDelete = () => {
        this.setState(prevState => ({
            isDeleted: true
        }))
    }

    handleCancel = () => this.setState({isToggleOn: false})
    handleChange = (e) => this.setState({tempText: e.target.value})

    handleSubmit() {
        this.setState({title: this.state.tempText, isToggleOn: false})
    }

    render() {
        if(this.state.isDeleted) return null
        return (
            <div className="timer-item">
                <p>Title: {this.state.title}</p>
                <p>Elapsed Time: {this.state.initialTime}</p>
                <button onClick={this.handleStart}>Start</button>
                <button onClick={this.handleStop}>Stop</button>
                <button onClick={this.handleEdit}>Edit</button>
                <button onClick={this.handleDelete}>Delete</button>
                {this.state.isToggleOn && 
                <div>
                    <label>
                        Update title:
                        <input type="text" value={this.state.tempText} onChange={this.handleChange}/>
                    </label>
                    <button onClick={this.handleSubmit}>Submit</button>
                    <button onClick={this.handleCancel}>Cancel</button>
                </div>}
            </div>
        )
    }
}

export default Timer;
