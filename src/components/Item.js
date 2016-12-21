import React ,{Component} from 'react';

class Item extends Component{

  render(){
    return(
        <div className='item'>
          <a href={this.props.link} >
            <h3 className='item_title'>{this.props.title}</h3>
          </a>  
          <div className='item_summary'>{this.props.summary}</div>
        </div>
    );
  }



}

module.exports = Item;
