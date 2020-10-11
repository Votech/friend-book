import React, { useRef, useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { addLike, addComment, firestore } from '../../firebase/firebase.utils';

import CommentsList from '../comments-list/comments-list.component';

import './post.styles.scss';

import { Avatar } from '@material-ui/core';

import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined';
import ModeCommentOutlinedIcon from '@material-ui/icons/ModeCommentOutlined';

const Post = ({
  authorProfilePhotoUrl,
  isFeeling,
  likes,
  message,
  photoUrl,
  username,
  createdAt,
  profilePhotoUrl,
  postId,
  userId,
  currentUser,
}) => {
  const commentInput = useRef(null);

  const [isOpened, setIsOpened] = useState(false);
  const [numberOfComments, setNumberOfComments] = useState(null);
  const [commentHookInput, setCommentHookInput] = useState('');

  useEffect(() => {
    const commentsRef = firestore.collection(`posts/${postId}/comments`);

    commentsRef.onSnapshot((snapshot) => setNumberOfComments(snapshot.size));
  }, [postId]);

  const toggleComments = () => {
    setIsOpened((wasOpened) => !wasOpened);
  };

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
  };

  const handleSendComment = (event) => {
    event.preventDefault();

    const data = {
      userId: userId,
      name: currentUser.name,
      surname: currentUser.surname,
      profilePhotoUrl: profilePhotoUrl,
      message: commentHookInput,
    };

    addComment(postId, data);
    !isOpened && toggleComments();
    setCommentHookInput('');
  };

  const commentInputFocus = () => {
    commentInput.current.focus();
  };

  return (
    <div className='post'>
      <div className='post-header'>
        <Avatar src={authorProfilePhotoUrl} />
        <div className='post-header__user-info'>
          <div className='post-header__status'>
            <h4>{username}</h4>
            {isFeeling && 
            isFeeling.feeling !== '' &&
            (
              <h4 className='post-header__is-feeling'>{` is ${isFeeling.emoji} feeling ${isFeeling.feeling}`}</h4>
            )}
          </div>
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
          <p
            className='post-content__comments'
            onClick={() => toggleComments()}
          >
            {numberOfComments} comments
          </p>
        </div>
        <div className='post-content__options'>
          <div className='post-content__option' onClick={handleLikeClick}>
            <ThumbUpOutlinedIcon />
            <p>Like</p>
          </div>
          <div
            className='post-content__option'
            onClick={() => commentInputFocus()}
          >
            <ModeCommentOutlinedIcon />
            <p>Comment</p>
          </div>
        </div>
      </div>
      <div className='post-bottom'>
        {isOpened && <CommentsList postId={postId} />}
        <div className='post-bottom__comment-input'>
          <Avatar src={profilePhotoUrl} />
          <form onSubmit={handleSendComment}>
            <input
              className='post-bottom__input'
              placeholder='Write a comment...'
              ref={commentInput}
              value={commentHookInput}
              onChange={(e) => setCommentHookInput(e.target.value)}
            />
            <button type='submit' />
          </form>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  profilePhotoUrl: state.user.currentUser.profilePhotoUrl,
  userId: state.user.currentUser.id,
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(Post);
