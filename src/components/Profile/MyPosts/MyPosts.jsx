import React from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'
import {addPostCreator, updateNewPostTextCreator} from '../../../Redux/reducers/profileReducer'

const MyPosts = props => {
  const postsElems = props.posts
    .map(p =>  <Post message={p.message} likesCount={p.likesCount} key={p.id} id={p.id} />)

  const newPostElement = React.createRef()

  const onAddPost = () => {
    props.addPostCreator()
  }

  const onChangePostText = () => {
    const text = newPostElement.current.value
    props.updateNewPostTextCreator(text)
  }

  return (
    <div className={s.postsBlock}>
      <div>
        <h3>My posts</h3>
        <div>
          <textarea ref={newPostElement} onChange={onChangePostText} value={props.newPostText} />
          <button onClick={onAddPost}>Add Post</button>
        </div>
      </div>

      <ul className={s.list}>
        { postsElems }
      </ul>
    </div>
  )
}

export default MyPosts
