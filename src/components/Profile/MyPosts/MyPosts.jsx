import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { addPostCreator, updateNewPostTextCreator } from '../../../redux/profile-reducer';





const MyPosts = (props) => {

  let state = props.store.getState().profilePage;

  const postsElements = state.posts.map((p) => <Post message={p.message} likeCount={p.likesCount} />);


  let newPostText = state.newPostText;


  const addPost = () => {
    props.store.dispatch(addPostCreator());
  };

  const onPostChange = (e) => {
    let text = e.target.value;
    let action =updateNewPostTextCreator(text);
    props.store.dispatch(action);
  };

  return (
    <div className={s.block} >
      <h3>My posts</h3>
      <div>
        <div><textarea placeholder='Add your post' onChange={onPostChange}
                                                   value={newPostText} />
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
        </div>
      </div>
      <div className={s.posts} >
        {postsElements}
      </div>
    </div>
  )
}

export default MyPosts;