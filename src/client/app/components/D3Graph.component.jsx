import React, { Component } from 'react';
import { render } from 'react-dom';
import ReactDOM from 'react-dom';
import {Graph} from 'react-d3-graph';

import rapid from 'rapid-io';

export default class D3Graph extends Component {
  constructor(props) {
    super(props);

    this.state = 
    {
      data : 
      {
        nodes: [
          {id: 'Harry'},
          {id: 'Sally'},
          {id: 'Alice'}
        ],
        links: [
            {source: 'Harry', target: 'Sally'},
            {source: 'Harry', target: 'Alice'},
        ]
      },

      myConfig: 
      {
          highlightBehavior: true,
          node: {
              color: 'lightgreen',
              size: 120,
              highlightStrokeColor: 'blue'
          },
          link: {
              highlightColor: 'lightblue'
          },
          width: 0,
          height: 0
      }
    };

    this.onClickNode = this.onClickNode.bind(this);
    this.onMouseOverNode = this.onMouseOverNode.bind(this);
    this.onMouseOutNode = this.onMouseOutNode.bind(this);
    this.onClickLink = this.onClickLink.bind(this);
    this.fitToParentSize = this.fitToParentSize.bind(this);
  }

  fitToParentSize() {
    const elem = ReactDOM.findDOMNode(this);
    const width = elem.parentNode.offsetWidth;
    const height = elem.parentNode.offsetHeight;
    const currentSize = {
      width: this.state.myConfig.width,
      height: this.state.myConfig.height
    };
    if (width !== currentSize.width || height !== currentSize.height) {
      this.setState({
        myConfig: {
          width,
          height
        },
      });
    }
  }

  componentWillMount() {
    this.props.client
      .collection('nodes')
      .subscribe(nodes => {
        console.log('subscribed');
        const nodesArray = [];
        nodes.forEach((node) => {
          nodesArray.push({
            id: node.body.id
          })
        });
        this.setState({
          data: {
            nodes: nodesArray
          }
        });
      });
  }

  componentDidMount() {
    window.addEventListener('resize', this.fitToParentSize);
    this.fitToParentSize();
  }

  componentWillReceiveProps() {
    this.fitToParentSize();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.fitToParentSize);
  }

  onClickNode (nodeId) {
      //  window.alert('Clicked node', nodeId);
  };
   
  onMouseOverNode (nodeId) {
      //  window.alert('Mouse over node', nodeId);
  };
   
  onMouseOutNode(nodeId) {
      //  window.alert('Mouse out node', nodeId);
  };
   
  onClickLink(source, target) {
      //  window.alert(`Clicked link between ${source} and ${target}`);
  };

  render() {
    const width = this.state.myConfig.width || 100;
    const height = this.state.myConfig.height || 100;

    console.log('render');

    return (
      <div className="graph">
        <Graph
         id='graph-id' // id is mandatory, if no id is defined rd3g will throw an error 
         data={this.state.data}
         config={this.state.myConfig}
         onClickNode={this.onClickNode}
         onClickLink={this.onClickLink}
         onMouseOverNode={this.onMouseOverNode}
         onMouseOutNode={this.onMouseOutNode} />
      </div>
    );
  }
}