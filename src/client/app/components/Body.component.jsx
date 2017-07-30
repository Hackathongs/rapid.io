import React, { Component } from 'react';
import { render } from 'react-dom';

import ModelViewer from './ModelViewer.component';
import Modules from './Modules.component';

import rapid from 'rapid-io';

export default class Body extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };

    this.rapidClient = rapid.createClient('NDA1OWE0MWo1b3AzYTBiLnJhcGlkLmlv');
  }

  render() {
    return (
      <div className="body"> 
        <ModelViewer client={this.rapidClient} />
        <Modules client={this.rapidClient} />
      </div>
    );
  }
}