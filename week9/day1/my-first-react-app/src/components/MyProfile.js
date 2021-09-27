import React, { Component } from 'react'

export default class MyProfile extends Component {
    state = {
        firstName: "Kayla",
        lastName: 'Matthews',
        City: 'Tampa',
        State: "Florida",
        profilePic: 'https://media-exp1.licdn.com/dms/image/C4D03AQEYzcrN9eIbHg/profile-displayphoto-shrink_800_800/0/1541723382779?e=1638403200&v=beta&t=WnAV88fYpx95UB4ZLsAc6Wl5pK8xKCZwpC39d3FHvdA'
    }
    ChangeCity = () =>{
        let city = "Wonderland"
        this.setState({ City: city })
    }
    render() {
        return (
            <div>
                <p>First Name: {this.state.firstName}</p>
                <p>Last Name: {this.state.lastName}</p>
                <p>Location: {this.state.City}, {this.state.State}</p>
                <img src={this.state.profilePic} alt=""></img>
                <button onClick={this.ChangeCity}>Change City</button>
            </div>
        )
    }
}

