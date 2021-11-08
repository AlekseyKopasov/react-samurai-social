import React from 'react'
import Profile from './Profile'
import {connect} from 'react-redux'
import {getProfileTC} from '../../Redux/reducers/profileReducer'
import {withRouter} from 'react-router-dom'

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId

    if (!userId) {
      userId = 1
    }

    this.props.getProfileTC(userId)
  }

  render() {
    return (
      <Profile {...this.props} profile={this.props.profile} />
    )
  }
}

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile
})

const withUrlDataComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {getProfileTC})(withUrlDataComponent)
