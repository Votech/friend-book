import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';

import { addLike } from '../../firebase/firebase.utils';

import './post.styles.scss';

import { Avatar } from '@material-ui/core';

import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined';
import ModeCommentOutlinedIcon from '@material-ui/icons/ModeCommentOutlined';

const Post = ({
  authorProfilePhotoUrl,
  comments,
  likes,
  message,
  photoUrl,
  username,
  createdAt,
  profilePhotoUrl,
  postId,
  userId,
}) => {
  const commentInput = useRef(null);

  const handleLikes = () => {
    if (likes.length === 1 && likes[0] === userId) {
      return "You've liked this post";
    } else if (likes.length === 2 && likes.includes(userId)) {
      return 'You and 1 other';
    } else if (likes.includes(userId))
      return `You and ${likes.length - 1} others`;
    else {
      return likes.length;
    }
  };

  const handleLikeClick = () => {
    addLike(postId, userId);
    console.log(postId);
  };

  const handleCommentInputFocus = () => {
    commentInput.current.focus();
  };

  return (
    <div className='post'>
      <div className='post-header'>
        <Avatar src={authorProfilePhotoUrl} />
        <div className='post-header__user-info'>
          <h4>{username}</h4>
          <p>{createdAt && createdAt.toDate().toUTCString()}</p>
        </div>
      </div>
      <div className='post-content'>
        <p>{message}</p>
        <div className='post-content__image-container'>
          {photoUrl && <img src={photoUrl} alt='post pic' />}
        </div>
        <div className='post-content__likes-and-comments'>
          <div className='post-content__likes'>
            <ThumbUpIcon style={{ color: '#2e81f4' }} />
            <p>{handleLikes()}</p>
          </div>
          <p className='post-content__comments'>{comments} comments</p>
        </div>
        <div className='post-content__options'>
          <div className='post-content__option' onClick={handleLikeClick}>
            <ThumbUpOutlinedIcon />
            <p>Like</p>
          </div>
          <div
            className='post-content__option'
            onClick={() => handleCommentInputFocus()}
          >
            <ModeCommentOutlinedIcon />
            <p>Comment</p>
          </div>
        </div>
      </div>
      <div className='post-bottom'>
        <Avatar src={profilePhotoUrl} />
        <input
          className='post-bottom__input'
          placeholder='Write a comment...'
          ref={commentInput}
        />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  profilePhotoUrl: state.user.currentUser.profilePhotoUrl,
  userId: state.user.currentUser.id,
});

export default connect(mapStateToProps)(Post);
