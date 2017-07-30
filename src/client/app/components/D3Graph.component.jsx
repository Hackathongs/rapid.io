import React, { Component } from 'react';
import { render } from 'react-dom';
import {Graph} from 'react-d3-graph';

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
            }
      }

    };


    this.onClickNode = this.onClickNode.bind(this);
    this.onMouseOverNode = this.onMouseOverNode.bind(this);
    this.onMouseOutNode = this.onMouseOutNode.bind(this);
    this.onClickLink = this.onClickLink.bind(this);
  }


  onClickNode (nodeId) {
       window.alert('Clicked node', nodeId);
  };
   
  onMouseOverNode (nodeId) {
       window.alert('Mouse over node', nodeId);
  };
   
  onMouseOutNode(nodeId) {
       window.alert('Mouse out node', nodeId);
  };
   
  onClickLink(source, target) {
       window.alert(`Clicked link between ${source} and ${target}`);
  };

  render() {

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