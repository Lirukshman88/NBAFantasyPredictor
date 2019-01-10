import React, { Component } from "react";
import {predict} from './linearmodel.js';
import './content.css';

class PointGuard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pgs: [ {id:1, name:'Kyle Lowry', team: 'Toronto Raptors', gp: 78,    gpPred: predict([77, 60, 78]),
                                                                ppg: 16.2, ppgPred: predict([21.2, 22.4, 16.2]),
                                                                apg: 6.9,    apgPred: predict([6.4, 7.0, 6.9]),
                                                                rbg: 5.6,    rbgPred: predict([4.7, 4.8, 5.6])},

             {id:2, name:'Steph Curry', team: 'Golden State Warriors', gp: 51,    gpPred: predict([79, 79, 51]),
                                                                       ppg: 26.4, ppgPred: predict([30.1, 25.3, 26.4]),
                                                                       apg: 6.1,    apgPred: predict([6.7, 6.6, 6.1]),
                                                                       rbg: 5.1,    rbgPred: predict([5.4, 4.5, 5.1])}
           ]
    };
  }

  render() {
    const content = this.state.pgs.map((pg) =>
      <li key = {pg.id}>
        <div className = "card">
          <div className="container">
            <h4><b><font size = "5">{pg.name}</font></b></h4>
            <h6><font size = "3">{pg.team}</font></h6>
            <div className="grid-container">
             <div className="grid-column">Stats</div>
             <div className="grid-column">Recent</div>
             <div className="grid-column">Predicted</div>
             <div className="grid-item">GP</div>
             <div className="grid-item">{pg.gp}</div>
             <div className="grid-item">{pg.gpPred}</div>
             <div className="grid-item">PPG</div>
             <div className="grid-item">{pg.ppg}</div>
             <div className="grid-item">{pg.ppgPred}</div>
             <div className="grid-item">APG</div>
             <div className="grid-item">{pg.apg}</div>
             <div className="grid-item">{pg.apgPred}</div>
             <div className="grid-item">RPG</div>
             <div className="grid-item">{pg.rbg}</div>
             <div className="grid-item">{pg.rbgPred}</div>
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

export default PointGuard;
