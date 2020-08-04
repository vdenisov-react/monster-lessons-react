import React, { Component } from 'react';

class RegisterForm extends Component {
    constructor(props) {
        super(props);
        this.state = { email: '' };
    }

    handleSubmit() {
        console.log('form is submitted');
    }

    handleEmailChange() {
        console.log('email was changed');
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit.bind(this)}>
                <input type="text" placeholder="E-mail" value={this.state.email} onChange={this.handleEmailChange.bind(this)} />
            </form>
        );
    }
}

export default RegisterForm;
