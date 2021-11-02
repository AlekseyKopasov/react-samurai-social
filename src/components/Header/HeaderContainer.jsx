import React from 'react'
import {connect} from 'react-redux'
import axios from 'axios'
import s from'./Header.module.css'
import {NavLink} from 'react-router-dom'
import Header from './Header'
import {setAuthUserData} from '../../Redux/reducers/authReducer'

class HeaderContainer extends React.Component{
  componentDidMount() {
    axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {
      withCredentials: true,
    })
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
