import React from 'react';
import s from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/1'>Sergey</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/2'>Den</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/3'>Evgen</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/4'>Dima</NavLink>
                </div>
                <div className={s.dialog + ' ' + s.active}>
                    <NavLink to='/dialogs/5'>Roma</NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hello!</div>
                <div className={s.message}>How are you?</div>
                <div className={s.message}>You call me?</div>
                <div className={s.message}>Your skill is very good)</div>
                <div className={s.message}>Programming is cool!!!</div>
            </div>
        </div>
    )
}

export default Dialogs;