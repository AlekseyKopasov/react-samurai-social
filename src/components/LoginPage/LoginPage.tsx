import React from 'react'
import { connect } from 'react-redux'
import LoginReduxForm from './LoginForm'
import { login } from '../../redux/reducers/authReducer'
import { AppStateType } from '../../redux/redux-store'
import { CaptchaUrlType, LoginFormValuesType } from '../../types/types'
import { Redirect } from 'react-router-dom'

const LoginPage: React.FC<MapStateToPropsType & MapDispatchToPropsType> = ({ login, isAuth, captchaUrl }) => {
  const onSubmit = (formData: LoginFormValuesType) => {
    login(formData.email, formData.password, formData.rememberMe, formData.captcha)
  }

  if (isAuth) {
    return <Redirect to={ '/profile' }/>
  }

  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm
        onSubmit={ onSubmit }
        captchaUrl={ captchaUrl }
      />
    </div>
  )
}

type MapStateToPropsType = {
  captchaUrl: CaptchaUrlType | undefined
  isAuth: boolean
}

type MapDispatchToPropsType = {
  login: (email: string, password: string, rememberMe: boolean, captcha: string) => void
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
  captchaUrl: state.auth.captchaUrl,
  isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { login })(LoginPage)
