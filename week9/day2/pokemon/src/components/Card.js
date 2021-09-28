import React, { Component } from 'react'

export default class Card extends Component {
    state ={
        flipped: false,
    }

    flipFunction = () => {
        this.setState({
            flipped:  !this.state.flipped,
           
        })
    }
    render() {
        const { flipped } = this.state;
        const { id, name, hp, sprites, changeImage } = this.props.data;
       

       
       
        return (
            <div className="Card">
            
           <p>{name}</p>
           <img src={flipped ? sprites.back : sprites.front} alt=""/>
           <p>{hp}</p>
        {/* {data[0].pokemon.map((mon, index) => (<h2>{mon.name}</h2>))}
        {data[0].pokemon.map((mon, index) => (<h3>{mon.hp}</h3>))}
        {data[0].pokemon.map((mon, index) => (<img src={mon.sprites.front}></img>))} */}
            <button onClick={this.flipFunction}>Flip</button>
            </div>
        )
    }
}
