import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class WorkoutDay extends Component {
  render() {
    return (
      <div>
        <Link path="/exercise"> Here Goes Random Workout Day</Link>
      </div>
    );
  }
}

export default WorkoutDay;
