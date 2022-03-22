import React from 'react'
import {Field, reduxForm} from 'redux-form'
import {Textarea} from '../common/FormsControls/FormsControls'
import {maxLengthCreator, required} from '../../utils/validators/validators'

const maxLength50 = maxLengthCreator(50)

const DialogsForm = (props) => {
  const { handleSubmit } = props

  return (
    <form onSubmit={handleSubmit}>
      <Field
        placeholder="Your message"
        name="message"
        component={Textarea}
        validate={[maxLength50]}
      />
      <button type="submit">Send Message</button>
    </form>
  )
}

const DialogsReduxForm = reduxForm({ form: 'dialogs' })(DialogsForm)

export default DialogsReduxForm
