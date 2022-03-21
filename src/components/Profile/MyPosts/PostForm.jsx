import React from 'react'
import {Field, reduxForm} from 'redux-form'
import {Textarea} from '../../common/FormsControls/FormsControls'
import {maxLengthCreator, required} from '../../../utils/validators/validators'

const maxLength10 = maxLengthCreator(10)

const PostForm = (props) => {
  const {handleSubmit} = props

    return (
      <form onSubmit={handleSubmit}>
        <Field
          type="text"
          placeholder="New post"
          name="newPost"
          component={Textarea}
          validate={[required, maxLength10]}
        />
        <button type="submit">Add Post</button>
      </form>
    )
}

const PostReduxForm = reduxForm({ form: 'newPost' })(PostForm)

export default PostReduxForm
