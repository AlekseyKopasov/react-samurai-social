import React from 'react'

class ProfileStatus extends React.Component{
  state = {
    editMode: false
  }

  activateEditMode = () => {
    this.setState({
      editMode: true
    })
  }

  deactivateEditMode = () => {
    this.setState({
      editMode: false
    })
  }

  render() {
    return (
      <div>
        {this.state.editMode
          ? <div>
              <input autoFocus={true} onBlur={this.deactivateEditMode} type="text" placeholder={this.props.status || null}/>
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
