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
              src="./Carousel/image.png"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="Carroussel-Img d-block w-100"
              src="./Carousel/jonathan-borba-lrQPTQs7nQQ-unsplash.jpg"
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