import React from 'react'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import MyPostsContainer from './MyPosts/MyPostsContainer'
import { ProfileType } from '../../types/types'

type PropsType = {
  profile: ProfileType | null
  isOwner: boolean
  savePhoto: (file: File) => void
  saveProfile: (profile: ProfileType) => Promise<any>
  status: string
  updateStatus: (status: string) => void
}

const Profile: React.FC<PropsType> = (props) => {
  return (
    <div>
      <ProfileInfo
        isOwner={ props.isOwner }
        profile={ props.profile }
        status={ props.status }
        savePhoto={ props.savePhoto }
        updateStatus={ props.updateStatus }
        saveProfile={ props.saveProfile }
      />
      <MyPostsContainer/>
    </div>
  )
}

export default Profile
