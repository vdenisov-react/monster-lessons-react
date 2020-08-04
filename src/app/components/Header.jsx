import React, { Component } from 'react';

class Header extends Component {
    render() {
        console.log('items =>', this.props.items);
        return (
            <ul>
                {this.props.items.map((item, index) => (
                    <li key={index}>
                        <a href={item.link}>{item.label}</a>
                    </li>
                ))}
            </ul>
        );
    }
}

export default Header;
