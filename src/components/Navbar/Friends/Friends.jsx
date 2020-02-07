import React from 'react';
import s from './Friends.module.css';
import FriendsItem from '../FriendsItem/FriendsItem';


const Friends = (props) => {

   const friendsElements = props.state.friends.map((d) => <FriendsItem name={d.name} id={d.id} foto = {d.foto}/>);
    return <div className={s.friends}>
        {friendsElements} </div>
};

export default Friends;