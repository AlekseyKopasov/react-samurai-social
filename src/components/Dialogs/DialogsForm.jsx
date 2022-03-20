import React from 'react'
import {Field, reduxForm} from 'redux-form'

const DialogsForm = (props) => {
  const { handleSubmit } = props

  return (
    <form onSubmit={handleSubmit}>
      <Field
        placeholder="Your message"
        name="message"
        component="textarea"
        onChange={props.updateMessageBodyHandler}
        value={props.newMessageBody}
      />
      <button type="submit" onClick={ props.sendMessageHandler }>Send Message</button>
    </form>
  )
}

const DialogsReduxForm = reduxForm({ form: 'dialogs' })(DialogsForm)

export default DialogsReduxForm
