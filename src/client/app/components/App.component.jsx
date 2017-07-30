import React, { Component } from 'react';
import { render } from 'react-dom';

// custom components
import Header from './Header.component';
import Body from './Body.component';
import Footer from './Footer.component';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <div className="content">
        <Header />
        <Body />
        <Footer />
      </div>
    );
  }
}