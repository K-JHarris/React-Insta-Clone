import React, { Component } from 'react';
import './postContainer.css';
import CommentSection from "../CommentSection/commentSection"
import PropTypes from 'prop-types'

class PostContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            liked: false,
            commentInput: ''
        };
    }

    toggleLike = () => {
        this.setState({
            liked: !this.state.liked
        })
    }

    commentChangeHandler = (events) => {
        this.setState({
            commentInput: events.target.value
        })
    }

    render() {
    
    return (
        <div className="postContainer">
            <div className="postHeader">
                <div className="userIconContainer"><img className="userIcon" src={this.props.data.thumbnailUrl}></img></div>
                <h2 className="userName">{this.props.data.username}</h2>
            </div>
            <div className="postContent">
                <div className="postImgContainer">
                    <img className="postImg" src={this.props.data.imageUrl}></img>
                </div>
                <div className="postIconContainer">
                    <i className="far fa-heart icon" onClick={this.toggleLike}></i>
                    <i className="far fa-comment icon"></i>
                </div>
                <p className="likesDisplay">{this.state.liked ? this.props.data.likes + 1 : this.props.data.likes} likes</p>
                {<CommentSection
                    timestamp={this.props.data.timestamp} 
                    commentInput={this.state.commentInput}
                    commentChangeHandler={this.commentChangeHandler}
                    commentHandler={this.props.commentHandler} 
                    comments={this.props.data.comments}
                />}
            </div>
        </div>
        )
    }
};

PostContainer.propTypes = {
    thumbnailUrl: PropTypes.string,
    imageUrl: PropTypes.string,
    likes: PropTypes.number
}

export default PostContainer;