import React from 'react';

import './post.styles.scss';

import { Avatar } from '@material-ui/core';

import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined';
import ModeCommentOutlinedIcon from '@material-ui/icons/ModeCommentOutlined';

const Post = () => {
  return (
    <div className='post'>
      <div className='post-header'>
        <Avatar />
        <div className='post-header__user-info'>
          <h4>Wuyo Myuijong</h4>
          <p>02.09.2020</p>
        </div>
      </div>
      <div className='post-content'>
        <p>
          Hey there expat brains trust! Wondering if anyone can suggest any
          community sports leagues happening around the place? Not too fussed
          what it is, as long as there is a bit of running around involved, and
          team based. I used to play a lot of touch rugby and Oztag (try tag for
          the brits) and my Norwegian other half was a bit of a gun handball
          player in her day, so something in those veins would be ideal! Any
          suggestions would be most welcome! Thanks in advance!
        </p>
        <img
          src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
          alt='girl'
        />
        <div className='post-content__likes-and-comments'>
          <div className='post-content__likes'>
            <ThumbUpIcon style={{ color: '#2e81f4' }} />
            <p>15</p>
          </div>
          <p className='post-content__comments'>432 comments</p>
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
