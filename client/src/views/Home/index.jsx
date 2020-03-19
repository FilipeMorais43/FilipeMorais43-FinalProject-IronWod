import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Component } from 'react';
import './style.scss';



class Home extends Component {
  render() {
    return (
      <Fragment>
        <h1>Home View</h1>
        <Link to={'/herowod'}>
          <h1>HeroWod</h1>
        </Link>
        <Link to={'/movement'}>
          <h1>Movement List</h1>
        </Link>
      
      </Fragment>
    );
  }
}

export default Home;
