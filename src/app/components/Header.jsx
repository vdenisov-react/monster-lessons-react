import React, { Component } from 'react';

class Header extends Component {
    render() {
        console.log('items =>', this.props.items);
        return <div>Header</div>;
    }
}

export default Header;
