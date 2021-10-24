import {sendMessageCreator, updateNewMessageCreator} from '../../Redux/reducers/messagesReducer'
import Dialogs from './Dialogs'
import {connect} from 'react-redux'

const mapStateToProps = (state) => {
  return {
    messagesPage: state.messagesPage,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateMessageBody(text) {
      dispatch(updateNewMessageCreator(text))
    },
    sendMessage() {
      dispatch(sendMessageCreator())
    },
  }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer
