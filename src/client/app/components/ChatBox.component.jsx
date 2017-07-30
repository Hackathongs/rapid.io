import React, { Component } from 'react';
import { render } from 'react-dom';
// import ChatInput from './ChatInput/ChatInput.component';
import ChatFooter from './ChatInputs/ChatFooter.component';
import ChatText from './ChatInputs/ChatText.component';


export default class ChatBox extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <div className="chat-box">
        <ChatText />
        <ChatFooter />
      </div>
    );
  }
}
