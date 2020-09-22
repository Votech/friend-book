import React from 'react';

import { firestore } from '../../firebase/firebase.utils';

import './comments-list.styles.scss';

import Comment from '../comment/comment.component';

class CommentsList extends React.Component {
  state = {
    comments: [],
  };
  unsubscribeFromOnSnapshot = null;

  componentDidMount() {
    this.unsubscribeFromOnSnapshot = firestore
      .collection(`posts/${this.props.postId}/comments`)
      .orderBy('createdAt')
      .onSnapshot((snapshot) => {
        this.setState({
          comments: snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          })),
        });
      });
  }

  componentWillUnmount() {
    this.unsubscribeFromOnSnapshot();
  }

  render() {
    const { comments } = this.state;
    return (
      <div className='comments'>
        {comments.map((comment) => (
          <Comment
            key={comment.id}
            authorProfilePhotoUrl={comment.data.authorProfilePhotoUrl}
            createdAt={comment.data.createdAt}
            message={comment.data.message}
            username={comment.data.username}
          />
        ))}
      </div>
    );
  }
}

export default CommentsList;
