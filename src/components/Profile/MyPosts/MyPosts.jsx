import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { Field, reduxForm } from 'redux-form'
import {required, maxLengthCreator} from '../../../utils/validators/validators';
import { Textarea } from '../../common/FormsControls/FormsControls';



const MyPosts = (props) => {

  const maxLength10 = maxLengthCreator(10);
  const postsElements = props.posts.map((p) => <Post message={p.message} likeCount={p.likesCount} />);

  const AddPostsForm = (props) => {

    return (
      <form onSubmit={props.handleSubmit}>
        <div><Field placeholder='Add your post' name='newPostText' component={Textarea}
          validate={[required ,maxLength10]} /></div>
        <div><button >Add post</button></div>
      </form>
    )
  };

  const AddNewPost = (values) => {
    props.addPost(values.newPostText);
  };

  const AddPostsReduxForm = reduxForm({ form: 'posts' })(AddPostsForm);


  return (
    <div className={s.block} >
      <h3>My posts</h3>
      <div>
        <AddPostsReduxForm onSubmit={AddNewPost} />
      </div>
      <div className={s.posts} >
        {postsElements}
      </div>
    </div>
  )
}

export default MyPosts;
