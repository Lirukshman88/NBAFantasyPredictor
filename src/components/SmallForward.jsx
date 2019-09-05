import React, { Component } from "react";
import './content.css';
import {predict} from './linearmodel.js';

class SmallForward extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sfs: [ {id:1, name:'Kawhi Leonard', team: 'Los Angeles Clippers', gp: 60,    gpPred: predict([64, 72, 74]),
                                                                  ppg: 26.6, ppgPred: predict([16.5, 21.2, 25.5]),
                                                                  apg: 3.3,    apgPred: predict([2.5, 2.6, 3.5]),
                                                                  rbg: 7.3,    rbgPred: predict([7.2, 6.8, 5.8])},

             {id:2, name:'LeBron James', team: 'Los Angeles Lakers', gp: 55,    gpPred: predict([76, 74, 82]),
                                                                       ppg: 27.4, ppgPred: predict([25.3, 26.4, 27.5]),
                                                                       apg: 8.3,    apgPred: predict([6.8, 8.7, 9.1]),
                                                                       rbg: 8.5,    rbgPred: predict([7.4, 8.6, 8.6])},

            {id: 3, name: 'Kevin Durant', team: 'Brooklyn Nets', gp: 78,  gpPred: predict([72, 62, 68]),
                                                                 ppg: 26.0, ppgPred: predict([28.2, 25.1, 26.4]),
                                                                 apg: 5.9,    apgPred: predict([5.0, 4.8, 5.4]),
                                                                 rbg: 6.4,    rbgPred: predict([8.2, 8.3, 6.8])},

            {id: 4, name: 'Giannis Antetokounmp', team: 'Milwaukee Bucks', gp: 72,  gpPred: predict([80, 80, 75]),
                                                                           ppg: 27.7, ppgPred: predict([16.9, 22.9, 26.9]),
                                                                           apg: 5.9,    apgPred: predict([4.3, 5.4, 4.8]),
                                                                           rbg: 12.5,    rbgPred: predict([7.7, 8.8, 10.0])},

            {id: 5, name: 'Paul George', team: 'Los Angeles Clippers', gp: 77,  gpPred: predict([81, 75, 79]),
                                                                        ppg: 28.0, ppgPred: predict([23.1, 23.7, 21.9]),
                                                                        apg: 4.1,    apgPred: predict([4.1, 3.3, 3.3]),
                                                                        rbg: 8.2,    rbgPred: predict([7.0, 6.6, 5.7])}
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
