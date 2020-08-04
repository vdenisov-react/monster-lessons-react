import React, { Component } from 'react';

class Dropdown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpened: false,
        };
    }

    toggleState() {
        this.setState({
            isOpened: !this.state.isOpened,
        });
    }

    render() {
        console.log('isOpened =>', this.state.isOpened);
        return <div onClick={this.toggleState}>Its dropdown baby</div>;
    }
}

export default Dropdown;
