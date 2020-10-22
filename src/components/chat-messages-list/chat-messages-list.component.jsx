import React, { useEffect, useRef } from 'react';

import './chat-messages-list.styles.scss';

import ChatMessage from '../chat-message/chat-message.component';

const ChatMessagesList = ({messages, currentUserId}) => {
    const messagesEndRef = useRef(null);
    const scrollToBottom = () => {
      messagesEndRef.current.scrollIntoView();
    };
    useEffect(scrollToBottom, [messages]);

    return(
        <div className='chat-messages-list'>
            
            {messages.map(function(message, index){
                if(message.authorId === currentUserId) {
                    return (
                        <ChatMessage message={message.message} key={index} src={message.photoUrl} currentUser/>
                    )
                } else {
                    return (
                        <ChatMessage message={message.message} key={index} src={message.photoUrl} />
                    )
                }
            
           } )}
            <div ref={messagesEndRef} />
        </div>
    )
}

export default ChatMessagesList;