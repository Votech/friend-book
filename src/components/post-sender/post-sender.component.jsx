import React from 'react';
import { connect } from 'react-redux';

import { addPost, storage } from '../../firebase/firebase.utils';

import './post-sender.styles.scss';

import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';

import { Avatar } from '@material-ui/core';

class PostSender extends React.Component {
  constructor() {
    super();

    this.state = {
      message: '',
      photoUrl: '',
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { message, photoUrl } = this.state;
    const { name, surname, profilePhotoUrl, id } = this.props.currentUser;

    const username = `${name} ${surname}`;

    const data = {
      username: username,
      message: message,
      photoUrl: photoUrl,
      authorProfilePhotoUrl: profilePhotoUrl,
      authorId: id,
    };

    addPost(data);

    this.setState({
      message: '',
      photoUrl: '',
    });
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleFileChange = (e) => {
    const file = e.target.files[0];
    const storageRef = storage.ref();
    const fileRef = storageRef.child(
      `${this.props.currentUser.id}/${file.name}`
    );

    fileRef.put(file).then(() => console.log('Uploaded a file'));
  };

  handlePhotoButton = (e) => {};

  render() {
    const { message, photoUrl } = this.state;
    const { currentUser } = this.props;
    return (
      <div className='post-sender'>
        <div className='post-sender__header'>
          <Avatar src={currentUser.profilePhotoUrl} />
          <form onSubmit={this.handleSubmit}>
            <input
              className='post-sender__input'
              placeholder={`What's on your mind, ${currentUser.name}?`}
              name='message'
              value={message}
              onChange={this.handleChange}
            />
            <input
              placeholder='image URL (Optional)'
              name='photoUrl'
              value={photoUrl}
              onChange={this.handleChange}
            />
            <button type='submit'>Hidden submit</button>
          </form>
        </div>

        <div className='post-sender__options'>
          <div className='post-sender__option'>
            <VideocamIcon style={{ color: 'red' }} />
            <h4>Live Video</h4>
          </div>
          <div className='post-sender__option'>
            <PhotoLibraryIcon style={{ color: 'green' }} />
            <h4>Photo/Video</h4>
          </div>
          <input type='file' onChange={this.handleFileChange} />
          <div className='post-sender__option'>
            <InsertEmoticonIcon style={{ color: 'orange' }} />
            <h4>Feeling/Activity</h4>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(PostSender);
