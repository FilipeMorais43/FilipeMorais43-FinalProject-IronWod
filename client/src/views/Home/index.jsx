import React from 'react';
import Particles from 'react-particles-js';
import { Component } from 'react';
import './style.scss';

const particleOpt={
            		particles: {
                  number:{
                    value: 10,
                    density:{
                      enable: true,
                      value_area:200

                    }
                  }

                  }
            	}


class Home extends Component {
  constructor() {
    super();
    this.state = {};
  }



  render() {
    return (
      <div className="area" >
      <ul className="circles">
                     <li></li>
                    <li></li>
                    <li></li>
                     <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                     <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>
    </div>
    );
  }
}

export default Home;
