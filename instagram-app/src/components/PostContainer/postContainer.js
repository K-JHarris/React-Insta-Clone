import React from 'react'
import CommentSection from '../CommentSection/commentSection'
import './postContainer.css'

function PostContainer(props) {
  return (
    <div className="post-container">
      <div className="user-header">
        <img src={props.data.thumbnailUrl}/>
        <p className="user-name">{props.data.username}</p>
      </div>

      <div className="post-content">
        <img src={props.data.imageUrl}/>

          <div className="post-ui-container">
            <i className="far fa-heart fa-2x"></i>
            <i className="far fa-comment fa-2x"></i>
          </div>

        <p className="likes">{props.data.likes} likes</p>
        <p>{props.data.timestamp}</p>
      </div>

      <div className="comment-section">
        {props.data.comments.map(comments => <CommentSection comments={comments} />)}
      </div>
    </div>
  );
}

export default PostContainer;
