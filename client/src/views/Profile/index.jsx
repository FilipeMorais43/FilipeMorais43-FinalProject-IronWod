import React from 'react';
import { Link } from 'react-router-dom';
import { Component } from 'react';
import './style.scss';

class Profile extends Component {
  render() {
    const user = this.props.user;
    return (
      <div>
        <figure>
          <img src={user.picture} alt={user.name} />
        </figure>
        <div>
          <h1>{user.name}</h1>
          <span>{user.email}</span>
        </div>
        <Link to="/profile/edit">Edit Profile</Link>
      </div>
    );
  }
}

export default Profile;
