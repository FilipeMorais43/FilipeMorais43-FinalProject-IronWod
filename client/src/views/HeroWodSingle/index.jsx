import React, { Component, Fragment } from 'react';

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
            <section className= "movement__single__video">
              <h4>WOD</h4>
              <p> {this.state.wod.wod}</p>
              <h4>Score</h4>
              <p> {this.state.wod.score}</p>
              <h4>Tips</h4>
              <p> {this.state.wod.tips}</p>
            </section>
          
            <div className="movement__single__video">
              <h4>Video</h4>
              <ResponsivePlayer url={this.state.wod.video} />
            </div>
          </Fragment>
        )}
      </div>
    );
  }
}

export default WodSingle;
