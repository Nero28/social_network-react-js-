import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './../DialogItem/DialogItem.jsx';
import Message from './../Message/Message.jsx';


const Dialogs = (props) => {

    const dialogsElements = props.dialogsPage.dialogs.map((d) => <DialogItem name={d.name} id={d.id} foto={d.foto} />);

    const messagesElements = props.dialogsPage.messages.map((m) => <Message message={m.message} />);



    let newMessageElement = React.createRef();



    const addMessage = () => {
        props.dispatch({ type: 'ADD-MESSAGE' })
    };

    const onMessageChange = () => {
        let text = newMessageElement.current.value;
        let action = {
            type: 'UPDATE-NEW-MESSAGE-TEXT',
            newText: text
        }
        props.dispatch(action);
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
                    <div><textarea onChange={onMessageChange}
                                        ref={newMessageElement}
                                        value={props.newMessageText} />
                    </div>
                    <div>
                        <button onClick={addMessage}>Add message</button>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Dialogs;