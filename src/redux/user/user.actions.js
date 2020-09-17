import { UserActionTypes } from './user.types';

export const setCurrentUser = (user) => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user,
});

export const toggleUpdateProfilePhoto = () => ({
  type: UserActionTypes.TOGGLE_UPDATE_PROFILE_PHOTO,
});

export const setProfilePhotoUrl = (url) => ({
  type: UserActionTypes.SET_PROFILE_PHOTO_URL,
  payload: url,
});
