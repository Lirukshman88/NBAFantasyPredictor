import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Route, NavLink, HashRouter, Switch} from "react-router-dom";
import HomeScreen from "./components/HomeScreen.jsx";
import PointGuard from "./components/PointGuard.jsx";
import ShootingGuard from "./components/ShootingGuard.jsx";
import Center from "./components/Center.jsx";
import SmallForward from "./components/SmallForward.jsx";
import PowerForward from "./components/PowerForward.jsx";

class App extends React.Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-inverse">
          <div className="container-fluid">
            <div className="navbar-header">
              <div className="navbar-brand">NBA Fantasy Predictor</div>
            </div>
            <ul className="nav navbar-nav">
              <li><NavLink to = "/">Home</NavLink></li>
              <li><NavLink to = "/PointGuard">PointGuard</NavLink></li>
              <li><NavLink to = "/ShootingGuard">ShootingGuard</NavLink></li>
              <li><NavLink to = "/Center">Center</NavLink></li>
              <li><NavLink to = "/SmallForward">SmallForward</NavLink></li>
              <li><NavLink to = "/PowerForward">PowerForward</NavLink></li>
            </ul>
          </div>
        </nav>
        <Switch>
              <Route exact path="/" component={HomeScreen}/>
              <Route path="/PointGuard" component={PointGuard}/>
              <Route path="/ShootingGuard" component={ShootingGuard}/>
              <Route path="/Center" component={Center}/>
              <Route path="/SmallForward" component={SmallForward}/>
              <Route path="/PowerForward" component={PowerForward}/>
        </Switch>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById('root')
);
