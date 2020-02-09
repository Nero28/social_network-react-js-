import { addPostCreator, updateNewPostTextCreator } from '../../../redux/profile-reducer';
import React from 'react';
import MyPosts from './MyPosts';

const MyPostsContainer = (props) => {

  const state = props.store.getState();

  const addPost = () => {
    props.store.dispatch(addPostCreator());
  };

  const onPostChange = (e) => {
    let action = updateNewPostTextCreator(e);
    props.store.dispatch(action);
  };


  return (<MyPosts updateNewPostText={onPostChange}
    addPost={addPost}
    posts={state.profilePage.posts}
    newPostText={state.profilePage.newPostText} />);
}

export default MyPostsContainer;