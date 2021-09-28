import React, { Component } from "react";
import PropTypes from "prop-types";

class GetMeACat extends Component {
  state = {
    meowImages: "",
  };

  componentDidMount() {
    console.log("Componentdidmount");
    this.getCats();
  }

  getCats = async () => {
    console.log("getCats");
    const cats = await fetch("https://cataas.com/cat");
    this.setState({ meowImages: cats.url });
    // const catsJson = await cats.json();
    console.log({ cats });
  };

  render() {
    return (
      <div>
        <h1>Meowdy</h1>
        <img src={this.state.meowImages} alt="" srcset="" />
      </div>
    );
  }
}

export default GetMeACat;

