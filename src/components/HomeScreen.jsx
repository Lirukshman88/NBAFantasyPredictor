import React, { Component } from "react";
import './content.css';

class HomeScreen extends Component {
  render() {
    return (
      <div className= "diver">
        <center>
          <h2><font size = "10"><b>Welcome to NBA Fantasy Predictor</b></font></h2>
          <p>This will help you pick out the players you need for your fantasy team. By clicking on the position above you can see each players
          recent stats and predicted stats. Note it may take a few seconds for each position page to load</p>
        </center>
     </div>
    );
  }
}

export default HomeScreen;
