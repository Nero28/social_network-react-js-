import React from 'react';
import s from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItems = (props) => {
    let path = '/dialogs/' + props.id;
    return <div className={s.dialog + ' ' + s.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}


const Message = (props) => {
    return <div className={s.message}>{props.message}</div>
}

const Dialogs = (props) => {

    const dialogs = [
        { id: 1, name: 'Sergey' },
        { id: 2, name: 'Den' },
        { id: 3, name: 'Dima' },
        { id: 4, name: 'Evgen' },
        { id: 5, name: 'Roma' },
    ]

    const messages = [
        { id: 1, message: 'Hello!' },
        { id: 2, message: 'How are you?' },
        { id: 3, message: 'You call me?' },
        { id: 4, message: 'Your skill is very good!!' },
        { id: 5, message: 'Programming is cool!!!' },
    ]

    const dialogsElements = dialogs
        .map((d) => <DialogItems name={d.name} id={d.id} />);

    const messagesElements = messages
        .map((m) => <Message message={m.message} />);

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