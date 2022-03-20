import React from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'
import PostReduxForm from './PostForm'

const MyPosts = props => {
  const postsElems = props.posts
    .map(p =>  <Post message={p.message} likesCount={p.likesCount} key={p.id} id={p.id} />)

  const newPostElement = React.createRef()

  const onAddPost = () => {
    props.addPost()
  }

  const onChangePost = () => {
    const text = newPostElement.current.value
    props.updateNewPostText(text)
  }

  const onSubmit = (formData) => {
    console.log(formData)
  }

  return (
    <div className={s.postsBlock}>
      <div>
        <h3>My posts</h3>
        <PostReduxForm
          newPostElement={newPostElement}
          onChangePost={onChangePost}
          newPostText={props.newPostText}
          onAddPost={onAddPost}
          onSubmit={onSubmit}
        />
      </div>

      <ul className={s.list}>
        { postsElems }
      </ul>
    </div>
  )
}

export default MyPosts
