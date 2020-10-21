import React from 'react';

import {connect} from 'react-redux';
import {toggleChat} from '../../redux/user-interface/user-interface.actions';

import { firestore } from '../../firebase/firebase.utils';

import './chat.styles.scss';

import ChatMessagesList from '../chat-messages-list/chat-messages-list.component';
import Scroll from '../scroll/scroll.component';

import CloseIcon from '@material-ui/icons/Close';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import { Avatar } from '@material-ui/core';

class Chat extends React.Component {
    state = {
        chatRoomId: '',
        receiverUserId: '',
        receiverUserData: {},
        inputValue: '',
        messages: [],
    }

    unsubscribe = null;

    async componentDidMount() {
       this.findChatRoomId();
       this.setReceiverUserId();
       this.getReceiverUserData();
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevProps.receiverUserId !== this.props.receiverUserId) {
            this.setReceiverUserId();
            this.findChatRoomId();
            this.getReceiverUserData();
        }
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    getReceiverUserData = async () => {
        const {receiverUserId} = this.props;
    
            let receiverUserRef = await firestore.doc(`users/${receiverUserId}`);

            receiverUserRef.get().then((doc) => {
                if (doc.exists) {
                    this.setState({receiverUserData: doc.data()})
                } else {
                    console.log('receiverUser dosent exist')
                }
            }).catch((error) => console.log(Error(error)))
       
    } 

    setReceiverUserId = () => {
        const {receiverUserId} = this.props;
        this.setState({receiverUserId: receiverUserId})
    }

    findChatRoomId = () => {
        const {receiverUserId, currentUserId} = this.props;

        if (receiverUserId < currentUserId) {
            this.setState({chatRoomId: receiverUserId + currentUserId}, () => this.handleChatRoom())
        } else {
            this.setState({chatRoomId: currentUserId + receiverUserId}, () => this.handleChatRoom())
        }
    }

    handleChatRoom = async () => {
        const { chatRoomId } = this.state;

        const chatRoomRef = firestore.doc(`chats/${chatRoomId}`);
        const chatRoomSnapShot = await chatRoomRef.get();
        
        if (!chatRoomSnapShot.exists) {
            try {
                await chatRoomRef.set({chatRoomId}).then(() => this.handleMessages());
            } catch (error) {
                Error(error);
            }
        } else {
            this.handleMessages();
        }
    }

    handleMessages = () => {
        const { chatRoomId } = this.state;
        const messagesRef = firestore.collection(`chats/${chatRoomId}/messages`);

        this.unsubscribe = messagesRef.onSnapshot((messages) => {
            let arr = [];
            messages.forEach((message) => {
                arr.push(message.data())
            })
            this.setState({messages: arr})
        })

    }

    handleSubmit = async(e) => {
        e.preventDefault();
        
        const createdAt = new Date();
        const { chatRoomId, inputValue } = this.state;
        const { currentUserProfilePhoto, currentUserId } = this.props;
        const chatRoomMessagesRef = firestore.doc(`chats/${chatRoomId}/messages/${createdAt}`)

        try {
            await chatRoomMessagesRef.set({
                createdAt: createdAt,
                photoUrl: currentUserProfilePhoto,
                message: inputValue,
                authorId: currentUserId,
            });
        } catch (error) {
            console.log(Error(error));
        }

        this.setState({inputValue: ''});
    }

    handleChange = (e) => {
        this.setState({inputValue: e.target.value});
    }
 
    render() {
        const { toggleChat, currentUserId} = this.props;
        const {name, surname, profilePhotoUrl} = this.state.receiverUserData;
        return(
            <div className='chat'>
                <div className='chat-header'>
                    <Avatar src={profilePhotoUrl} />
                    <h4>{`${name} ${surname}`}</h4>
                    <CloseIcon style={{cursor: 'pointer'}} onClick={() => toggleChat()} />
                </div>
                    <Scroll height="350px">
                        <ChatMessagesList messages={this.state.messages} currentUserId={currentUserId} />
                    </Scroll>
                <div className='chat-footer'>
                <EmojiEmotionsIcon style={{color: "#2e81f4"}}/>
                    <form onSubmit={this.handleSubmit}>
                        <input 
                        className='chat-footer-input' 
                        placeholder='Aa'
                        value={this.state.inputValue}
                        onChange={this.handleChange}
                        />
                    </form>
                    <ThumbUpIcon style={{color: "#2e81f4"}}/>
                </div>  
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    receiverUserId: state.chat.receiverUserId,
    currentUserId: state.user.currentUser.id,
    currentUserProfilePhoto: state.user.currentUser.profilePhotoUrl,
})

const mapDispatchToProps = (dispatch) => ({
    toggleChat: () => dispatch(toggleChat()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Chat);