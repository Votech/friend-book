import { ChatActionTypes } from './chat.types';

const INITIAL_STATE = {
    receiverUserId: '',
}

const chatReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case ChatActionTypes.SET_RECEIVER_USER_ID:
            return {
                ...state,
                receiverUserId: action.payload,
            }

        default: 
        return state;
    }
}

export default chatReducer;