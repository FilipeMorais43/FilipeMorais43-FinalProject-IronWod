import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './style.scss';

class CarrouselView extends Component {
  render() {
    return (
      <div>
        <Carousel>
          <Carousel.Item>
            <img
              className="Carroussel-Img d-block w-100"
              src="./Carousel/Crossfit-Motivation-Videos-1280x720.jpg"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="Carroussel-Img d-block w-100"
              src="./Carousel/froning-strength1920x1080.jpg"
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="Carroussel-Img d-block w-100"
              src="./Carousel/allie-smith-WLvzdarBNKc-unsplash.jpg"
              alt="Third slide"
            />
            <Carousel.Caption>
              {/* <h3>Third slide label</h3> */}
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}

export default CarrouselView;