import React from 'react';

import { Component } from 'react';
import { listUser } from './../../services/wod';
import { Card, Button } from 'react-bootstrap';
import Search from '../../components/SearchBox';
import './style.scss';

class MyWods extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myWods: [],
      search: ''
    };
    this.searchWod = this.searchWod.bind(this);
  }

  async componentDidMount() {
    console.log(this.props);
    const userId = this.props.user._id;
    try {
      const myWods = await listUser(userId);
      this.setState({ myWods });
    } catch (error) {
      console.log(error);
    }
  }
  searchWod(word) {
    this.setState({
      search: word
    });
  }

  render() {
    const myWods = this.state.myWods;
    return (
      <div>
        <Search search={this.searchWod} />
        <div className="mywods">
          <div className="mywods__button">
            <Button variant="dark" href="/movement/create">
              Create a Movement
            </Button>
            <Button variant="dark" href="/mywods/createWod">
              Create a Wod
            </Button>
          </div>
          <div>
            <h3>Your List of Wods:</h3>
            <div className="my__wods__list">
              {myWods.map(singleWod => {
                if (singleWod.name.toLowerCase().includes(this.state.search.toLowerCase())) {
                  return (
                    <div className="mywods__card">
                      <div className="card text-center">
                        <Card key={singleWod._id} style={{ maxHeight: '18em', width: '18em' }}>
                          <Card.Img
                            variant="top"
                            src={singleWod.picture}
                            style={{ maxHeight: '12em', objectFit: 'fill' }}
                          />
                          <Card.Body>
                            <Card.Title text="primary">{singleWod.name}</Card.Title>
                            <Button variant="dark" border="dark" href={`herowod/${singleWod._id}`}>
                              See more
                            </Button>
                          </Card.Body>
                        </Card>
                      </div>
                    </div>
                  );
                }

                /* <Link to={`movement/${movement._id}`} key={movement._id}>
              <p>{movement.name}</p>
            </Link>*/
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MyWods;
