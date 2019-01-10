import React, { Component } from "react";
import './content.css';
import {predict} from './linearmodel.js';

class SmallForward extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sfs: [ {id:1, name:'Kawhi Leonard', team: 'Toronto Raptors', gp: 74,    gpPred: predict([64, 72, 74]),
                                                                  ppg: 25.5, ppgPred: predict([16.5, 21.2, 25.5]),
                                                                  apg: 3.5,    apgPred: predict([2.5, 2.6, 3.5]),
                                                                  rbg: 5.8,    rbgPred: predict([7.2, 6.8, 5.8])},

             {id:2, name:'LeBron James', team: 'Los Angeles Lakers', gp: 82,    gpPred: predict([76, 74, 82]),
                                                                       ppg: 27.5, ppgPred: predict([25.3, 26.4, 27.5]),
                                                                       apg: 9.1,    apgPred: predict([6.8, 8.7, 9.1]),
                                                                       rbg: 8.6,    rbgPred: predict([7.4, 8.6, 8.6])}
           ]
    };
  }

  render() {
    const content = this.state.sfs.map((sf) =>
      <li key = {sf.id}>
        <div className = "card">
          <div className="container">
            <h4><b><font size = "5">{sf.name}</font></b></h4>
            <h6><font size = "3">{sf.team}</font></h6>
            <div class="grid-container">
             <div class="grid-column">Stats</div>
             <div class="grid-column">Recent</div>
             <div class="grid-column">Predicted</div>
             <div class="grid-item">GP</div>
             <div class="grid-item">{sf.gp}</div>
             <div class="grid-item">{sf.gpPred}</div>
             <div class="grid-item">PPG</div>
             <div class="grid-item">{sf.ppg}</div>
             <div class="grid-item">{sf.ppgPred}</div>
             <div class="grid-item">APG</div>
             <div class="grid-item">{sf.apg}</div>
             <div class="grid-item">{sf.apgPred}</div>
             <div class="grid-item">RPG</div>
             <div class="grid-item">{sf.rbg}</div>
             <div class="grid-item">{sf.rbgPred}</div>
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

export default SmallForward;
