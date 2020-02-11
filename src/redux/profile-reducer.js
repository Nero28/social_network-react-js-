const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';


let initialState = {
    posts: [
        { id: 1, message: 'Hi!How are you?', likesCount: 7885 },
        { id: 2, message: 'My first post', likesCount: 15808 },
        { id: 3, message: 'My second post', likesCount: 100000 }
    ],
    newPostText: ''
};


const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            const newPost = { id: 4, message: state.newPostText, likesCount: 0 };
            const stateCopy = { ...state };
            stateCopy.posts = [...state.posts];
            stateCopy.posts.push(newPost);
            stateCopy.newPostText = '';
            return stateCopy;
        }
        case UPDATE_NEW_POST_TEXT: {
            const stateCopy = { ...state };
            stateCopy.newPostText = action.post;
            return stateCopy;
        }
        default: return state;
    };
};

export const addPostCreator = () => ({ type: ADD_POST });

export const updateNewPostTextCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, post: text });

export default profileReducer;