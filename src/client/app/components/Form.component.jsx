import React, { Component } from 'react';
import { render } from 'react-dom';

import rapid from 'rapid-io';

export default class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      node: {
        id: ''
      }
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      node: {
        id: event.target.value
      }
    });
  }

  handleSubmit(event) {
    this.props.client
      .collection('nodes')
      .document(this.state.node.id)
      .mutate({
        id: this.state.node.id
      })

    event.preventDefault();
  } 

  render() {
    return (
      <div className="form"> 
        <form onSubmit={this.handleSubmit}>
          <label>
            Node Name:
            <input type="text" value={this.state.node.id} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}