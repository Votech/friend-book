import React from 'react';

import './chat.styles.scss';

import ChatMessagesList from '../chat-messages-list/chat-messages-list.component';
import Scroll from '../scroll/scroll.component';

import CloseIcon from '@material-ui/icons/Close';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import { Avatar } from '@material-ui/core';

class Chat extends React.Component {


    render() {
        return(
            <div className='chat'>
                <div className='chat-header'>
                    <Avatar />
                    <h4>Name Surname</h4>
                    <CloseIcon />
                </div>
                <Scroll height="350px"><ChatMessagesList /></Scroll>
                <div className='chat-footer'>
                <EmojiEmotionsIcon style={{color: "#2e81f4"}}/>
                    <form>
                        <input className='chat-footer-input' placeholder='Aa' />
                    </form>
                   
                    <ThumbUpIcon style={{color: "#2e81f4"}}/>
                </div>  
            </div>
        )
    }
}

export default Chat;