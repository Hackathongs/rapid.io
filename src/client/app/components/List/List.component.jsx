import React, { Component } from 'react';
import { render } from 'react-dom';

import ListItem from './ListItem.component'

export default class List extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [0, 1, 2, 3, 4, 5]
    };
  }

  render() {
    const modules = [];
    this.state.items.forEach((item) => {
      modules.push(<ListItem item={item} />);
    });
    return (
      <div id="list"> 
        {modules}
      </div>
    );
  }
}