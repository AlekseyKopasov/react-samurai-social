import React from 'react'
import { InjectedFormProps, reduxForm } from 'redux-form'
import { createField, GetStringKeys, Input } from '../common/FormsControls/FormsControls'
import { required } from '../../utils/validators/validators'
import styles from '../common/FormsControls/FormControls.module.scss'
import { CaptchaUrlType, LoginFormValuesType } from '../../types/types'

type OwnPropsType = {
  captchaUrl: CaptchaUrlType | undefined
}

export type LoginFormValuesTypeKeys = GetStringKeys<LoginFormValuesType>

const LoginForm: React.FC<InjectedFormProps<LoginFormValuesType, OwnPropsType> & OwnPropsType> = ({
                                                                                                    handleSubmit,
                                                                                                    error,
                                                                                                    captchaUrl,
                                                                                                  }) => {
  return (
    <div>
      <form onSubmit={ handleSubmit }>
        { createField<LoginFormValuesTypeKeys>('text', Input, [ required ], 'Login', 'email') }
        { createField<LoginFormValuesTypeKeys>('password', Input, [ required ], 'Password', 'password') }
        { createField<LoginFormValuesTypeKeys>('checkbox', Input, null, 'Remember me', 'rememberMe') }

        { captchaUrl && <img src={ captchaUrl.url } alt="captcha"/> }
        { captchaUrl && createField<LoginFormValuesTypeKeys>('text', Input, [ required ], 'Captcha', 'captcha') }

        { error && <div className={ styles.formSummaryError }>{ error }</div> }
        <div>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  )
}

const LoginReduxForm = reduxForm<LoginFormValuesType, OwnPropsType>({ form: 'login' })(LoginForm)

export default LoginReduxForm
