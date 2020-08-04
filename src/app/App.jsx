import React, { Component } from 'react';
import RegisterForm from './components/RegisterForm';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="container">
                <RegisterForm />
            </div>
        );
    }
}

export default App;
