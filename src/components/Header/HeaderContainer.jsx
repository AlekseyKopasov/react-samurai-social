import React from 'react'
import {connect} from 'react-redux'
import Header from './Header'
import {getAuthUserDataTC} from '../../Redux/reducers/authReducer'
import {authAPI} from '../../api/api'

class HeaderContainer extends React.Component{
  componentDidMount() {
    this.props.getAuthUserDataTC()
  }

  render() {
    return <Header {...this.props} />
  }
}

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    login: state.auth.login
  }
}

export default connect(mapStateToProps, {getAuthUserDataTC})(HeaderContainer)
