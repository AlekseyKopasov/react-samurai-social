import React from 'react'
import Profile from './Profile'
import {connect} from 'react-redux'
import {getProfileTC} from '../../Redux/reducers/profileReducer'
import {withRouter} from 'react-router-dom'
import {Redirect} from 'react-router-dom'
import {withAuthRedirect} from '../../hoc/withAuthRedirect'

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId

    if (!userId) {
      userId = 1
    }

    this.props.getProfileTC(userId)
  }

  render() {
    if (!this.props.isAuth)  return <Redirect to={'/login'} />

    return <Profile {...this.props} profile={this.props.profile} />
  }
}

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
})

let authRedirectComponent = withAuthRedirect(ProfileContainer)

const withUrlDataComponent = withRouter(authRedirectComponent)

export default connect(mapStateToProps, {getProfileTC})(withUrlDataComponent)
