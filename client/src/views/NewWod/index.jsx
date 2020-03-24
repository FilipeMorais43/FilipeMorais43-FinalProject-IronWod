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
      tips: '',
      picture: '',
      video: ''
    };

    this.addWod = this.addWod.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleFileInputChange = this.handleFileInputChange.bind(this);
  }

  handleChange = event => {
    const inputName = event.target.name;
    const value = event.target.value;

    this.setState({
      [inputName]: value
    });
  };

  handleFileInputChange(event) {
    console.dir(event.target);
    const { name, files } = event.target;
    console.log(name, files);
    this.setState({
      [name]: files[0]
    });
  }

  addWod(event) {
    event.preventDefault();
    console.log('USER_ID', this.props.user._id);
    const user = this.props.user._id;
    const { name, wod, score, tips, picture, video } = this.state;
    create({ name, wod, score, tips, picture, video, user })
      .then(result => {
        console.log(result);
        this.props.history.push('/mywods');
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <form onSubmit={this.addWod}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
          placeholder="ex:Wod for Heros"
        />
        <label htmlFor="wod">Wod</label>
        <textarea
          rows="7"
          type="textarea"
          id="wod"
          name="wod"
          value={this.state.wod}
          onChange={this.handleChange}
          placeholder="AMRAP in 20 minutes
5 Pull-Ups
10 Push-Ups
15 Air Squats"
        />
        <label htmlFor="score">Score</label>
        <input
          type="text"
          id="score"
          name="score"
          value={this.state.score}
          onChange={this.handleChange}
          placeholder="ex:Number of reps"
        />
        <label htmlFor="tips">Tips</label>
        <input
          type="text"
          id="tips"
          name="tips"
          value={this.state.tips}
          onChange={this.handleChange}
          placeholder="Do you have a tip?"
        />
        <label htmlFor="picture">Picture</label>
        <input type="file" id="picture" name="picture" onChange={this.handleFileInputChange} />
        <label htmlFor="video">Video</label>
        <input
          type="text"
          id="video"
          name="video"
          value={this.state.video}
          onChange={this.handleChange}
          placeholder="Video URL"
        />
        <button type="submit">Add New</button>
      </form>
    );
  }
}

export default NewWod;
