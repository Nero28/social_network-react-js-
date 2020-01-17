import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  return (
    <div> my posts
     <div className={s.posts}>
        <Post message = 'Hi!How are you?' likeCount = '7885'/>
        <Post message = 'My first post' likeCount = '15808'/>
        <Post message = 'My second post' likeCount = '100000'/>
      </div>
    </div>
  )
}

export default MyPosts;