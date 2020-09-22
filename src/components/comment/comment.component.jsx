import React from 'react';

import './comment.styles.scss';

import { Avatar } from '@material-ui/core';

const Comment = ({ message, username, createdAt, authorProfilePhotoUrl }) => {
  const timestamp = createdAt && createdAt.toDate().toUTCString();

  const timestampToComment =
    timestamp && timestamp.substring(5, timestamp.length - 4);

  return (
    <div className='comment'>
      <Avatar src={authorProfilePhotoUrl} />
      <div className='comment__container'>
        <div className='comment__main'>
          <h5>{username}</h5>
          <p>{message}</p>
        </div>
        <p>{timestampToComment}</p>
      </div>
    </div>
  );
};

export default Comment;
