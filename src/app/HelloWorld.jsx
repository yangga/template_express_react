// Dead simple component for the hello world (hi mom!)

import React from 'react';
import AppConstants from './AppConstants'

export default class HelloWorld extends React.Component{
  constructor(){
    super();
    this.state = {
      msg: 'Loading'
    };
  }

  componentDidMount(){
    const self = this;

    fetch(`${AppConstants.API_URL}/coin/test`)
        .then((response) => response.json())
        .then((responseJson) => {
            console.log(JSON.stringify(responseJson))

            self.setState({
              msg: responseJson.msg
            })
        })
        .catch((error) => {
            console.error(error)
        });
  }

  render(){
    return <div style={divStyle}>
      <h1 className="hello-world">{this.state.msg}</h1>
    </div>
    ;
  }
};

var divStyle = {
  backgroundColor: 'red'
};