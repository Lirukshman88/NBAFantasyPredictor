import React, { Component } from "react";
import './content.css';
import {predict} from './linearmodel.js';

class ShootingGuard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sgs: [ {id:1, name:'Danny Green', team: 'Los Angeles Lakers', gp: 80,    gpPred: predict([79, 68, 70]),
                                                                ppg: 10.3, ppgPred: predict([7.2, 7.3, 8.6]),
                                                                apg: 1.6,    apgPred: predict([1.8, 1.8, 1.6]),
                                                                rbg: 4.0,    rbgPred: predict([3.8, 3.3, 3.6])},

             {id:2, name:'Demar Derozan', team: 'San Antonio Spurs', gp: 77,    gpPred: predict([78, 74, 80]),
                                                                       ppg: 21.2, ppgPred: predict([23.5, 27.3, 23.0]),
                                                                       apg: 6.2,    apgPred: predict([4.0, 3.9, 5.2]),
                                                                       rbg: 6.0,    rbgPred: predict([4.5, 5.2, 3.9])},

             {id: 3, name: 'Klay Thompson', team: 'Golden State Warriors', gp:78, gpPred: predict([80, 78, 73]),
                                                                           ppg:21.5, ppgPred: predict([22.1, 22.3, 20.0]),
                                                                           apg: 2.4,    apgPred: predict([2.1, 2.1, 2.5]),
                                                                           rbg: 3.8,    rbgPred: predict([3.8, 3.7, 3.8])},

            {id: 4, name: 'James Harden', team: "Houston Rockets", gp:78, gpPred: predict([82, 81, 72]),
                                                                   ppg:36.1, ppgPred: predict([29.0, 29.1, 30.4]),
                                                                   apg: 7.5,    apgPred: predict([7.5, 11.2, 8.8]),
                                                                   rbg: 6.6,    rbgPred: predict([6.1, 8.1, 5.4])},

           {id: 5, name: 'Jimmy Butler', team: 'Miami Heat',  gp:65, gpPred: predict([67, 76, 59]),
                                                              ppg:18.7, ppgPred: predict([20.9, 23.9, 22.2]),
                                                              apg: 4.0,    apgPred: predict([5.5, 4.9, 4.3]),
                                                              rbg: 5.3,    rbgPred: predict([6.2, 5.3, 5.2])}
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
