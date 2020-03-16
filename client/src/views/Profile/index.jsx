import React from 'react';
import { Link } from 'react-router-dom';
import { Component } from 'react';

class Profile extends Component {
  render() {
    return (
      <div>
        <h1>Profile is here</h1>
        <p>Picture</p>
        <p>Name</p>
        <p>Email</p>
        <Link to="/profile/edit">Edit Profile</Link>
      </div>
    );
  }
}

export default Profile;
