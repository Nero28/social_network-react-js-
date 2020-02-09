import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from '../DialogItem/DialogItem.jsx';
import Message from '../Message/Message.jsx';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../../redux/dialogs-reducer';
import Dialogs from './Dialogs';



const DialogsContainer = (props) => {

    let state = props.store.getState().dialogsPage;
 
    const onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator());
    };

    const onNewMessageChange = (body) => {
        let action = updateNewMessageBodyCreator(body);
        props.store.dispatch(action);
    };



    return (<Dialogs updateNewMessageBody={onNewMessageChange}
         sendMessage ={onSendMessageClick}
         dialogsPage={state}/>)
}

export default DialogsContainer;