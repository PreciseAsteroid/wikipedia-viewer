import React, {Component} from 'react';
import QueryPane from './QueryPane';

class Main extends Component{
  render() {
    return (
      <div>
        <QueryPane />
        <div>
          {this.props.children}
        </div>  
      </div>
    );
  }
}

module.exports = Main;
