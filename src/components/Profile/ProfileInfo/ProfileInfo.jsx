import React from 'react'
import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
  return (
    <div>
      <div className={s.profileInfo}>
        <img src="https://pix10.agoda.net/hotelImages/301716/-1/fe9724d8fb4da3dd4590353bd771a276.jpg?s=1024x768" alt=""/>
      </div>

      <div className={s.descriptionBlock}>
        ava + descr
      </div>
    </div>
  )
}

export default ProfileInfo
