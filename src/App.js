import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import './App.css';
import FetchPage from './FetchPage';
import CreatePage from './CreatePage';
import Header from './Header';

import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Header />
          <Switch>
            <Route
              path="/"
              exact
              render={(routerProps) => <FetchPage {...routerProps} />}
            />
            <Route
              path="/create"
              exact
              render={(routerProps) => <CreatePage {...routerProps} />}
            />
          </Switch>
        </Router>
      </div>
    )
  }
}

