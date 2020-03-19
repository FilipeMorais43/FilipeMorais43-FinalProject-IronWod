import React from 'react';
import { Link } from 'react-router-dom';
import { Component } from 'react';
import './style.scss';

class Profile extends Component {
  render() {
    const user = this.props.user;
    return (
      <div className="profile">
        <div>
          <h2>{user.name}</h2>
          <hr />
          <span>{user.email}</span>
          <hr />
        </div>
        <figure className="profile__figure">
          <img src={user.picture} alt={user.name} />
        </figure>
        <hr />
        <div className="profile_edit__button">
          <Link to="/profile/edit">
            <i>
              <strong>Edit Profile</strong>
            </i>
          </Link>
        </div>
      </div>
    );
  }
}

export default Profile;
