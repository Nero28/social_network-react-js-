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
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <DialogItems name='Sergey' id='1' />
                <DialogItems name='Den' id='2' />
                <DialogItems name='Dima' id='3' />
                <DialogItems name='Evgen' id='4' />
                <DialogItems name='Roma' id='5' />
            </div>
            <div className={s.messages}>
                <Message message='Hello!' />
                <Message message='How are you?' />
                <Message message='You call me?' />
                <Message message='Your skill is very good!!' />
                <Message message='Programming is cool!!!' />
            </div>
        </div>
    )
}

export default Dialogs;