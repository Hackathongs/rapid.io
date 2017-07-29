import React, { Component } from 'react';
import { render } from 'react-dom';

// custom components
import ChatBox from './ChatBox.component';
import ModelViewer from './ModelViewer.component';
import NavBar from './Navbar.component';
import UserInfo from './UserInfo.component';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <div>
        <ModelViewer />
      </div>
    );
  }
}