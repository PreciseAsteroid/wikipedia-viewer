import React , {Component} from 'react';
import Item from '../components/Item';
import Helper from '../utils/wikiHelpers';

class ItemsContainer extends Component{
 // TODO: update prop instead of this.items

  fetchDataFromServer(){
    let jsonData = [];
    let jsonObj ={};
    if(this.props.location.query.searchStr!==""){
      Helper.searchWikis(this.props.location.query.searchStr)
        .then(function(res) {
          console.log('ItemsContainer.fetchDataFromServer',res);
          for(let i = 0; i<res.data[1].length;i++){
            jsonObj['key']=i;
            jsonObj['title']=res.data[1][i];
            jsonObj['summary']=res.data[2][i];
            jsonObj['link']=res.data[3][i];
            jsonData.push(jsonObj);
            jsonObj={}
          }
          // this.items = jsonData;
          this.setState({
            items: jsonData
          });
        }.bind(this))
    }
    else
    {
      this.setState({
        items: jsonData
      });
    }

  }

  render(){
    console.log('render');
    if(this.state){
      var myItems = this.state.items.map(function(item) {
        return(
          <Item key={item.key}
            title={item.title}
            summary={item.summary}
            link={item.link} >
          </Item>
        )
      })
    }
    return(
      <div className='list'>{myItems}</div>
    )
  }
  componentDidMount(){
    console.log('in componentDidMount: ',this.props.location.query.searchStr);
    this.fetchDataFromServer();
  }
  componentWillReceiveProps(nextProps){
    console.log('componentWillReceiveProps',this.props.location.query.searchStr);
    console.log('componentWillReceiveProps: nextProps',nextProps);
  }
  componentDidUpdate(prevProps){
    console.log('componentDidUpdate:prevProps',prevProps.location.query.searchStr);
    console.log('componentDidUpdate:currentProps',this.props.location.query.searchStr);
    // this.fetchDataFromServer();
    if(prevProps.location.query.searchStr !== this.props.location.query.searchStr){
      this.fetchDataFromServer();
    }
  }
}

module.exports = ItemsContainer;
