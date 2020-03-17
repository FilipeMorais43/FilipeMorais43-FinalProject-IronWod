import React, { Component } from 'react';

import {single} from '../../services/movement';

class MovementSingle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movement: null
    };
   
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    const id = this.props.match.params.id;
    single(id)
      .then( movement => {
        this.setState( {movement} );
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    
    return (
      <div className="movement__single">
        {/* {JSON.stringify(this.state,null,2)} */}
        {this.state.movement && 
         <h1>{this.state.movement.name}</h1>}
        
      </div>
    );
  }
}

export default MovementSingle;
