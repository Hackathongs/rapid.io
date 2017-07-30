import React, { Component } from 'react';
import { render } from 'react-dom';

import Form from './Form.component';

export default class Modules extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <div className="modules">
        <Form client={this.props.client} />
      </div>
    );
  }
}