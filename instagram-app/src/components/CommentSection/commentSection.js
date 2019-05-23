import React from 'react'
import './commentSection.css'

function CommentSection(props) {
  return (
    <div className="comment-section-container">
      <p className="user-name">{props.comments.username}</p>
      <p>{props.comments.text}</p>
    </div>
  );
}

export default CommentSection;
