import React, { Component } from 'react';

class RegisterForm extends Component {
    constructor(props) {
        super(props);
        this.state = { email: '' };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
    }

    handleSubmit() {
        console.log('form is submitted');
    }

    handleEmailChange() {
        console.log('email was changed');
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder="E-mail" value={this.state.email} onChange={this.handleEmailChange} />
            </form>
        );
    }
}

export default RegisterForm;
