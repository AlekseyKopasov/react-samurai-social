import React from 'react'
import {Field, reduxForm} from 'redux-form'
import {Input} from '../common/FormsControls/FormsControls'
import {required} from '../../utils/validators/validators'
import styles from '../common/FormsControls/FormControls.module.scss'

const LoginForm = (props) => {
  const { handleSubmit } = props

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <Field
            type="text"
            placeholder="Login"
            name="email"
            component={Input}
            validate={[required]}
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
        {props.error && <div className={styles.formSummaryError}>{ props.error }</div>}
        <div>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  )
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

export default LoginReduxForm
