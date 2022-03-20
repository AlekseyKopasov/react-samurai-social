import React from 'react'
import LoginReduxForm from './LoginForm'

const LoginPage = () => {
  const onSubmit = (formData) => {
    console.log(formData)
  }

  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  )
}

export default LoginPage
