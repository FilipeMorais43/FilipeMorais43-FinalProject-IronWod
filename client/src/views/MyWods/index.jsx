import React from 'react';
import { Link } from 'react-router-dom';
import { Component } from 'react';
import { listUser } from './../../services/wod';
import { Card , Button} from 'react-bootstrap';
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
              <Card  key={singleWod._id} style={{ width: '18rem' }}>
  <Card.Img variant="top" src={singleWod.picture} />
  <Card.Body>
    <Card.Title text = 'primary'>{singleWod.name}</Card.Title>
 
    <Button variant="primary" href ={`herowod/${singleWod._id}`  }>See more</Button>
  </Card.Body>
</Card>
         
          ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default MyWods;
