import React from 'react';
import './commentSection.css'
import PropTypes from 'prop-types'

const CommentSection = props => {
    return (
        <div className="commentSectionContainer">
            { props.comments.map(comment => (
                <div className="commentContainer">
                <p className="commentUserName">{comment.username}</p>
                <p className="commentText">{comment.text}</p>
            </div>
          )) }
          <form onSubmit={(event) => props.commentHandler(event, props.timestamp, {username: 'Khari!', text: props.commentInput})}>
            <input onChange={props.commentChangeHandler} value={props.commentInput} className="commentInput" type="text" placeholder="Add a comment..."></input>
          </form>
        </div>
    )
};

CommentSection.propTypes = {
    username: PropTypes.string,
    text: PropTypes.string
}

export default CommentSection;