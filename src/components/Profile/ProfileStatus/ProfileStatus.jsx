import React from 'react'
import {updateStatus} from '../../../Redux/reducers/profileReducer'

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    status: this.props.status
  }

  activateEditMode = () => {
    this.setState({
      editMode: true,
    })
  }

  deactivateEditMode = () => {
    this.setState({
      editMode: false
    })
    this.props.updateStatus(this.state.status)
  }

  onStatusChange = (evt) => {
    this.setState({
      status: evt.currentTarget.value
    })
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status
      })
    }
  }

  render() {
    return (
      <div>
        {this.state.editMode
          ? <div>
              <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode} type="text" value={this.state.status || ''}/>
            </div>
          : <div>
              <p onDoubleClick={this.activateEditMode}>Status: {this.props.status ? this.props.status : "Before is empty"}</p>
            </div>
        }
      </div>
    )
  }
}

export default ProfileStatus
