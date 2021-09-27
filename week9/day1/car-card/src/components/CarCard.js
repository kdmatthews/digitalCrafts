import React, { Component } from 'react'



export default class CarCard extends Component {
   
    state = {
        carImage: "https://uncrate.com/p/2021/06/bugatti-la-voiture-noire-1.jpg",
        changeName: true,
        bugatti: {
            make: "Bugatti",
            model: "La voiture noire",
            engine: "v16",
            horsepower: "1500",
            price: "19000000",
            image: [
              {
                primary: "https://uncrate.com/p/2021/06/bugatti-la-voiture-noire-1.jpg",
                secondary:
                  "https://assets.newatlas.com/dims4/default/f863a29/2147483647/strip/true/crop/1920x1029+0+0/resize/1440x772!/quality/90/?url=http%3A%2F%2Fnewatlas-brightspot.s3.amazonaws.com%2Farchive%2Fbugatti-la-voiture-noire-21.jpeg",
              },
            ],
            transmission: "7 speed dual clutch",
            topSpeed: [{ US: "261", Metric: "420" }],
          }
    }
    changeImage = () => {
        let name = this.state.changeName 
        ? this.state.bugatti.image[0].primary
        : this.state.bugatti.image[0].secondary

        this.setState({
            carImage: name,
            changeName: !this.state.changeName
        })
    }
    newPrice = (number) => {
        return parseFloat(number).toLocaleString('us-US', { style: 'currency', currency: 'USD' });
    }
    
    render() {
        return (
            <div className="cars">
                <img src={this.state.carImage} width="400" height="300"></img>
               <h1>{this.state.bugatti.make}</h1>
               <h2>{this.state.bugatti.model}</h2>
               <h3>{this.newPrice(this.state.bugatti.price)}</h3>
               <p>Engine: {this.state.bugatti.engine}</p>
               <p>Horsepower: {this.state.bugatti.horsepower}</p>
               <p>Transmission: {this.state.bugatti.transmission}</p>
               <p>Top Speed: 
                   US{this.state.bugatti.topSpeed[0].US}   Metric{this.state.bugatti.topSpeed[0].Metric}</p>
                <button onClick={this.changeImage}>Change Picture</button>
              
            </div>
             

           
        
            
    
        )
    }
}
