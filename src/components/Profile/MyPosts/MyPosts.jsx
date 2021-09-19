import React from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = props => {
  const postsElems = props.posts
    .map(p =>  <Post message={p.message} likesCount={p.likesCount} id={p.id} />)

  return (
    <div className={s.postsBlock}>
      <div>
        <h3>My posts</h3>
        <div>
          <textarea />
          <button>Add Post</button>
        </div>
      </div>

      <ul className={s.list}>
        { postsElems }
      </ul>
    </div>
  )
}

export default MyPosts
