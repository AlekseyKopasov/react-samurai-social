import React from 'react'
import Profile from './Profile'
import {compose} from 'redux'
import {connect} from 'react-redux'
import {getUserProfile, getStatus, updateStatus} from '../../Redux/reducers/profileReducer'
import {withRouter} from 'react-router-dom'
import {withAuthRedirect} from '../../hoc/withAuthRedirect'

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId

    if (!userId) {
      userId = 20396
    }

    this.props.getUserProfile(userId)
    this.props.getStatus(userId)
  }

  render() {
    return <Profile
      {...this.props}
      profile={this.props.profile}
      status={this.props.status}
      updateStatus={updateStatus}
    />
  }
}

const mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    status: state.profilePage.status
  }
}

export default compose(
  connect(mapStateToProps,
    {getUserProfile ,getStatus, updateStatus}),
  withRouter,
  withAuthRedirect
)(ProfileContainer)
