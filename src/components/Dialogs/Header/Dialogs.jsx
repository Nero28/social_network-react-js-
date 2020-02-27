import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './../DialogItem/DialogItem.jsx';
import Message from './../Message/Message.jsx';
import { Field, reduxForm } from 'redux-form'
import { Textarea } from '../../common/FormsControls/FormsControls';
import { required, maxLengthCreator } from '../../../utils/validators/validators';


const maxLength100 = maxLengthCreator(100);

const Dialogs = (props) => {

    let state = props.dialogsPage;

    const dialogsElements = state.dialogs.map((d) => <DialogItem name={d.name} id={d.id} foto={d.foto} />);

    const messagesElements = state.messages.map((m) => <Message message={m.message} />);


    let newMessageBody = state.newMessageBody;

    const AddMessageForm = (props) => {
        return (
            <form onSubmit={props.handleSubmit}>
                <div><Field placeholder='Enter your message'
                    name='newMessageBody'
                    component={Textarea}
                    validate={[required, maxLength100]} /></div>
                <div><button >Send message</button></div>
            </form>
        )
    };

    const addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody);
    };

    const AddMessageReduxForm = reduxForm({ form: 'dialogsAddMessageForm' })(AddMessageForm);


    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <div className={s.header}>
                <h3>Write message</h3>
                <div>
                    <AddMessageReduxForm onSubmit={addNewMessage} />
                </div>
            </div>
        </div >
    )
}

export default Dialogs;