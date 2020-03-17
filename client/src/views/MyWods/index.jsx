import React from 'react';
import { Link } from 'react-router-dom';
import { Component } from 'react';

class MyWods extends Component {
  render() {
 
    return (
      <div>
        <div>
          <h1>My List of Wods go here</h1>
        </div>
        <div>
          <Link to="/movement/create">Create a Movement</Link>
          <Link to="/wod/create">Create a Wod</Link>
        </div>
      </div>
    );
  }
}

export default MyWods;
