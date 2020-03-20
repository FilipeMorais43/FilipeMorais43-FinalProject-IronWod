import React, { Component } from 'react';
import './style.scss';

import { list } from '../../services/wod';
import { Card, Button } from 'react-bootstrap';

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
    const wods = this.state.wods;
    return (
      <div>
        <div className="wod__list">
          {wods.map(wod => (
            <div className="wod__card">
              <Card key={wod._id} style={{ maxHeight: '18em', minHeight: '18em' }}>
                <Card.Img
                  variant="top"
                  src={wod.picture}
                  style={{ maxHeight: '12em', objectFit: 'fill' }}
                />
                <Card.Body>
                  <Card.Title text="primary">{wod.name}</Card.Title>

                  <Button variant="primary" href={`herowod/${wod._id}`}>
                    See more
                  </Button>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default HeroWod;
