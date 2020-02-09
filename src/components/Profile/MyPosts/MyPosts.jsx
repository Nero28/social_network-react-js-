import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';






const MyPosts = (props) => {

  

  const postsElements = props.posts.map((p) => <Post message={p.message} likeCount={p.likesCount} />);


 

  const onAddPost = () => {
    props.addPost();
  };

  const onPostChange = (e) => {
    let text = e.target.value;
    props.updateNewPostText(text);
  };

  return (
    <div className={s.block} >
      <h3>My posts</h3>
      <div>
        <div><textarea placeholder='Add your post' onChange={onPostChange}
                                                   value={props.newPostText} />
        </div>
        <div>
          <button onClick={onAddPost}>Add post</button>
        </div>
      </div>
      <div className={s.posts} >
        {postsElements}
      </div>
    </div>
  )
}

export default MyPosts;