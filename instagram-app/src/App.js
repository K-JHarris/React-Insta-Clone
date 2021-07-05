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
      filteredPosts: null, //filtered posts from dummydata
      search: "" //param to search in posts and filter
    };
  }

  componentDidMount() {
    this.setState({ posts: dummydata }); //prevstate points here
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

  // searchPosts = e => { //BROKEN
  //   e.preventDefault();
  //   this.setState((prevState) => {
  //     const filteredPostsArray=prevState.posts.filter(post => 
  //       post.username.includes(prevState.search)
  //     ) 
  //     return this.state.filteredPosts = filteredPostsArray
  //   }
  // )
  // };

  searchPosts = e => {
    e.preventDefault();
    this.setState({ 
      filteredPosts: this.state.posts.find((posts) => posts.username === this.state.search
      )
    }
  )
  };

  inputHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };


  render() {
    console.log(this.state.filteredPosts)
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
          { this.state.filteredPosts !==null
            ?
              <PostContainer commentHandler={this.commentHandler} data={this.state.filteredPosts}/>
           : 
          this.state.posts.map(data => (
              <PostContainer commentHandler={this.commentHandler} key={data.timestamp} data={data}/>
          )) }
        </div>
      </div>
    );
  }
}

export default App;
