import React, { Component } from 'react';
import { render } from 'react-dom';


export default class ChatInput extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <div className="chat-input"> 
        <input value="Name Here" />
      </div>
    );
  }
}