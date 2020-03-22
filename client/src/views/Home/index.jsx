import React from 'react';
import { Component } from 'react';
import './style.scss';
import CarrouselView from '../Carrousel/index';
import { Container, Row, Col, Image } from 'react-bootstrap';


import Dumbell from '../../asset/images/dumbbell.png'
import Search from '../../asset/images/magnifier.png'
import Videos from '../../asset/images/youtube-logo.png'
import Time from '../../asset/images/quarter-of-an-hour.png'
import Footer from '../../components/Footer';


class Home extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="area">
      <CarrouselView />
      <Container className="features">
          <Row>
            <Col>
              <Image src={Dumbell} style={{ maxHeight: '5em', width: '5em' , paddingBottom:'1em'}} />
              <h5>Wod Maker</h5>
              <small>Wods too hard?</small>
              <small>Create your own wod</small>
            </Col>
            <Col>
              <Image src={Search} style={{ maxHeight: '5em', width: '5em' , paddingBottom:'1em' }} />
              <h5>Movement Search</h5>
              <small>Dont know what the movement is?</small>
              <br />
              <small>No worries use our movement search</small>
            </Col>
            <Col>
              <Image src={Videos} style={{ maxHeight: '5em', width: '5em' , paddingBottom:'1em'}}  />
              <h5>Wod and movement videos</h5>
              <small>Dont bother reading if you can watch</small>
            </Col>
            <Col>
              <Image src={Time}  style={{ maxHeight: '5em', width: '5em' , paddingBottom:'1em' }}  />
              <h5>Chronometer</h5>
              <small>Use another app for counting time)</small>
              <br />
              <small>No problem each wod has its own timer</small>
 
            </Col>
          </Row>
        </Container>  
      <Footer />
      </div>
    );
  }
}

export default Home;
