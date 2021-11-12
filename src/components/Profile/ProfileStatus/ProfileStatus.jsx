import React from 'react'

const ProfileStatus = (props) => {
  return (
    <div>
      <div>
        <input type="text" value={props.status || null}/>
      </div>
      <p>
        Status: {props.status ? props.status : "Before is empty"}
      </p>
    </div>
  )
}

export default ProfileStatus
