import React, { Component } from 'react';

class Dropdown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpened: false,
        };
    }

    render() {
        return <div>Its dropdown baby</div>;
    }
}

export default Dropdown;
