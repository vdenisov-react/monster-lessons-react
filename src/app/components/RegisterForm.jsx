import React, { Component } from 'react';
import './RegisterForm.css';

class RegisterForm extends Component {
    constructor(props) {
        super(props);
        this.state = { email: '' };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log('Form is submitted. Email value is =>', this.state.email);
    }

    handleEmailChange(event) {
        console.log('Email was changed =>', event.target.value);
        this.setState({ email: event.target.value });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" className="email-field" placeholder="E-mail" value={this.state.email} onChange={this.handleEmailChange} />

                <button type="submit" className="submit-btn">
                    Save
                </button>
            </form>
        );
    }
}

export default RegisterForm;
