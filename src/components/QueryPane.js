import React from 'react';
import {withRouter} from 'react-router';
import Helper from '../utils/wikiHelpers.js'

// TODO: seperate Quary pane to container and component
const QueryPane = withRouter(
  React.createClass({
    getInitialState: function(){
    return {hover: false}
    },
    toggleHover: function(){
      this.setState({hover: !this.state.hover})
    },
    type(event){
      this.props.router.push(
        {
          pathname: '/items',
          query: { searchStr: event.target.value }
        }
      )
    },
    handleRand(){
      console.log('I am lucky');
      Helper.getRandom()
      .then(function(res) {
        console.log('response from random',res);
        window.location ='https://en.wikipedia.org/?curid='+res.data.query.random[0].id;
      })
      .catch(function(error) {
        console.log('Error:',error);
      })
    },
    render(){
      var linkStyle;
      if (this.state.hover) {
          linkStyle = {
            backgroundColor: '#e81c4f',
            color: '#ffffff'
          }
        } else {
        linkStyle = {
          backgroundColor: "#f5f6e4"
        }
      }
      return(
        <div className='queryPane'>
          <div className='queryHeader'>Wikipedie Client</div>
          <form>
              <input type="text" className="queryInput" onKeyUp={this.type} placeholder='search' />
          </form>
          <button style={linkStyle} onClick={()=>{this.handleRand()}} onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover} className="randButton">Random wiki</button>
        </div>
      );
    }

  })
)



module.exports = QueryPane;
