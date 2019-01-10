import React, { Component } from "react";
import './content.css';
import {predict} from './linearmodel.js';

class Center extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cs: [ {id:1, name:'Jonas Valunciunas', team: 'Toronto Raptors', gp: 77,    gpPred: predict([60, 80, 77]),
                                                                      ppg: 12.7, ppgPred: predict([12.8, 12.0, 12.7]),
                                                                      apg: 1.1,    apgPred: predict([0.7, 0.7, 1.1]),
                                                                      rbg: 8.6,    rbgPred: predict([9.1, 9.5, 8.6])},

             {id:2, name:'Anthony Davis', team: 'New Orleans Pelicans', gp: 75,    gpPred: predict([61, 75, 75]),
                                                                       ppg: 28.1, ppgPred: predict([24.3, 28.0, 28.1]),
                                                                       apg: 2.3,    apgPred: predict([1.9, 2.1, 2.3]),
                                                                       rbg: 11.1,    rbgPred: predict([10.3, 11.8, 11.1])}
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
