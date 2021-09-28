import React, { Component } from 'react'
import "./Building.css";

export default class Room extends Component {
    render() {
        const { furniture, turnOnALight, weAreHome } = this.props;
        return (
       
            <div className="Room">
                <h1>Room</h1>
                {furniture}
                {this.props.bork}
                <button onClick={turnOnALight}>Turn On Light</button>
                <button onClick={weAreHome}>people are home</button>
            </div>
        )
    }
}
