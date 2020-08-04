import React, { Component } from 'react';
import { Router, Route } from 'react-router';
import { createBrowserHistory } from 'history';

import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';

import './App.css';

const hashHistory = createBrowserHistory();

const menu = [
    {
        link: '/',
        label: 'Home',
    },
    {
        link: '/about',
        label: 'About',
    },
];

class App extends Component {
    render() {
        return (
            <div>
                <Header items={menu} />

                <Router history={hashHistory}>
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                </Router>
            </div>
        );
    }
}

export default App;
