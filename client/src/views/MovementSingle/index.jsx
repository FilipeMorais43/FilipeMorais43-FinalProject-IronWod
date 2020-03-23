import React, { Component, Fragment } from 'react';

import { single } from '../../services/movement';
import ResponsivePlayer from '../../components/ReactPlayer/ResponsivePlayer';
import './style.scss';

class MovementSingle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movement: null
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    const id = this.props.match.params.id;
    single(id)
      .then(movement => {
        this.setState({ movement });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="movement__single">
        {this.state.movement && (
          <Fragment>
            <section className="movement__single__text">
              <h1>{this.state.movement.name}</h1>
              <h4>
                <strong>Description</strong>
              </h4>
              <p> {this.state.movement.description}</p>
              <h4>
                <strong>Set-up</strong>
              </h4>
              <p> {this.state.movement.setup}</p>
              <h4>
                <strong>Execution</strong>
              </h4>
              <p> {this.state.movement.execution}</p>
              <h4>
                <strong>Pro-tip</strong>
              </h4>
              <p> {this.state.movement.protip}</p>
              <ResponsivePlayer url={this.state.movement.video} />
            </section>
          </Fragment>
        )}
      </div>
    );
  }
}

export default MovementSingle;
