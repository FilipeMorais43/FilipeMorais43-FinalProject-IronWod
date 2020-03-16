import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class MovementList extends Component {
  render() {
    return (
      <div>
        <h1>Movement List goes here</h1>
        <Link to="/movement/single">
          <p>Movement 1</p>
          <p>Movement 2</p>
          <p>Movement 3</p>
        </Link>
      </div>
    );
  }
}

export default MovementList;
