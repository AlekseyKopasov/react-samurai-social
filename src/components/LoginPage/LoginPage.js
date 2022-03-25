import React from 'react'
import {connect} from 'react-redux'
import LoginReduxForm from './LoginForm'
import {login} from '../../Redux/reducers/authReducer'
import {Redirect} from 'react-router-dom'

const LoginPage = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe)
  }

  if (props.isAuth) {
    return <Redirect to={'/profile'} />
  }

  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  )
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(LoginPage)
