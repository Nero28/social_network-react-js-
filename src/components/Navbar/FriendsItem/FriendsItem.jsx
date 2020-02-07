import React from 'react';
import s from './../Friends/Friends.module.css';
import { NavLink } from 'react-router-dom';

const FriendsItem = (props) => {

    let path = '/friends/' + props.id;
    return <div >
<NavLink to={path}> <img src = {props.foto} /> {props.name}</NavLink>
    </div>
}

export default FriendsItem;