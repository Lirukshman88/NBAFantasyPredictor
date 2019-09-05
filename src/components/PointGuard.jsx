import React, { Component } from "react";
import {predict} from './linearmodel.js';
import './content.css';

class PointGuard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pgs: [{id:1, name:'Kyle Lowry', team: 'Toronto Raptors', gp: 65,    gpPred: predict([77, 60, 78]),
                                                                ppg: 14.2, ppgPred: predict([21.2, 22.4, 16.2]),
                                                                apg: 8.7,    apgPred: predict([6.4, 7.0, 6.9]),
                                                                rbg: 4.8,    rbgPred: predict([4.7, 4.8, 5.6])},

             {id:2, name:'Steph Curry', team: 'Golden State Warriors', gp: 69,    gpPred: predict([79, 79, 51]),
                                                                       ppg: 27.3, ppgPred: predict([30.1, 25.3, 26.4]),
                                                                       apg: 5.2,    apgPred: predict([6.7, 6.6, 6.1]),
                                                                       rbg: 5.3,    rbgPred: predict([5.4, 4.5, 5.1])},

              {id: 3, name: 'Kyrie Irving', team: 'Brooklyn Nets', gp: 67,   gpPred: predict([53, 72, 60]),
                                                                   ppg: 23.8,    ppgPred: predict([19.6, 25.2, 24.4]),
                                                                   apg: 6.9,    apgPred: predict([4.7, 5.8, 5.1]),
                                                                   rbg: 5.0,    rbgPred: predict([3.0, 3.2, 3.8])},

              {id: 4, name: 'Russell Westbrook', team: 'Houston Rockets', gp: 73,  gpPred: predict([80, 81, 80]),
                                                                          ppg: 22.9,  ppgPred: predict([23.5, 31.6, 25.4]),
                                                                          apg: 10.7,  apgPred: predict([10.4, 10.4, 10.1]),
                                                                          rbg: 11.1,  rbgPred: predict([7.8, 10.7, 10.1])},

              {id: 5, name: 'Damian Lillard', team: 'Portland Trail Blazers', gp: 80,  gpPred: predict([75, 75, 73]),
                                                                              ppg: 25.8,  ppgPred: predict([25.1, 27.0, 26.9]),
                                                                              apg: 6.9,  apgPred: predict([6.8, 5.9, 6.6]),
                                                                             rbg: 4.6,  rbgPred: predict([4.0, 4.9, 4.5])}
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
