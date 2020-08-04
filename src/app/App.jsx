import React, { Component } from 'react';
import './App.css';

class App extends Component {
    submit() {
        console.log('submit');
    }

    render() {
        return (
            <div>
                <input type="text" placeholder="text" />
                <button onClick={this.submit.bind(this)}>Submit</button>
            </div>
        );
    }
}

export default App;
