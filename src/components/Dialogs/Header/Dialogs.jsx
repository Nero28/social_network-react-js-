import React from 'react';
import s from './Dialogs.module.css';

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className= {s.dialogItems}>
                <div className={s.dialog}>Sergey</div>
                <div className={s.dialog}>Den</div>
                <div className={s.dialog}>Evgen</div>
                <div className={s.dialog}>Dima</div>
                <div className={s.dialog + ' ' + s.active}>Roma</div> 
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