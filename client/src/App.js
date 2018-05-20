import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar/Sidebar'

import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
import Err404Page from './pages/Err404Page'
import Assosciates from './pages/Assosciates'

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <div className="row">
            <div className="col-xs-10 col-xs-offset-1 col-md-8 col-md-offset-1 addPadding">
            <Router>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/portfolio" component={Portfolio} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/assosciates" component={Assosciates} />
                <Route component={Err404Page} />
              </Switch>
            </Router>
            </div>
            <div className="col-xs-10 col-xs-offset-1 col-md-2 col-md-offset-1 addPadding">
              <Sidebar />
            </div>
          </div>
        </div>
        <footer className="footer">
          <div className="container">
            <span>&copy; Qamar A. Stationwala</span>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
