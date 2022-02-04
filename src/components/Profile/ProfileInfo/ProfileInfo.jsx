import React from 'react'
import s from './ProfileInfo.module.css'
import Preloader from '../../common/Preloader/Preloader'
import UserLogoDefault from '../../common/UserLogoDefault/UserLogoDefault'
import ProfileStatus from '../ProfileStatus/ProfileStatus'
import {updateStatus} from '../../../Redux/reducers/profileReducer'

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  }
  return (
    <div>
      <div className={s.profileInfo}>
        {props.profile.photos.small !== null
          ? <img src={props.profile.photos.small} alt={props.profile.name}/>
          : <UserLogoDefault/>
        }
      </div>

      <div className={s.descriptionBlock}>
        <p>{props.profile.fullName}</p>
        <ProfileStatus
          status={props.status}
          updateStatus={props.updateStatus}
        />
      </div>

    </div>
  )
}

export default ProfileInfo
