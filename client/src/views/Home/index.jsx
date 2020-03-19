import React from 'react';

import { Component } from 'react';
import './style.scss';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      query: ''
    };

    
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = event => {
    
    const value = event.target.value;

    this.setState({
      query: value
    });
  };

  searchresult(event) {
    event.preventDefault();
    const search = this.req.query;
     console.log(search);
     search()
      .then(result => {
        console.log(result);
        this.props.history.push('/searchresults');
      })
      .catch(error => console.log(error));
  }

  
  render() {
    return (
   
        <div className="home">
        <form onSubmit={this.searchresult}>
        <input
          type="text"
          id="search"
          name="search"
          value={this.state.query}
          onChange={this.handleChange}
          placeholder="Search WOD names ,movements"
        />
        <button type="search">Search</button>
      </form>
      </div>
       
    
     
    );
  }
}

export default Home;
