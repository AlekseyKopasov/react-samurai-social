import React from 'react'
import {Field, reduxForm} from 'redux-form'

const LoginForm = (props) => {
  const { handleSubmit } = props

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <Field type="text" placeholder="Login" name="login" component="input"/>
        </div>
        <div>
          <Field type="text" placeholder="password" name="password" component="input"/>
        </div>
        <div>
          <Field type="checkbox" name="rememberMe" component="input" /> Remember me
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
