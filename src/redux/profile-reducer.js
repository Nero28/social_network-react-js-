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
        case ADD_POST:
            const newPost = state.newPostText;
            state.newPostText = '';
            state.posts.push({ id: 4, message:newPost , likesCount: 0 });
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.post;
            return state;
        default: return state;
    };
};

export const addPostCreator = () => ({ type: ADD_POST });

export const updateNewPostTextCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, post: text });

export default profileReducer;