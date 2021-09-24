import React from 'react'
import MyPosts from './MyPosts'
import {addPostCreator, updateNewPostTextCreator} from '../../../Redux/reducers/profile-reducer'

const MyPostsContainer = ({ store, dispatch }) => {
  const onAddPost = () => {
    dispatch(addPostCreator())
  }

  const onChangePostText = (text) => {
    dispatch(updateNewPostTextCreator(text))
  }

  return (
    <MyPosts
      onAddPost={onAddPost}
      onChangePostText={onChangePostText}
      profilePage={store.profilePage}
    />
  )
}

export default MyPostsContainer
