import { UserActionTypes } from './user.types';

const INITIAL_STATE = {
  currentUser: null,
  openUpdateProfilePhoto: false,
  profilePhotoUrl: '',
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };

    case UserActionTypes.TOGGLE_UPDATE_PROFILE_PHOTO:
      return {
        ...state,
        openUpdateProfilePhoto: !state.openUpdateProfilePhoto,
      };

    case UserActionTypes.SET_PROFILE_PHOTO_URL:
      return {
        ...state,
        profilePhotoUrl: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
