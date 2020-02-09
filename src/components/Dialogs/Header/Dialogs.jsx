import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './../DialogItem/DialogItem.jsx';
import Message from './../Message/Message.jsx';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../../redux/dialogs-reducer';



const Dialogs = (props) => {

    let state = props.dialogsPage;

    const dialogsElements = state.dialogs.map((d) => <DialogItem name={d.name} id={d.id} foto={d.foto} />);

    const messagesElements = state.messages.map((m) => <Message message={m.message} />);


    let newMessageBody = state.newMessageBody;
    
    const onSendMessageClick = () => {
         props.sendMessage();
    };

    const onNewMessageChange = (e) => {
        let body =  e.target.value;
        props.updateNewMessageBody(body);
        
    };



    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <div className = {s.header}>
                <h3>Write message</h3>
                <div>
                    <div><textarea placeholder='Enter your message' 
                                        onChange={onNewMessageChange}
                                        value={newMessageBody} />
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>Send message</button>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Dialogs;