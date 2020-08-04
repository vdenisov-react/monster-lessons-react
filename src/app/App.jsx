import React, { Component } from 'react';
// import './App.css';
import { css } from 'aphrodite/no-important';
import styles from './AppStyles';

class App extends Component {
    render() {
        return (
            <div className={css(styles.container)}>
                <div>Our App</div>
            </div>
        );
    }
}

export default App;
