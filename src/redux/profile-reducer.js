import { usersAPI, profileAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
    posts: [
        { id: 1, message: 'Hi!How are you?', likesCount: 7885 },
        { id: 2, message: 'My first post', likesCount: 15808 },
        { id: 3, message: 'My second post', likesCount: 100000 }
    ],
     
    profile: null,
    status: ''
};


const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            const newPost = { id: 4, message: action.newPostText, likesCount: 0 };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            };
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            };
        }
        default: return state;
    };
};

export const addPostCreator = (newPostText) => ({ type: ADD_POST,newPostText });

export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });

export const setStatus = (status) => ({ type: SET_STATUS, status });


export const getUserProfile = (userId) => {
    return (dispatch) => {
        usersAPI.getProfile(userId)
            .then(data => {
                dispatch(setUserProfile(data));
            })
    }
};

export const getStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId)
            .then(data => {
                dispatch(setStatus(data));
            })
    }
};

export const updateStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(setStatus(status));
                }
            })
    }
}



export default profileReducer;