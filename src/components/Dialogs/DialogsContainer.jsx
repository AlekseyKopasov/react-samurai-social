import {sendMessageCreator, updateNewMessageCreator} from '../../Redux/reducers/messagesReducer'
import Dialogs from './Dialogs'
import {connect} from 'react-redux'

const mapStateToProps = (state) => {
  return {
    messagesPage: state.messagesPage,
  }
}

const DialogsContainer = connect(mapStateToProps,
  {
    updateNewMessageCreator,
    sendMessageCreator
  })(Dialogs)

export default DialogsContainer
