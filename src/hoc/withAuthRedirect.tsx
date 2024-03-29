import React from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { AppStateType } from '../redux/redux-store'

const mapStateToPropsForRedirect = (state: AppStateType) => ({
  isAuth: state.auth.isAuth
})

type MapPropsType = {
  isAuth: boolean
}

export function withAuthRedirect<WCP extends JSX.IntrinsicAttributes>(WrappedComponent: React.ComponentType<WCP>) {
  const RedirectComponent: React.FC<MapPropsType>  = (props) => {
    let { isAuth, ...restProps } = props
    if (!isAuth) return <Redirect to={ '/login' }/>
    return <WrappedComponent { ...restProps as WCP }
    />
  }

  const ConnectedAuthRedirectComponent = connect<MapPropsType, {}, WCP, AppStateType>(mapStateToPropsForRedirect)(RedirectComponent)

  return ConnectedAuthRedirectComponent
}
