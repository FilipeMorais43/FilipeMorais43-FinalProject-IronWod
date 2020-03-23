import React, { Component, Fragment } from 'react';
import './style.scss';

import { single } from '../../services/wod';
import ResponsivePlayer from '../../components/ReactPlayer/ResponsivePlayer';
import Stopwatch from '../timer';


class WodSingle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wod: null
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    const id = this.props.match.params.id;
    single(id)
      .then(wod => {
        this.setState({ wod });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="wod__single">
        {this.state.wod && (
          <Fragment>
            <section className="wod__single__text">
              <h1>{this.state.wod.name}</h1>
              <h4>
                <strong>WOD:</strong>
              </h4>
              <p> {this.state.wod.wod}</p>
              <h4>
                <strong>Score:</strong>
              </h4>
              <p> {this.state.wod.score}</p>
              <h4>
                <strong>Tips:</strong>
              </h4>
              <p> {this.state.wod.tips}</p>
              <h4>
                <strong>Timer:</strong>
              </h4>
          <Stopwatch />
            <h4>
                <strong>Video:</strong>
              </h4>
              <ResponsivePlayer url={this.state.wod.video} />
            </section>
         
          </Fragment>
        )}
      </div>
    );
  }
}

export default WodSingle;
