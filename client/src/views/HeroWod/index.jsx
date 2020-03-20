import React, { Component } from 'react';
import './style.scss';

import { list } from '../../services/wod';
import { Card, Button } from 'react-bootstrap';
import Search from '../../components/SearchBox';

class HeroWod extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wods: [],
      search: ''
    };
    this.searchWod = this.searchWod.bind(this);
  }

  componentDidMount() {
    this.fetchData();
  }


  searchWod(word) {
    this.setState({
      search: word
    });

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
        <Search search={this.searchWod} />
        <div className="wod__list">
          {wods.map(wod => {
            if (wod.name.includes(this.state.search)) {
              return (
                <div className="wod__card">
                  <Card key={wod._id} style={{ maxHeight: '18em', width: '18em' }}>
                    <Card.Img
                      variant="top"
                      src={wod.picture}
                      style={{ maxHeight: '12em', objectFit: 'fill' }}
                    />
                    <Card.Body>
                      <Card.Title text="primary">{wod.name}</Card.Title>

                      <Button variant="dark" border="dark" href={`herowod/${wod._id}`}>
                        See more
                      </Button>
                    </Card.Body>
                  </Card>
                </div>
              );
            }

            /* <Link to={`movement/${movement._id}`} key={movement._id}>
              <p>{movement.name}</p>
            </Link>*/
          })}
        </div>
      </div>
    );
  }
}

export default HeroWod;
