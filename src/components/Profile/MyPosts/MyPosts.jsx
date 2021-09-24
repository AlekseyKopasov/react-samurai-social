import React from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = props => {
  const postsElems = props.profilePage.posts
    .map(p =>  <Post message={p.message} likesCount={p.likesCount} id={p.id} />)

  const newPostElement = React.createRef()

  const addPost = () => {
    props.onAddPost()
  }

  const changePostText = () => {
    const text = newPostElement.current.value
    props.onChangePostText(text)
  }

  return (
    <div className={s.postsBlock}>
      <div>
        <h3>My posts</h3>
        <div>
          <textarea ref={ newPostElement } onChange={changePostText} value={props.profilePage.newPostText} />
          <button onClick={ addPost }>Add Post</button>
        </div>
      </div>

      <ul className={s.list}>
        { postsElems }
      </ul>
    </div>
  )
}

export default MyPosts
