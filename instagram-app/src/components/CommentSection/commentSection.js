import React from 'react'

function CommentSection(props) {
  return (
    <div>
      <p>{props.comments.username}</p>
      <p>{props.comments.text}</p>
    </div>
  );
}

export default CommentSection;
