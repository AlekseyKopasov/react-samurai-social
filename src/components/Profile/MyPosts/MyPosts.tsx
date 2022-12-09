import React from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'
import PostReduxForm from './PostForm'
import { PostFormValuesType, PostType } from '../../../types/types'

export type MapPropsType = {
  posts: Array<PostType>
}

export type DispatchPropsType = {
  addPost: (newPost: string) => void
}

const MyPosts: React.FC<MapPropsType & DispatchPropsType> = React.memo(({ posts, addPost }) => {
    const postsElems = posts
      .map(p => <Post message={ p.message } likesCount={ p.likesCount } key={ p.id } id={ p.id }/>)

    const onAddPost = (values: PostFormValuesType) => {
      addPost(values.newPost)
    }

    return (
      <div className={ s.postsBlock }>
        <div>
          <h3>My posts</h3>
          <PostReduxForm onSubmit={ onAddPost }/>
        </div>

        <ul className={ s.list }>
          { postsElems }
        </ul>
      </div>
    )
  },
)

export default MyPosts
