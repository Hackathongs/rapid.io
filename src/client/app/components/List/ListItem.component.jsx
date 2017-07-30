import React, { Component } from 'react';
import { render } from 'react-dom';

export default class ListItem extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <div id="list-item">
        <p>{this.props.item}</p>
      </div>
    );
  }
}