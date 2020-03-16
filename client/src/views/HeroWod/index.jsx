import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HeroWod extends Component {
  render() {
    return (
      <div>
        <h1>WOD List goes here</h1>
        <Link to="/herowod/single">
          <p>WOD 1</p>
          <p>WOD 2</p>
          <p>WOD 3</p>
        </Link>
      </div>
    );
  }
}

export default HeroWod;
