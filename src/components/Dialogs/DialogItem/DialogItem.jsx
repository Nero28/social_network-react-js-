import React from 'react';
import s from './../Header/Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;
    return <div className={s.dialog + ' ' + s.active + s.photo} >
<NavLink to={path}> <img src = {props.foto} /> {props.name}</NavLink>
    </div>
}

export default DialogItem;