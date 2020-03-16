import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class TimerList extends Component {
  render() {
    return (
      <div>
        <h1>List of Timers goes here</h1>
        <Link to="/timers/single">
          <p>Timer 1</p>
          <p>Timer 2</p>
          <p>Timer 3</p>
        </Link>
      </div>
    );
  }
}

export default TimerList;
