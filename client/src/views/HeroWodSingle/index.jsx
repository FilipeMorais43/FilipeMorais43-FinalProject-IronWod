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
