
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {list} from  '../../services/wod'

class HeroWod extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wods: []
    };
    
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    list()
      .then(wods => {
        this.setState({
          wods
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const wods = this.state.wods
    return (
      <div>
        <div className="wod__list">
         
        {wods.map(wod =>  <Link to={`herowod/${wod._id}`}  key={wod._id}> 
            <p>{wod.name}</p>         
             </Link>)}
     
        </div>
      </div>
    );
  }
}


export default HeroWod;

