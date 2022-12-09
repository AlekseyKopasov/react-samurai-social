import React from 'react'
import { InjectedFormProps, reduxForm } from 'redux-form'
import { createField, GetStringKeys, Textarea } from '../common/FormsControls/FormsControls'
import { maxLengthCreator } from '../../utils/validators/validators'
import { DialogFormValuesType } from '../../types/types'

const maxLength50 = maxLengthCreator(50)

export type DialogFormValuesTypeKeys = GetStringKeys<DialogFormValuesType>
type PropsType = {}

const DialogsForm: React.FC<InjectedFormProps<DialogFormValuesType, PropsType> & PropsType> = (props) => {
  const { handleSubmit } = props

  return (
    <form onSubmit={ handleSubmit }>
      { createField<DialogFormValuesTypeKeys>('text', Textarea, [ maxLength50 ], 'Your message', 'message', { placeholder: 'Your message' }) }
      <button type="submit">Send Message</button>
    </form>
  )
}

const DialogsReduxForm = reduxForm<DialogFormValuesType>({ form: 'dialogs' })(DialogsForm)

export default DialogsReduxForm
