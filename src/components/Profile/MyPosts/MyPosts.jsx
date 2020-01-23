import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  const postsData = [
    { id: 1, message: 'Hi!How are you?', likesCount: 7885 },
    { id: 2, message: 'My first post', likesCount: 15808 },
    { id: 3, message: 'My second post', likesCount: 100000 }
  ]

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
        <Post message={postsData[0].message} likeCount={postsData[0].likesCount} />
        <Post message={postsData[1].message} likeCount={postsData[1].likesCount} />
        <Post message={postsData[2].message} likeCount={postsData[2].likesCount} />
      </div>
    </div>
  )
}

export default MyPosts;