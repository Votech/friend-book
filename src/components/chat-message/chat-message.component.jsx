import React from 'react';

import './chat-message.styles.scss';

import { Avatar } from '@material-ui/core';

const ChatMessage = ({message, currentUser, src}) => {
    return (
        <div className='chatMessage'>
            {
            currentUser ?
            <>
                <div className='chatMessage-push' />
                <div className='chatMessage-message chatMessage-message--currentUser'>
                    <p>{message}</p>
                </div>

                
            </> 
            :
            <>
            <div className='chatMessage-avatar'>
                    <Avatar src={src} style={{height: '28px', width: '28px'}} /></div>
                <div className='chatMessage-message'>
                    <p>{message}</p>
                </div>
            </>
             }
            
        </div>
    )
}

export default ChatMessage;