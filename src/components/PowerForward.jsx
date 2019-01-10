import React, { Component } from "react";
import './content.css';
import {predict} from './linearmodel.js';

class PowerForward extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pfs: [ {id:1, name:'Serge Ibaka', team: 'Toronto Raptors', gp: 76,    gpPred: predict([78, 79, 76]),
                                                                 ppg: 12.6, ppgPred: predict([12.6, 14.8, 12.6]),
                                                                 apg: 0.8,    apgPred: predict([0.8, 0.9, 0.8]),
                                                                 rbg: 6.3,    rbgPred: predict([6.8, 6.8, 6.3])},

             {id:2, name:'Kevin Durant', team: 'Golden State Warriors', gp: 68,    gpPred: predict([72, 62, 68]),
                                                                        ppg: 26.4, ppgPred: predict([28.2, 25.1, 26.4]),
                                                                        apg: 5.4,    apgPred: predict([5.0, 4.8, 5.4]),
                                                                        rbg: 6.8,    rbgPred: predict([8.2, 8.3, 6.8])}
           ]
    };
  }

  render() {
    const content = this.state.pfs.map((pf) =>
      <li key = {pf.id}>
        <div className = "card">
          <div className="container">
            <h4><b><font size = "5">{pf.name}</font></b></h4>
            <h6><font size = "3">{pf.team}</font></h6>
            <div class="grid-container">
             <div class="grid-column">Stats</div>
             <div class="grid-column">Recent</div>
             <div class="grid-column">Predicted</div>
             <div class="grid-item">GP</div>
             <div class="grid-item">{pf.gp}</div>
             <div class="grid-item">{pf.gpPred}</div>
             <div class="grid-item">PPG</div>
             <div class="grid-item">{pf.ppg}</div>
             <div class="grid-item">{pf.ppgPred}</div>
             <div class="grid-item">APG</div>
             <div class="grid-item">{pf.apg}</div>
             <div class="grid-item">{pf.apgPred}</div>
             <div class="grid-item">RPG</div>
             <div class="grid-item">{pf.rbg}</div>
             <div class="grid-item">{pf.rbgPred}</div>
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

export default PowerForward;
