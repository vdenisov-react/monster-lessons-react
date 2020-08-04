import React, { Component } from 'react';
import { Router, Route } from 'react-router';
import { createBrowserHistory } from 'history';

import Home from './pages/Home';
import About from './pages/About';

import './App.css';

const hashHistory = createBrowserHistory();

class App extends Component {
    render() {
        return (
            <Router history={hashHistory}>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
            </Router>
        );
    }
}

export default App;
