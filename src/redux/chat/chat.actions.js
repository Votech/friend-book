import { ChatActionTypes } from './chat.types';

export const setReceiverUserId = (receiverUserId) => ({
    type: ChatActionTypes.SET_RECEIVER_USER_ID,
    payload: receiverUserId,
})