import React, { Component } from "react";
import './content.css';
import {predict} from './linearmodel.js';

class Center extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cs: [ {id:1, name:'Jonas Valunciunas', team: 'Memphis Grizzlies', gp: 49,    gpPred: predict([60, 80, 77]),
                                                                      ppg: 15.6, ppgPred: predict([12.8, 12.0, 12.7]),
                                                                      apg: 1.4,    apgPred: predict([0.7, 0.7, 1.1]),
                                                                      rbg: 8.6,    rbgPred: predict([9.1, 9.5, 8.6])},

             {id:2, name:'Anthony Davis', team: 'Los Angeles Lakers', gp: 56,    gpPred: predict([61, 75, 75]),
                                                                       ppg: 25.9, ppgPred: predict([24.3, 28.0, 28.1]),
                                                                       apg: 3.9,    apgPred: predict([1.9, 2.1, 2.3]),
                                                                       rbg: 12.0,    rbgPred: predict([10.3, 11.8, 11.1])},

            {id: 3, name: 'Joel Embiid', team: 'Philadeplhia 76ers', gp: 64,    gpPred: predict([31, 31, 63]),
                                                                     ppg: 27.5, ppgPred: predict([20.2, 20.2, 22.9]),
                                                                     apg: 3.5,    apgPred: predict([2.1, 2.1, 3.2]),
                                                                     rbg: 13.6,    rbgPred: predict([7.8, 7.8, 11.0])},

            {id: 4, name: 'Marc Gasol', team: 'Toronto Raptors', gp: 79,    gpPred: predict([52, 74, 73]),
                                                                 ppg: 13.6, ppgPred: predict([16.6, 19.5, 17.2]),
                                                                 apg: 4.4,    apgPred: predict([3.8, 4.6, 4.2]),
                                                                rbg: 7.9,    rbgPred: predict([7.0, 6.3, 8.1])},

            {id: 5, name: 'Nikola Jokic', team: 'Denver Nuggets', gp: 80,    gpPred: predict([80, 73, 75]),
                                                                  ppg: 20.1, ppgPred: predict([10.0, 16.7, 18.5]),
                                                                  apg: 7.3,    apgPred: predict([2.4, 4.9, 6.1]),
                                                                  rbg: 10.8,    rbgPred: predict([7.0, 9.8, 10.7])}
           ]
    };
  }

    render() {
      const content = this.state.cs.map((c) =>
        <li key = {c.id}>
          <div className = "card">
            <div className="container">
              <h4><b><font size = "5">{c.name}</font></b></h4>
              <h6><font size = "3">{c.team}</font></h6>
              <div class="grid-container">
               <div class="grid-column">Stats</div>
               <div class="grid-column">Recent</div>
               <div class="grid-column">Predicted</div>
               <div class="grid-item">GP</div>
               <div class="grid-item">{c.gp}</div>
               <div class="grid-item">{c.gpPred}</div>
               <div class="grid-item">PPG</div>
               <div class="grid-item">{c.ppg}</div>
               <div class="grid-item">{c.ppgPred}</div>
               <div class="grid-item">APG</div>
               <div class="grid-item">{c.apg}</div>
               <div class="grid-item">{c.apgPred}</div>
               <div class="grid-item">RPG</div>
               <div class="grid-item">{c.rbg}</div>
               <div class="grid-item">{c.rbgPred}</div>
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


export default Center;
