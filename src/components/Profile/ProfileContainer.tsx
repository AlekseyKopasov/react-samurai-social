import React from 'react'
import Profile from './Profile'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { getStatus, getUserProfile, savePhoto, saveProfile, updateStatus } from '../../redux/reducers/profileReducer'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import { AppStateType } from '../../redux/redux-store'
import { ProfileType } from '../../types/types'

type MapStatePropsType = ReturnType<typeof mapStateToProps>

type MapDispatchPropsType = {
  getUserProfile: (userId: number) => void
  getStatus: (userId: number) => void
  updateStatus: (newStatus: string) => void
  savePhoto: (file: File) => void
  saveProfile: (profile: ProfileType) => Promise<any>

}

type PathParamsType = {
  userId: string
}

type PropsType = RouteComponentProps<PathParamsType>

type ProfilePropsType = MapStatePropsType & MapDispatchPropsType & PropsType

class ProfileContainer extends React.Component<ProfilePropsType> {
  refreshProfile() {
    let userId: number | null = +this.props.match.params.userId

    if (!userId) {
      userId = this.props.authorizedUserId

      if (!userId) {
        this.props.history.push('/login')
      }
    }
    this.props.getUserProfile(userId)
    this.props.getStatus(userId)
  }

  componentDidMount() {
    this.refreshProfile()
  }

  componentDidUpdate(prevProps: ProfilePropsType, prevState: ProfilePropsType) {
    if (this.props.match.params.userId !== prevProps.match.params.userId) {
      this.refreshProfile()
    }
  }

  render() {
    return <Profile
      { ...this.props }
      isOwner={ !this.props.match.params.userId }
      profile={ this.props.profile }
      status={ this.props.status }
      updateStatus={ this.props.updateStatus }
      savePhoto={ this.props.savePhoto }
    />
  }
}

const mapStateToProps = (state: AppStateType) => {
  return {
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth,
  }
}

export default compose<React.ComponentType>(
  connect(mapStateToProps,
    { getUserProfile, getStatus, updateStatus, savePhoto, saveProfile }),
  withRouter,
  withAuthRedirect,
)(ProfileContainer)
