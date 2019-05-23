import React from 'react'
import CommentSection from '../CommentSection/commentSection'

function PostContainer(props) {
  return (
    <div>
      <img src={props.data.thumbnailUrl}/>
      <p>{props.data.username}</p>
      <img src={props.data.imageUrl}/>
      <p>{props.data.likes}</p>
      <p>{props.data.timestamp}</p>
      {props.data.comments.map(comments => <CommentSection comments={comments} />)}
    </div>
  );
}

export default PostContainer;
