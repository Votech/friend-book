import React from 'react';
import { connect } from 'react-redux';

import { addPost, storage } from '../../firebase/firebase.utils';

import PhotoUploader from '../photo-uploader/photo-uploader.component';
import CustomButton from '../custom-button/custom-button.component';

import './post-sender.styles.scss';

import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';

import { Avatar } from '@material-ui/core';
import { setProfilePhotoUrl } from '../../redux/user/user.actions';
import { FilterOutlined } from '@material-ui/icons';

class PostSender extends React.Component {
  constructor() {
    super();

    this.state = {
      message: '',
      photoUrl: '',
      isPhotoUploaderOpen: false,
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

    if (file) {
      const fileRef = storageRef.child(
        `${this.props.currentUser.id}/${file.name}`
      );

      fileRef
        .put(file)
        .then(() =>
          fileRef
            .getDownloadURL()
            .then((fileUrl) => this.setState({ photoUrl: fileUrl }))
        );
    }
  };

  togglePhotoUploaderOpen = () => {
    this.setState({ isPhotoUploaderOpen: !this.state.isPhotoUploaderOpen });
  };

  render() {
    const { message, photoUrl, isPhotoUploaderOpen } = this.state;
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
            <div>
              <CustomButton noMargin type='submit' style={{}}>
                Publish
              </CustomButton>
            </div>
          </form>
        </div>

        <div className='post-sender__options'>
          <div
            className='post-sender__option'
            onClick={() => this.togglePhotoUploaderOpen()}
          >
            <PhotoLibraryIcon style={{ color: 'green' }} />
            <h4>Photo/Video</h4>
          </div>
          <div className='post-sender__option'>
            <InsertEmoticonIcon style={{ color: 'orange' }} />
            <h4>Feeling/Activity</h4>
          </div>
        </div>
        {isPhotoUploaderOpen && (
          <PhotoUploader
            handleChange={this.handleChange}
            handleFileChange={this.handleFileChange}
            photoUrl={photoUrl}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(PostSender);
