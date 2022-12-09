import React from 'react'
import { connect } from 'react-redux'
import Header from './Header'
import { logout } from '../../redux/reducers/authReducer'
import { AppStateType } from '../../redux/redux-store'

type MapStatePropsType = {
  isAuth: boolean
  login: string | null
}

type MapDispatchPropsType = {
  logout: () => void
}

type PropsType = MapStatePropsType & MapDispatchPropsType

class HeaderContainer extends React.Component<PropsType> {
  render() {
    return <Header { ...this.props } />
  }
}

const mapStateToProps = (state: AppStateType) => {
  return {
    isAuth: state.auth.isAuth,
    login: state.auth.login,
  }
}

export default connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>(
  mapStateToProps, { logout })(HeaderContainer)
