import React, { Component } from 'react';
import { render } from 'react-dom';

import List from './List/List.component';

export default class Modules extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <div id="modules">
        <List />
      </div>
    );
  }
}