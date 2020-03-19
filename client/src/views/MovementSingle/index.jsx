import React, { Component, Fragment } from 'react';

import {single} from '../../services/movement';
import ResponsivePlayer from '../../components/ReactPlayer/ResponsivePlayer'

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
    console.log(this.state.movement)
    return (
      <div className="movement__single">
        {/* {JSON.stringify(this.state,null,2)} */}
        {this.state.movement && 
        <Fragment>
         <h1>{this.state.movement.name}</h1>
         <ResponsivePlayer url = {this.state.movement.video} />
         </Fragment>}
      </div>
    );
  }
}

export default MovementSingle;
