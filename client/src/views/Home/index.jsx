import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <Fragment>
        <h1>Home View</h1>
        <Link to={'/timers'}>
          <h1>Timers</h1>
        </Link>
        <Link to={'/exercise'}>
          <h1>Work Out Of The Day</h1>
        </Link>
      </Fragment>
    );
  }
}

export default Home;
