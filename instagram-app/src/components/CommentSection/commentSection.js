import React from 'react'

function CommentSection(props) {
  console.log(props)
  return (
    <div className="App">
      <p>{props.comments.username}</p>
      <p>{props.comments.text}</p>
    </div>
  );
}

export default CommentSection;
