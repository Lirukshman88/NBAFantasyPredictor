import React, { Component } from "react";
import './content.css';
import {predict} from './linearmodel.js';

class PowerForward extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pfs: [ {id:1, name:'Serge Ibaka', team: 'Toronto Raptors', gp: 74,    gpPred: predict([78, 79, 76]),
                                                                 ppg: 15.0, ppgPred: predict([12.6, 14.8, 12.6]),
                                                                 apg: 1.3,    apgPred: predict([0.8, 0.9, 0.8]),
                                                                 rbg: 8.1,    rbgPred: predict([6.8, 6.8, 6.3])},

             {id:2, name:'Pascal Siakam', team: 'Toronto Raptors', gp: 80,    gpPred: predict([55, 55, 81]),
                                                                        ppg: 16.9, ppgPred: predict([4.2, 4.2, 7.3]),
                                                                        apg: 3.1,    apgPred: predict([0.3, 0.3, 3.1]),
                                                                        rbg: 6.9,    rbgPred: predict([3.4, 3.4, 4.5])},

             {id:3, name: 'Blake Griffin', team:'Detroit Pistons', gp: 75,  gpPred: predict([35, 61, 58]),
                                                                   ppg: 24.5, ppgPred: predict([21.4, 21.6, 21.4]),
                                                                   apg: 5.4,    apgPred: predict([4.9, 4.9, 5.8]),
                                                                   rbg: 7.5,    rbgPred: predict([8.4, 8.1, 7.4])},

             {id: 4, name: 'LaMarcus Aldridge', team: 'San Antonio Spurs', gp: 81,  gpPred: predict([74, 72, 75]),
                                                                           ppg: 21.3, ppgPred: predict([18.0, 17.3, 23.1]),
                                                                           apg: 2.4,    apgPred: predict([1.5, 1.9, 2.0]),
                                                                           rbg: 9.2,    rbgPred: predict([8.5, 7.3, 8.5])},

            {id: 5, name: 'Kevin Love', team: 'Cleveland Cavaliers', gp: 22,  gpPred: predict([77, 60, 59]),
                                                                     ppg: 17.0, ppgPred: predict([16.0, 19.0, 17.6]),
                                                                     apg: 2.2,    apgPred: predict([2.4, 1.9, 1.7]),
                                                                     rbg: 10.9,    rbgPred: predict([9.9, 11.1, 9.3])}
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
