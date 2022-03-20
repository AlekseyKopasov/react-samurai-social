import React from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'
import PostReduxForm from './PostForm'

const MyPosts = props => {
  const postsElems = props.posts
    .map(p =>  <Post message={p.message} likesCount={p.likesCount} key={p.id} id={p.id} />)

  const onSubmit = (values) => {
    props.addPost(values.newPost)
  }

  return (
    <div className={s.postsBlock}>
      <div>
        <h3>My posts</h3>
        <PostReduxForm onSubmit={onSubmit} />
      </div>

      <ul className={s.list}>
        { postsElems }
      </ul>
    </div>
  )
}

export default MyPosts
