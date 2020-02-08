import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";


let store = {

    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'Hi!How are you?', likesCount: 7885 },
                { id: 2, message: 'My first post', likesCount: 15808 },
                { id: 3, message: 'My second post', likesCount: 100000 }
            ],
            newPostText: ''

        },

        dialogsPage: {
            dialogs: [
                { id: 1, name: 'Chendler', foto: 'data:image/jpeg;base64,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 ' },
                { id: 2, name: 'Monika', foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcOPG2nK6QNGuHnO_eJRb9EjLATUlK-0iZSKXToKXjA830N85LBg&s ' },
                { id: 3, name: 'Joey', foto: ' https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlRl5SkxSlI426kWHYesaJKuED7AoWd5cG2r5i5BXUv9HxEKVi&s' },
                { id: 4, name: 'Phoeby', foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdzBlEn3ASlaYTGNLuhwXo9JSq8-GvyaKuTzf4LLF9fYLfGwjg&s' },
                { id: 5, name: 'Rachel', foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiu9VwCuHviTJnNfQEiX9MNHprUitng67eD1ukFRPNhL83UU8J&s' },
                { id: 6, name: 'Ross', foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeWjew5c0PreGtYlXp44Xy6hgXUV2zF8O7XRi_vfc8G4akcUfcgw&s ' }
            ],

            messages: [
                { id: 1, message: 'Hello!' },
                { id: 2, message: 'How are you?' },
                { id: 3, message: 'You call me?' },
                { id: 4, message: 'Your skill is very good!!' },
                { id: 5, message: 'Programming is cool!!!' }
            ],
            newMessageBody:''
        },

        sidebar: {
            friends: [
                { id: 1, name: 'Chendler', foto: 'data:image/jpeg;base64,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 ' },
                { id: 2, name: 'Monika', foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcOPG2nK6QNGuHnO_eJRb9EjLATUlK-0iZSKXToKXjA830N85LBg&s ' },
                { id: 3, name: 'Joey', foto: ' https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlRl5SkxSlI426kWHYesaJKuED7AoWd5cG2r5i5BXUv9HxEKVi&s' },
                { id: 4, name: 'Phoeby', foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdzBlEn3ASlaYTGNLuhwXo9JSq8-GvyaKuTzf4LLF9fYLfGwjg&s' },
                { id: 5, name: 'Rachel', foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiu9VwCuHviTJnNfQEiX9MNHprUitng67eD1ukFRPNhL83UU8J&s' },
                { id: 6, name: 'Ross', foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeWjew5c0PreGtYlXp44Xy6hgXUV2zF8O7XRi_vfc8G4akcUfcgw&s ' }
            ],
        }



    },

    getState() {
        return this._state;
    },

    _callSubscriber() {
        console.log('no subscribers(observer)');
    },


    subscribe(observer) {
        this._callSubscriber = observer;
    },

    //////////////////////
    dispatch(action) {
    this._state.profilePage= profileReducer(this._state.profilePage, action);
    this._state.dialogsPage= dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar= sidebarReducer(this._state.sidebarPage, action);
    this._callSubscriber(this._state);
    
    }
};

export default store;
window.store = store;