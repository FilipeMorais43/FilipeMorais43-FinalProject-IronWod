import React from 'react';
import { Link } from 'react-router-dom';
import { Component } from 'react';
import './style.scss';

class Profile extends Component {
  render() {
    const user = this.props.user;
    return (
      <div>
        <figure className="figure__profile">
          <img src={user.picture} alt={user.name} />
        </figure>
        <div>
          <h2>Name:{user.name}</h2>
          <span>Email:{user.email}</span>
        </div>
        <Link to="/profile/edit">Edit Profile</Link>
      </div>
    );
  }
}

export default Profile;
