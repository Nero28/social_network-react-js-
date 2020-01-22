import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  return (
    <div className={s.block} >
      <h3>My posts</h3>
    <div>
        <div><textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div>
      <div className={s.posts} >
        <Post message='Hi!How are you?' likeCount='7885' />
        <Post message='My first post' likeCount='15808' />
        <Post message='My second post' likeCount='100000' />
      </div>
    </div>
  )
}

export default MyPosts;