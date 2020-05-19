import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Link, HashRouter, Switch} from "react-router-dom";
import {Navbar, Nav} from 'react-bootstrap';
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
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>NBA Fantasy Predictor</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link as={Link} to = "/">&nbsp;Home&nbsp;</Nav.Link>
          <Nav.Link as={Link} to = "/PointGuard">&nbsp;PointGuard&nbsp;</Nav.Link>
          <Nav.Link as={Link} to = "/ShootingGuard">&nbsp;ShootingGuard&nbsp;</Nav.Link>
          <Nav.Link as={Link} to = "/Center">&nbsp;Center&nbsp;</Nav.Link>
          <Nav.Link as={Link} to = "/SmallForward">&nbsp;SmallForward&nbsp;</Nav.Link>
          <Nav.Link as={Link} to = "/PowerForward">&nbsp;PowerForward&nbsp;</Nav.Link>
        </Nav>
      </Navbar>
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
