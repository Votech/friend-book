import React from 'react';
import { connect } from 'react-redux';

import { firestore } from '../../firebase/firebase.utils';

import MediaQuery from 'react-responsive';

import UsersList from '../users-list/users-list.component';
import Scroll from '../scroll/scroll.component';

import './search-friend-book.styles.scss';

import SearchIcon from '@material-ui/icons/Search';
import FacebookLogo from '../../assets/svg/facebook.svg';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

class SearchFriendBook extends React.Component {
  state = {
    value: '',
    isHidden: 'true',
    users: {},
    userFriendsStatus: {},
  };

  unsubscribeFromOnSnapshot = null;

  componentDidMount() {
    const usersRef = firestore.collection('users');

    usersRef.get().then((querySnapshot) => {
      querySnapshot.forEach((doc) =>
        this.setState({
          users: {
            ...this.state.users,
            [doc.id]: {
              id: doc.id,
              fullName: `${doc.data().name} ${doc.data().surname}`,
              data: doc.data(),
            },
          },
        })
      );
    });
  }

  toggleIsHidden = () => {
    this.setState({ isHidden: !this.state.isHidden });
  };

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  };

  SearchHidden = () => (
    <div className='search-friend-book'>
      <div className='search-friend-book__header'>
        <img
          src={FacebookLogo}
          alt='Facebook Logo'
          className='search-friend-book--logo'
        />

        <div
          className='search-friend-book__input'
          onClick={() => this.toggleIsHidden()}
        >
          <SearchIcon />
          <MediaQuery query='(min-width: 1256px)'>
            <input
              placeholder='Search Facebook'
              type='text'
              value={this.state.value}
              onChange={this.handleChange}
            />
          </MediaQuery>
          <MediaQuery query='(max-width: 1255px)'>
            <input
              placeholder=''
              type='text'
              value={this.state.value}
              onChange={this.handleChange}
            />
          </MediaQuery>
        </div>
      </div>
    </div>
  );

  SearchOpen = () => {
    const { users, value } = this.state;
    const { currentUserId } = this.props;
    const filteredUsers = Object.values(users).filter(
      (user) =>
        user.id !== currentUserId &&
        user.fullName.toLowerCase().includes(value.toLowerCase())
    );

    return (
      <div className='search-friend-book search-friend-book__open'>
        <div className='search-friend-book__header'>
          <div
            className='search-friend-book__arrow-back'
            onClick={() => this.toggleIsHidden()}
          >
            <ArrowBackIcon />
          </div>

          <div
            className='search-friend-book__input .search-friend-book__input__open'
            style={{ width: '260px' }}
          >
            <SearchIcon />
            <input
              placeholder='Search Facebook'
              type='text'
              value={this.state.value}
              onChange={this.handleChange}
              autoFocus
            />
          </div>
        </div>
        <div className='search-friend-book__main'>
          <h4>People</h4>
          <Scroll maxHeight='600px'>
            <UsersList
              users={filteredUsers}
              userFriendStatus={this.state.userFriendsStatus}
            />
          </Scroll>
        </div>
      </div>
    );
  };

  render() {
    return (
      <div>{this.state.isHidden ? this.SearchHidden() : this.SearchOpen()}</div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUserId: state.user.currentUser.id,
});

export default connect(mapStateToProps)(SearchFriendBook);
