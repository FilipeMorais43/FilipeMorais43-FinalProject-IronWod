import React, { Component } from 'react';
import { create } from '../../services/movement';
import './style.scss';

class NewMovement extends Component {
  constructor() {
    super();
    this.state = {
      name: ''
    };
  }

  handleChange = event => {
    const inputName = event.target.name;
    const value = event.target.value;

    console.log(inputName);

    this.setState({
      [inputName]: value
    });
  };

  addMovement() {
    create(this.state)
      .then(result => {
        console.log(result);
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <form onSubmit={this.addMovement}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
          placeholder="Movement name"
        />

        <button type="submit">Add New</button>
      </form>
    );
  }
}

export default NewMovement;
