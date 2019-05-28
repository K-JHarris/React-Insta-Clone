import React, { Component } from 'react'
import './commentSection.css'

// const CommentSection = props =>{
//   console.log(props)
//   return(
//     <div>
//       <p className="user-name">{props.comments.username}</p>
//       <p>{props.comments.text}</p>
//     </div>
//   )
// }

class CommentSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: []
    }
  }

  componentDidMount() {
    this.setState({ comments: this.props.comments });
  }

  render() {
    return (
      <div className="comment-section-container">
        <p className="user-name">{this.state.comments.username}</p>
        <p>{this.state.comments.text}</p>
      </div>
    );
  }
}

export default CommentSection;
