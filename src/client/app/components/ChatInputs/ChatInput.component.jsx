import React, { Component } from 'react';
import { render } from 'react-dom';


export default class ChatInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'Name Here'
    };

    this.onChangeHandler = this.onChangeHandler.bind(this);
  }

  onChangeHandler(event) {
    this.setState({
      name: event.target.value
    });
  }

  render() {
    return (
      <div className="chat-input"> 
        <input 
          value={this.state.name}
          onChange={this.onChangeHandler}/>
      </div>
    );
  }
}