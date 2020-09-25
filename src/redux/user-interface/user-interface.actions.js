import { UserInterfaceActionTypes } from './user-interface.types';

export const toggleUpdateProfilePhoto = () => ({
  type: UserInterfaceActionTypes.TOGGLE_UPDATE_PROFILE_PHOTO,
});

export const toggleHeaderDropdownSettings = () => {
  return {
    type: UserInterfaceActionTypes.TOGGLE_HEADER_DROPDOWN_SETTINGS,
  };
};
