import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

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
    
        const posts = [
            { id: 1, message: 'Hi!How are you?', likesCount: 7885 },
            { id: 2, message: 'My first post', likesCount: 15808 },
            { id: 3, message: 'My second post', likesCount: 100000 }
        ]

ReactDOM.render(<App posts = {posts} dialogs = {dialogs} messages= {messages} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
