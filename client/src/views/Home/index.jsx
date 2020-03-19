import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Component } from 'react';
import './style.scss';

class Home extends Component {
  render() {
    return (
      <Fragment>
        <div className="home">
          <h1>Home View</h1>
          <h2>Search Bar</h2>
        </div>
      </Fragment>
    );
  }
}

export default Home;
