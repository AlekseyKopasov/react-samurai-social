import React, { ChangeEvent } from 'react'
import { updateStatus } from '../../../redux/reducers/profileReducer'

type PropsType = {
  status: string
  updateStatus: (newStatus: string) => void
}

type StateType = {
  editMode: boolean
  status: string | null
}

class ProfileStatus extends React.Component<PropsType, StateType> {
  state = {
    editMode: false,
    status: this.props.status,
  }

  activateEditMode = () => {
    this.setState({
      editMode: true,
    })
  }

  deactivateEditMode = () => {
    this.setState({
      editMode: false,
    })
    this.props.updateStatus(this.state.status)
  }

  onStatusChange = (evt: ChangeEvent<HTMLInputElement>) => {
    this.setState({
      status: evt.currentTarget.value,
    })
  }

  componentDidUpdate(prevProps: PropsType, prevState: StateType) {
    if (prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status,
      })
    }
  }

  render() {
    return (
      <div>
        { !this.state.editMode
          ? <div>
            <p onDoubleClick={ this.activateEditMode }>
              Status: { this.props.status ? this.props.status : 'Before is empty' }
            </p>
          </div>
          : <div>
            <input
              onChange={ this.onStatusChange }
              autoFocus={ true }
              onBlur={ this.deactivateEditMode }
              type="text"
              value={ this.state.status || '' }
            />
          </div>
        }
      </div>
    )
  }
}

export default ProfileStatus
