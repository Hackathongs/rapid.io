import React, { Component } from 'react';
import { render } from 'react-dom';

import ChatBox from './ChatBox.component';
import ObjectInfo from './ObjectInfo.component';

export default class Footer extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <div className="footer"> 
        <ChatBox />
        <ObjectInfo />
      </div>
    );
  }
}