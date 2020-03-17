import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {list} from  '../../services/movement'

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
             <Link to={`movement/${movement._id}`}  key={movement._id}> 
            <p>{movement.name}</p>         
             </Link>
          ))}
     
        </div>
      </div>
    );
  }
}

export default MovementList;
