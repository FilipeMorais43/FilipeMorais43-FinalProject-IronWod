import React, { Component } from 'react';

import { list } from '../../services/movement';
import './style.scss';
import { Card , Button} from 'react-bootstrap';

class MovementList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movements: []
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    list()
      .then(movements => {
        this.setState({
          movements
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <div className="movement__list">
          {/* <pre>{JSON.stringify(this.state.movements,null, 2)}</pre> */}
          {this.state.movements.map(movement => (
            <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="../../../public/images/lunge.png" />
  <Card.Body>
    <Card.Title text = 'primary'>{movement.name}</Card.Title>
 
    <Button variant="primary" href ={`movement/${movement._id}`}>See more</Button>
  </Card.Body>
</Card>
          
           /* <Link to={`movement/${movement._id}`} key={movement._id}>
              <p>{movement.name}</p>
            </Link>*/
          ))}
        </div>
      </div>
    );
  }
}

export default MovementList;
