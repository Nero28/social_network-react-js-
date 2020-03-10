import { usersAPI, profileAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';
const SAVE_PHOTO_SUCCESS ='SAVE_PHOTO_SUCCESS';

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
        case DELETE_POST: {
            return {
                ...state,
                posts: state.posts.filter(p => p.id !== action.postId)
            };
        }
        case SAVE_PHOTO_SUCCESS: {
            return {
                ...state,
                profile:{...state.profile, photos : action.photos} 
            };
        }
        default: return state;
    };
};

export const addPostCreator = (newPostText) => ({ type: ADD_POST, newPostText });

export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });

export const setStatus = (status) => ({ type: SET_STATUS, status });

export const deletePost = (postId) => ({ type: DELETE_POST, postId });

export const savePhotoSuccess = (photos) => ({ type: SAVE_PHOTO_SUCCESS, photos });

export const getUserProfile = (userId) => {
    return async (dispatch) => {
        const data = await usersAPI.getProfile(userId);
        dispatch(setUserProfile(data));
    }
};

export const getStatus = (userId) => {
    return async (dispatch) => {
        const data = await profileAPI.getStatus(userId);
        dispatch(setStatus(data));
    }
};

export const updateStatus = (status) => {
    return async (dispatch) => {
        const data = await profileAPI.updateStatus(status);
        if (data.resultCode === 0) {
            dispatch(setStatus(status));
        };
    }
}

export const savePhoto = (file) => {
    return async (dispatch) => {
        const data = await profileAPI.savePhoto(file);
        if (data.resultCode === 0) {
            dispatch(savePhotoSuccess(data.data.photos));
        };
    }
}



export default profileReducer;