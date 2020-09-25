import { UserInterfaceActionTypes } from './user-interface.types';

const INITIAL_STATE = {
  openUpdateProfilePhoto: false,
  openHeaderDropdownSettings: false,
};

const userInterfaceReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserInterfaceActionTypes.TOGGLE_UPDATE_PROFILE_PHOTO:
      return {
        ...state,
        openUpdateProfilePhoto: !state.openUpdateProfilePhoto,
      };

    case UserInterfaceActionTypes.TOGGLE_HEADER_DROPDOWN_SETTINGS:
      console.log('tykurwo');
      return {
        ...state,
        openHeaderDropdownSettings: !state.openHeaderDropdownSettings,
      };

    default:
      return state;
  }
};

export default userInterfaceReducer;
