import React from 'react'
import { InjectedFormProps, reduxForm } from 'redux-form'
import { createField, GetStringKeys, Textarea } from '../../common/FormsControls/FormsControls'
import { maxLengthCreator, required } from '../../../utils/validators/validators'
import { PostFormValuesType } from '../../../types/types'

type PropsType = {}

type PostFormValuesTypeKeys = GetStringKeys<PostFormValuesType>

const maxLength10 = maxLengthCreator(10)

const PostForm: React.FC<InjectedFormProps<PostFormValuesType, PropsType> & PropsType> = (props) => {
  const { handleSubmit } = props

  return (
    <form onSubmit={ handleSubmit }>
      { createField<PostFormValuesTypeKeys>(
        'text',
        Textarea,
        [ required, maxLength10 ],
        'Login',
        'newPost',
        { placeholder: 'New post' })
      }
      <button type="submit">Add Post</button>
    </form>
  )
}

const PostReduxForm = reduxForm<PostFormValuesType, PropsType>({ form: 'newPost' })(PostForm)

export default PostReduxForm
