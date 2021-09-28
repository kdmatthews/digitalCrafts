import React, { Component } from "react";
import Room from "./Room";
import "./Building.css";

export default class House extends Component {
    state = {
        peopleAreHome: false,
    }

    weAreHome = () => {
        this.setState({ peopleAreHome: !this.state.peopleAreHome });
    }
    render() {
        const bork = "bork"
       
        return (
            <div className="House">
                <h1>House</h1>
                <h1>People {this.state.peopleAreHome ? "are" : "aren't"} Home</h1>
                <Room furniture={this.props.couch} turnOnALight={this.props.turnOnALight} weAreHome={this.weAreHome}/>
                <Room furniture={this.props.chair}/>
                <Room furniture={this.props.tv} bork={bork} weAreHome={this.weAreHome}/>
            </div>
        )
    }
}


