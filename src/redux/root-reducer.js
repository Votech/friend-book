import { combineReducers } from 'redux';

import userReducer from './user/user.reducer';
import userInterfaceReducer from './user-interface/user-interface.reducer';

export default combineReducers({
  user: userReducer,
  userInterface: userInterfaceReducer,
});
