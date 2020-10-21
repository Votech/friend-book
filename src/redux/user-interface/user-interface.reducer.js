import { UserInterfaceActionTypes } from './user-interface.types';

const INITIAL_STATE = {
  openUpdateProfilePhoto: false,
  openHeaderDropdownSettings: false,
  openFeelingActivity: false,
  openNotifications: false,
  openChat: false,
};

const userInterfaceReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserInterfaceActionTypes.TOGGLE_UPDATE_PROFILE_PHOTO:
      return {
        ...state,
        openUpdateProfilePhoto: !state.openUpdateProfilePhoto,
      };

    case UserInterfaceActionTypes.TOGGLE_HEADER_DROPDOWN_SETTINGS:
      return {
        ...state,
        openHeaderDropdownSettings: !state.openHeaderDropdownSettings,
      };

    case UserInterfaceActionTypes.TOGGLE_FEELING_ACTIVITY:
      return {
        openFeelingActivity: !state.openFeelingActivity,
      };

    case UserInterfaceActionTypes.TOGGLE_NOTIFICATIONS:
      return {
        openNotifications: !state.openNotifications,
      };

    case UserInterfaceActionTypes.TOGGLE_CHAT:
      return {
        ...state,
        openChat: !state.openChat,
      }

    default:
      return state;
  }
};

export default userInterfaceReducer;
