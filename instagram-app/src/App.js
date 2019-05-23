import React, { Component }from 'react';
import './App.css';

import dummyData from './dummy-data'

import PostContainer from './components/PostContainer/postContainer'
import SearchBar from './components/SearchBar/searchBar'

class App extends Component {
  constructor(){
    super();
    this.state = {
      dummyData: []
    }
  }

  componentDidMount() {
    this.setState({ dummyData: dummyData }); //prevState points here
  }

  render() {
    return (
      <div className="App">
        <SearchBar />
        {this.state.dummyData.map(data => <PostContainer key={data.timestamp} data={data}/>)}
      </div>
    );
  } 
}
export default App;
