import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './../DialogItem/DialogItem.jsx';
import Message from './../Message/Message.jsx';


const Dialogs = (props) => {
    const dialogsElements = props.dialogs.map((d) => <DialogItem name={d.name} id={d.id} />);

    const messagesElements = props.messages.map((m) => <Message message={m.message} />);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElements}
            </div>
            <div>
                {messagesElements}
            </div>
        </div >
    )
}

export default Dialogs;