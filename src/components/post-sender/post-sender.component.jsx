import React from 'react';
import { connect } from 'react-redux';
import { toggleFeelingActivity } from '../../redux/user-interface/user-interface.actions';

import { addPost, storage } from '../../firebase/firebase.utils';

import PhotoUploader from '../photo-uploader/photo-uploader.component';
import CustomButton from '../custom-button/custom-button.component';
import FeelingActivity from '../../components/feeling-activity/feeling-activity.component';

import './post-sender.styles.scss';

import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';

import { Avatar } from '@material-ui/core';

class PostSender extends React.Component {
  constructor() {
    super();

    this.state = {
      message: '',
      photoUrl: '',
      isFeeling: { emoji: '', feeling: '' },
      isPhotoUploaderOpen: false,
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { message, photoUrl, isFeeling } = this.state;
    const { name, surname, profilePhotoUrl, id } = this.props.currentUser;

    const username = `${name} ${surname}`;

    const data = {
      username: username,
      message: message,
      photoUrl: photoUrl,
      authorProfilePhotoUrl: profilePhotoUrl,
      isFeeling: isFeeling,
      authorId: id,
    };

    if (message || photoUrl !== '') {
      addPost(data);

      this.setState({
        message: '',
        photoUrl: '',
        isFeeling: { emoji: '', feeling: '' },
        isPhotoUploaderOpen: false,
      });
    } else {
      alert('Add a photo or message to publish a post');
    }
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

  handleIsFeeling = (emoji, feeling) => {
    this.setState({
      isFeeling: {
        emoji: emoji,
        feeling: feeling,
      },
    });
  };

  render() {
    const { message, photoUrl, isPhotoUploaderOpen } = this.state;
    const {
      currentUser,
      openFeelingActivity,
      toggleFeelingActivity,
    } = this.props;
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
            <h4>Photo</h4>
          </div>
          <div
            className='post-sender__option'
            onClick={() => toggleFeelingActivity()}
          >
            <InsertEmoticonIcon style={{ color: 'orange' }} />
            <h4>Feeling</h4>
          </div>
        </div>
        {isPhotoUploaderOpen && (
          <PhotoUploader
            handleChange={this.handleChange}
            handleFileChange={this.handleFileChange}
            photoUrl={photoUrl}
          />
        )}
        {openFeelingActivity && (
          <FeelingActivity
            handleIsFeeling={this.handleIsFeeling}
            isFeeling={this.state.isFeeling}
            emoji={this.state.emoji}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
  openFeelingActivity: state.userInterface.openFeelingActivity,
});

const mapDispatchToProps = (dispatch) => ({
  toggleFeelingActivity: () => dispatch(toggleFeelingActivity()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostSender);
