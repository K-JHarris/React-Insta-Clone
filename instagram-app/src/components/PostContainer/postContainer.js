import React from 'react'

function PostContainer(props) {
  return (
    <div className="App">
      <img src={props.data.thumbnailUrl}/>
      <p>{props.data.username}</p>
      <img src={props.data.imageUrl}/>
      <p>{props.data.likes}</p>
      <p>{props.data.timestamp}</p>
      <CommentSection comments={props.data.comments}
    </div>
  );
}

export default PostContainer;
