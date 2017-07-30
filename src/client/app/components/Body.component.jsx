import React, { Component } from 'react';
import { render } from 'react-dom';

import ModelViewer from './ModelViewer.component';
import Modules from './Modules.component';

export default class Body extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <div className="body"> 
        <ModelViewer />
        <Modules />
      </div>
    );
  }
}