import React, { Component, Fragment } from 'react';
import './style.scss';

import { single } from '../../services/wod';
import ResponsivePlayer from '../../components/ReactPlayer/ResponsivePlayer';

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
            <h1>{this.state.wod.name}</h1>
            <br />
            <section className="wod__single__text ">
              <h4>
                <strong>WOD:</strong>
              </h4>
              <p style={{ maxWidth: '70vw' }}> {this.state.wod.wod}</p>
              <h4>
                <strong>Score:</strong>
              </h4>
              <p> {this.state.wod.score}</p>
              <h4>
                <strong>Tips:</strong>
              </h4>
              <p> {this.state.wod.tips}</p>
            </section>

            <div className="wod__single__video">
              <ResponsivePlayer url={this.state.wod.video} />
            </div>
          </Fragment>
        )}
      </div>
    );
  }
}

export default WodSingle;
