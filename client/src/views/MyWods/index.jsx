import React from 'react';
import { Link } from 'react-router-dom';
import { Component } from 'react';
import { listUser } from './../../services/wod';
import './style.scss';

class MyWods extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myWods: []
    };
  }

  async componentDidMount() {
    console.log(this.props);
    const userId = this.props.user._id;
    try {
      const myWods = await listUser(userId);
      this.setState({ myWods });
    } catch (error) {
      console.log(error);
    }
  }
  render() {
    const myWods = this.state.myWods;
    return (
      <div className="mywods">
        <div className="mywods__create">
          <Link className="mywods__create__movement" to="/movement/create">
            Create a Movement
          </Link>
          <Link className="mywods__create__wod" to="/mywods/createWod">
            Create a Wod
          </Link>
        </div>
        <div>
          <h3>Your List of Wods:</h3>
          <ul>
            {myWods.map(singleWod => (
              <Link to={`herowod/${singleWod._id}`} key={singleWod._id}>
                {singleWod.name}{' '}
              </Link>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default MyWods;
