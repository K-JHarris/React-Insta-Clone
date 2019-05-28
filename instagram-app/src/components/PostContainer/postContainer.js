import React from 'react'
import CommentSection from '../CommentSection/commentSection'
import './postContainer.css'

function PostContainer(props) {
  // console.log(props.data.comments)
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
      </div>

      <div className="comment-section">
        {props.data.comments.map(comments => <CommentSection comments={comments} />)}
        {/* <CommentSection comments={props.data.comments} /> */}
      </div>
      <form className="add-comment-field">
        <input type="text" placeholder="Add a comment.."/>
      </form>
    </div>
  );
}

export default PostContainer;
