import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Header extends Component {
    static propTypes = {
        items: PropTypes.array.isRequired,
        // ---
        isLoading: PropTypes.bool,
        submit: PropTypes.func.isRequired,
        title: PropTypes.string.isRequired,
    };

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
