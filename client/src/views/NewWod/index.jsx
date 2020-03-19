import React, { Component } from 'react';
import { create } from '../../services/wod';
import './style.scss';

class NewWod extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      wod: '',
      score: '',
      tips: ''
    };

    this.addWod = this.addWod.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = event => {
    const inputName = event.target.name;
    const value = event.target.value;

    this.setState({
      [inputName]: value
    });
  };

  addWod(event) {
    event.preventDefault();
    console.log('USER_ID', this.props.user._id);
    const user = this.props.user._id;
    const { name, wod, score, tips } = this.state;
    create({ name, wod, score, tips, user })
      .then(result => {
        console.log(result);
        this.props.history.push('/mywods');
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <form onSubmit={this.addWod}>
        {/* <pre>{JSON.stringify(this.state)}</pre> */}
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
          placeholder="Wod name"
        />
        <label htmlFor="wod">Wod</label>
        <input
          type="textarea"
          id="wod"
          name="wod"
          value={this.state.wod}
          onChange={this.handleChange}
          placeholder="wod description"
        />
        <label htmlFor="score">Score</label>
        <input
          type="text"
          id="score"
          name="score"
          value={this.state.score}
          onChange={this.handleChange}
          placeholder="Score"
        />
        <label htmlFor="tips">Tips</label>
        <input
          type="text"
          id="tips"
          name="tips"
          value={this.state.tips}
          onChange={this.handleChange}
          placeholder="Wod tips"
        />
        <button type="submit">Add New</button>
      </form>
    );
  }
}

export default NewWod;
