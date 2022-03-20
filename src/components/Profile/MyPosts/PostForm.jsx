import React from 'react'
import {Field, reduxForm} from 'redux-form'

const PostForm = (props) => {
  const {handleSubmit} = props

    return (
      <form onSubmit={handleSubmit}>
        <Field
          type="text"
          placeholder="New post"
          name="newPost"
          component="textarea"
          ref={props.newPostElement}
          onChange={props.onChangePost}
          value={props.newPostText}
        />
        <button onClick={props.onAddPost}>Add Post</button>
      </form>
    )
}

const PostReduxForm = reduxForm({ form: 'newPost' })(PostForm)

export default PostReduxForm
