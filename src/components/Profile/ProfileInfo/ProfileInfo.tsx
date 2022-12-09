import React, { ChangeEvent, useState } from 'react'
import s from './ProfileInfo.module.css'
import Preloader from '../../common/Preloader/Preloader'
import UserLogoDefault from '../../common/UserLogoDefault/UserLogoDefault'
import Contact from '../../Contact/Contact'
import ProfileDataForm from './ProfileDataForm'
import { ContactsType, ProfileType } from '../../../types/types'
import ProfileStatus from '../ProfileStatus/ProfileStatus'

type PropsType = {
  profile: ProfileType | null
  isOwner: boolean
  savePhoto: (file: File) => void
  saveProfile: (profile: ProfileType) => Promise<any>
  status: string
  updateStatus: (status: string) => void
}

const ProfileInfo: React.FC<PropsType> = ({ profile, isOwner, savePhoto, saveProfile, status, updateStatus }) => {
  const [ editMode, setEditMode ] = useState(false)

  const onMainPhotoSelected = (evt: ChangeEvent<HTMLInputElement>) => {
    if (evt.target.files?.length) {
      savePhoto(evt.target.files[0])
    }
  }

  const onSubmit = (formData: ProfileType) => {
    // TODO remove then
    saveProfile(formData).then(
      () => {
        setEditMode(false)
      },
    )
  }

  if (!profile) {
    return <Preloader/>
  }

  return (
    <div>
      <div className={ s.profileInfo }>
        { profile.photos.small !== null
          ? <img src={ profile.photos.small } alt={ profile.fullName }/>
          : <UserLogoDefault/>
        }
        { isOwner && <input type="file" onChange={ onMainPhotoSelected }/> }
      </div>

      <ProfileStatus status={ status } updateStatus={ updateStatus }/>

      { editMode ?
        <ProfileDataForm
          profile = { profile }
          onSubmit={ onSubmit }
        />
        :
        <ProfileData
          goToEditMode={ () => {
            setEditMode(true)
          } }
          profile={ profile }
          isOwner={ isOwner }
        />
      }
    </div>
  )
}

type ProfileDataType = {
  profile: ProfileType
  isOwner: boolean
  goToEditMode: () => void
}

const ProfileData: React.FC<ProfileDataType> = ({ profile, isOwner, goToEditMode }) => {
  return <div className={ s.descriptionBlock }>
    { isOwner && <button onClick={ goToEditMode }> Edit profile info </button> }

    <h3>Profile info</h3>
    <ul>
      <li>about Me: { profile.aboutMe || '---' }</li>
      <li>contacts: { Object.keys(profile.contacts).map(contact => {
        return <Contact title={ contact } value={ profile.contacts[contact as keyof ContactsType] } key={ contact }/>
      }) }
      </li>
    </ul>
    <div>
      <p><b>Looking ForA Job: </b>{ profile.lookingForAJob ? 'yes' : 'no' }</p>
      <p><b>Looking For A Job Description: </b>{ profile.lookingForAJobDescription || 'no' }</p>
    </div>
  </div>
}

export default ProfileInfo
