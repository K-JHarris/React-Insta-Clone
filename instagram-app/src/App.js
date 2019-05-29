import React, { Component } from 'react';
import './App.css';
import SearchBar from "./components/SearchBar/searchBar";
import dummydata from "./dummy-data";
import PostContainer from "./components/PostContainer/postContainer"

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: [], //dummydata posts
      filteredPosts: [], //filtered posts from dummydata
      search: "" //param to search in posts and filter
    };
  }

  componentDidMount() {
    this.setState({ posts: dummydata });
  }

  commentHandler = (event, key, comment) => { 
    event.preventDefault();
    let newPosts = this.state.posts.map(post => {
      if (key === post.timestamp) {
        post.comments.push(comment);
        return post;
      } else {
        return post;
      }
    })
    this.setState({ posts: newPosts }) 
  }

  searchPosts = e => {
    console.log(this.state.posts, this.state.filteredPosts)
    e.preventDefault();
    this.setState((prevState) => {const filteredPostsArray=prevState.posts.filter(post => post.username.includes(prevState.search)) 
      return {filteredPosts: filteredPostsArray}
    }
    )
  };

  inputHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };


  render() {
    console.log(this.state.search)
    return (
      <div className="App">
        <div>
          <SearchBar 
            searchPosts={this.searchPosts}
            search={this.state.search}
            inputHandler={this.inputHandler}
          />
        </div>

        <div className="listItemContainer">
          { this.state.filteredPosts.length > 0
            ? this.state.filteredPosts.map(data => (
              <PostContainer commentHandler={this.commentHandler} key={data.timestamp} data={data}/>
          )) : 
          this.state.posts.map(data => (
              <PostContainer commentHandler={this.commentHandler} key={data.timestamp} data={data}/>
          )) }
        </div>
      </div>
    );
  }
}

export default App;
