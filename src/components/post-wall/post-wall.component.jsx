import React from 'react';

import './post-wall.styles.scss';

import Post from '../post/post.component';

const PostWall = () => {
  return (
    <div className='post-wall'>
      <Post />
      <Post />
      <Post />
    </div>
  );
};

export default PostWall;
