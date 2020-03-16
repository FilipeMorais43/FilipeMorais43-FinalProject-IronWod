import React, { Component } from 'react';
import { signUp } from './../../../services/dataAuthentication';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Cristiano Ronaldo',
      email: 'cr7@goat.com',
      password: '123456789'
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmission = this.handleFormSubmission.bind(this);
    console.log(this.props);
  }

  handleFormSubmission(event) {
    event.preventDefault();
    const { name, email, password } = this.state;
    signUp({
      name,
      email,
      password
    })
      .then(user => {
        this.props.updateUserInformation(user);
        this.props.history.push('/');
      })
      .catch(error => {
        console.log(error);
      });
  }

  handleInputChange(event) {
    const { value, name } = event.target;
    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleFormSubmission}>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Name"
            onChange={this.handleInputChange}
            value={this.state.name}
          />
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            onChange={this.handleInputChange}
            value={this.state.email}
          />
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Password"
            onChange={this.handleInputChange}
            value={this.state.password}
          />
          {this.state.password && this.state.password.length < 8 && (
            <small>Passwords needs to be longer. Please try again!</small>
          )}
          <button disabled={this.state.password.length < 5}>Sign Up</button>
        </form>
      </div>
    );
  }
}

export default SignUp;
