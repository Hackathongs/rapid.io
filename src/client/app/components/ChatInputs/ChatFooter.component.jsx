import React, { Component } from 'react';
import { render } from 'react-dom';
import ChatInput from './ChatInput.component';
import ChatUserName from './ChatUserName.component';


export default class ChatFooter extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <div className="chat-footer">
        <ChatInput />
        <ChatUserName />
      </div>
    );
  }
}
