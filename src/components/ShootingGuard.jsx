import React, { Component } from "react";
import {Card} from "react-bootstrap";
import './content.css';

class ShootingGuard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shootingguards: []
    };
  }

  componentDidMount() {
    this.getShootingGuards();
  }

  getShootingGuards = () => {
    fetch('/players/shootingguards')
    .then(res => res.json())
    .then(shootingguards => this.setState({ shootingguards }))
    .catch(error => console.log(error));
  }

  render() {
    const content = this.state.shootingguards.map((p) =>
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
      <ul id = "menu">
        {content}
      </ul>
    );
  }

}

export default ShootingGuard;
