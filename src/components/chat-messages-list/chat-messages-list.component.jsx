import React from 'react';

import './chat-messages-list.styles.scss';

import ChatMessage from '../chat-message/chat-message.component';

const ChatMessagesList = () => {
    return(
        <div className='chat-messages-list'>
            <h2>Chat messages list</h2>
            <ChatMessage />
        </div>
    )
}

export default ChatMessagesList;