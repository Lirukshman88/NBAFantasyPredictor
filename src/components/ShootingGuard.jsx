import React, { Component } from "react";
import './content.css';
import {predict} from './linearmodel.js';

class ShootingGuard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sgs: [ {id:1, name:'Danny Green', team: 'Toronto Raptors', gp: 70,    gpPred: predict([79, 68, 70]),
                                                                ppg: 8.6, ppgPred: predict([7.2, 7.3, 8.6]),
                                                                apg: 1.6,    apgPred: predict([1.8, 1.8, 1.6]),
                                                                rbg: 3.6,    rbgPred: predict([3.8, 3.3, 3.6])},

             {id:2, name:'Demar Derozan', team: 'San Antonio Spurs', gp: 80,    gpPred: predict([78, 74, 80]),
                                                                       ppg: 23.0, ppgPred: predict([23.5, 27.3, 23.0]),
                                                                       apg: 5.2,    apgPred: predict([4.0, 3.9, 5.2]),
                                                                       rbg: 3.9,    rbgPred: predict([4.5, 5.2, 3.9])}
           ]
    };
  }

  render() {
    const content = this.state.sgs.map((sg) =>
      <li key = {sg.id}>
        <div className = "card">
          <div className="container">
            <h4><b><font size = "5">{sg.name}</font></b></h4>
            <h6><font size = "3">{sg.team}</font></h6>
            <div class="grid-container">
             <div class="grid-column">Stats</div>
             <div class="grid-column">Recent</div>
             <div class="grid-column">Predicted</div>
             <div class="grid-item">GP</div>
             <div class="grid-item">{sg.gp}</div>
             <div class="grid-item">{sg.gpPred}</div>
             <div class="grid-item">PPG</div>
             <div class="grid-item">{sg.ppg}</div>
             <div class="grid-item">{sg.ppgPred}</div>
             <div class="grid-item">APG</div>
             <div class="grid-item">{sg.apg}</div>
             <div class="grid-item">{sg.apgPred}</div>
             <div class="grid-item">RPG</div>
             <div class="grid-item">{sg.rbg}</div>
             <div class="grid-item">{sg.rbgPred}</div>
            </div>
          </div>
        </div>
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
