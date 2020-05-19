import React, { Component } from "react";
import {Card, Form, Button} from "react-bootstrap";
import './content.css';
import logo from './nbalogo.png'

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      queriedPlayers: [],
      searchedPlayers: ''
    };
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleSubmitName = this.handleSubmitName.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.handleAll = this.handleAll.bind(this);
  }

  handleChangeName(event) {
    this.setState({searchedPlayers: event.target.value});
  }

  handleSubmitName(event) {
    if (this.state.searchedPlayers !== '') {
      fetch('/players?name=' + this.state.searchedPlayers)
      .then(res => res.json())
      .then(queriedPlayers => this.setState({ queriedPlayers }))
      .catch(error => console.log(error));
    }
    event.preventDefault();
  }

  handleClear() {
    this.setState({queriedPlayers: []});
  }

  handleAll() {
    fetch('/players')
    .then(res => res.json())
    .then(queriedPlayers => this.setState({ queriedPlayers }))
    .catch(error => console.log(error));
  }

  handleFilter(stat, value) {
    fetch('/players?'+ stat + '=' + value)
    .then(res => res.json())
    .then(queriedPlayers => this.setState({ queriedPlayers }))
    .catch(error => console.log(error));
  }

  render() {
    const content = this.state.queriedPlayers.map((p) =>
      <li key = {p._id}>
      <Card>
        <Card.Body>
          <Card.Title>{p.name}</Card.Title>
          <Card.Subtitle className="mb-2">{p.team} / {p.position}</Card.Subtitle>
            <div className= "grid-container">
            <div className="grid-column">Stats</div>
            <div className="grid-column">Recent</div>
            <div className="grid-column">Predicted</div>
            <div className="grid-item">GP</div>
            <div className="grid-item">{p.gp}</div>
            <div className="grid-item">{p.gpPred}</div>
            <div className="grid-item">PPG</div>
            <div className="grid-item">{p.ppg}</div>
            <div className="grid-item">{p.ppgPred}</div>
            <div className="grid-item">APG</div>
            <div className="grid-item">{p.apg}</div>
            <div className="grid-item">{p.apgPred}</div>
            <div className="grid-item">RPG</div>
            <div className="grid-item">{p.rbg}</div>
            <div className="grid-item">{p.rbgPred}</div>
            </div>
        </Card.Body>
      </Card>
      </li>
     );
    return (
      <div>
        <div className= "diver">
          <center>
            <img src={logo} alt="logo"/>
            <h2><font size = "10"><b>Welcome to NBA Fantasy Predictor</b></font></h2>
            <p>
            This website will help you pick out the players you need for your NBA Fantasy Team.
            It predicts the Games Played, Points per game, Assists per game and Rebounds per game for each position.
            You can choose to find players by position using the tabs above, using the search bar below to look for players by name or use the advanced filters below for predicted PPG, RBG, APG and GP. </p>
            <Form.Label>Search Player By Name Below:</Form.Label>
            <Form className = "form-inline justify-content-center" onSubmit={this.handleSubmitName}>
                <Form.Control type="text" placeholder="Enter Player's Name Here" value={this.state.searchedPlayers} onChange={this.handleChangeName} />
                &nbsp;
                <Button variant="primary" type="submit"> Submit </Button>
                &nbsp;
                <Button variant="primary" onClick={this.handleClear}> Clear </Button>
                &nbsp;
                <Button variant="primary" onClick={this.handleAll}> All </Button>
            </Form>
          <br></br>
          <Button variant="primary" onClick={(e) => this.handleFilter('ppg', 15)}> Greater than 15 PPG </Button>
          &nbsp;
          <Button variant="primary" onClick={(e) => this.handleFilter('ppg', 20)}> Greater than 20 PPG </Button>
          &nbsp;
          <Button variant="primary" onClick={(e) => this.handleFilter('ppg', 25)}> Greater than 25 PPG </Button>
          &nbsp;
          <Button variant="primary" onClick={(e) => this.handleFilter('apg', 5)}> Greater than 5 APG </Button>
          &nbsp;
          <Button variant="primary" onClick={(e) => this.handleFilter('apg', 10)}> Greater than 10 APG </Button>
          <p></p>
          &nbsp;
          <Button variant="primary" onClick={(e) => this.handleFilter('rbg', 5)}> Greater than 5 RBG </Button>
          &nbsp;
          <Button variant="primary" onClick={(e) => this.handleFilter('rbg', 10)}> Greater than 10 RBG </Button>
          &nbsp;
          <Button variant="primary" onClick={(e) => this.handleFilter('gp', 40)}> Greater than 40 GP </Button>
          &nbsp;
          <Button variant="primary" onClick={(e) => this.handleFilter('gp', 60)}> Greater than 60 GP </Button>
          </center>
       </div>
       <div className= "listHomeScreen">
         <ul id = "homemenu">
           {content}
         </ul>
        </div>
     </div>

    );
  }
}

export default HomeScreen;
