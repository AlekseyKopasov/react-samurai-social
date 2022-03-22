import React from 'react'
import {Field, reduxForm} from 'redux-form'
import {Input} from '../common/FormsControls/FormsControls'
import {required, maxLengthCreator} from '../../utils/validators/validators'

const maxLength10 = maxLengthCreator(10)

const LoginForm = (props) => {
  const { handleSubmit } = props

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <Field
            type="text"
            placeholder="Login"
            name="login"
            component={Input}
            validate={[required, maxLength10]}
          />
        </div>
        <div>
          <Field
            type="text"
            placeholder="password"
            name="password"
            component={Input}
            validate={[required]}
          />
        </div>
        <div>
          <Field
            type="checkbox"
            name="rememberMe"
            component={Input}
          /> Remember me
        </div>
        <div>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  )
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

export default LoginReduxForm
