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
      <div>
        <div>
          <h2>click on buttons to create:</h2>
          <Link to="/movement/create">Create a Movement</Link>
          <Link to="/mywods/createWod">Create a Wod</Link>
        </div>
        <div>
          <h3>Your List of Wods:</h3>
          <ul>
            {myWods.map(singleWod => (
              <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="" />
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
