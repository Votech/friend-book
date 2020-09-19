import React from 'react';

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
}) => {
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
        {photoUrl && <img src={photoUrl} alt='post pic' />}

        <div className='post-content__likes-and-comments'>
          <div className='post-content__likes'>
            <ThumbUpIcon style={{ color: '#2e81f4' }} />
            <p>{likes}</p>
          </div>
          <p className='post-content__comments'>{comments} comments</p>
        </div>
        <div className='post-content__options'>
          <div className='post-content__option'>
            <ThumbUpOutlinedIcon />
            <p>Like</p>
          </div>
          <div className='post-content__option'>
            <ModeCommentOutlinedIcon />
            <p>Comment</p>
          </div>
        </div>
      </div>
      <div className='post-bottom'>
        <Avatar src='https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=702&q=80' />
        <input
          className='post-bottom__input'
          placeholder='Write a comment...'
        />
      </div>
    </div>
  );
};

export default Post;
