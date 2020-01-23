import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  const posts = [
    { id: 1, message: 'Hi!How are you?', likesCount: 7885 },
    { id: 2, message: 'My first post', likesCount: 15808 },
    { id: 3, message: 'My second post', likesCount: 100000 }
  ]
  const postsElements = posts
    .map((p) => <Post message={p.message} likeCount={p.likesCount} />);

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
        {postsElements}
      </div>
    </div>
  )
}

export default MyPosts;