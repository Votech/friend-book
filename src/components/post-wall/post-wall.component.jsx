import React from 'react';

import { firestore } from '../../firebase/firebase.utils';

import './post-wall.styles.scss';

import Post from '../post/post.component';

class PostWall extends React.Component {
  state = {
    posts: [],
  };
  unsubscribeFromOnSnapshot = null;

  componentDidMount() {
    this.unsubscribeFromOnSnapshot = firestore
      .collection('posts')
      .orderBy('createdAt', 'desc')
      .onSnapshot((snapshot) => {
        this.setState(
          {
            posts: snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            })),
          },
          () => console.log(this.state)
        );
      });
  }

  componentWillUnmount() {
    this.unsubscribeFromOnSnapshot();
  }

  render() {
    const { posts } = this.state;
    return (
      <div className='post-wall'>
        {posts.map((post) => (
          <Post
            key={post.id}
            postId={post.data.id}
            authorProfilePhotoUrl={post.data.authorProfilePhotoUrl}
            comments={post.data.comments}
            likes={post.data.likes}
            message={post.data.message}
            photoUrl={post.data.photoUrl}
            username={post.data.username}
            createdAt={post.data.createdAt}
          />
        ))}
      </div>
    );
  }
}

export default PostWall;
