import React from 'react'
import {connect} from 'react-redux'
import Header from './Header'
import {setAuthUserData} from '../../Redux/reducers/authReducer'
import {authAPI} from '../../api/api'

class HeaderContainer extends React.Component{
  componentDidMount() {
    authAPI.me()
      .then(res => {
        if (res.data.resultCode === 0) {
          const {id, email, login} = res.data.data
          this.props.setAuthUserData(id, login, email)
        }
      })
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

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer)
