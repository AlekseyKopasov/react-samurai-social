import React, { ChangeEvent, useEffect, useState } from 'react'

type PropsType = {
  status: string
  updateStatus: (newStatus: string) => void
}

const ProfileStatusWithHooks: React.FC<PropsType> = ({ status, updateStatus }) => {
  const [ editMode, setEditMode ] = useState(false)
  const [ currentStatus, setCurrentStatus] = useState(status)

  useEffect(() => {
    setCurrentStatus(status)
  }, [ status ])

  const activateEditMode = () => {
    setEditMode(true)
  }

  const deactivateEditMode = () => {
    setEditMode(false)
    updateStatus(status)
  }

  const onStatusChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setCurrentStatus(evt.currentTarget.value)
  }

  return (
    <div>
      { editMode
        ? <div>
          <input
            autoFocus={ true }
            type="text"
            onBlur={ deactivateEditMode }
            onChange={ onStatusChange }
            value={ status }
          />
        </div>
        : <div>
          <p
            onDoubleClick={ activateEditMode }
          >
            Status: { status ? status : "Before is empty" }
          </p>
        </div>
      }
    </div>
  )
}

export default ProfileStatusWithHooks
