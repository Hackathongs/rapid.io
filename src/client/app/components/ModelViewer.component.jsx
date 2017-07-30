import React, { Component } from 'react';
import { render } from 'react-dom';
import D3Graph from './D3Graph.component'

export default class ModelViewer extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <div className="model-viewer">
        <D3Graph client={this.props.client} />
      </div>
    );
  }
}