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
        />
        <button type="submit">Add Post</button>
      </form>
    )
}

const PostReduxForm = reduxForm({ form: 'newPost' })(PostForm)

export default PostReduxForm
