import React, { Component } from "react";

import Animal from "./Animal";
import "./styles.css";

class App extends Component {
  render() {
    const details = [
      {
        name: "Tiger",
        number: 3890,
        endangered: true,
        photo: "https://source.unsplash.com/Si6Obte6Bu0/200x100"
      },
      {
        name: "Brown Bear",
        number: 2000,
        endangered: false,
        photo: "https://source.unsplash.com/c8XlAc1akIU/200x100"
      },
      {
        name: "Red Panda",
        number: 1000,
        endangered: true,
        photo: "https://source.unsplash.com/2zYHKx8jtvU/200x100"
      }
    ];
    return (
      <div className="App">
        <Animal details={details}>
          <h3>Endangered Animals</h3>
        </Animal>
      </div>
    );
  }
}

export default App;
