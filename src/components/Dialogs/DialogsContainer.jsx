import {sendMessageCreator, updateNewMessageCreator} from '../../Redux/reducers/messagesReducer'
import Dialogs from './Dialogs'
import {connect} from 'react-redux'
import {withAuthRedirect} from '../../hoc/withAuthRedirect'

const mapStateToProps = (state) => {
  return {
    messagesPage: state.messagesPage,
  }
}

const authRedirectComponent = withAuthRedirect(Dialogs)

const DialogsContainer = connect(mapStateToProps,
  {
    updateNewMessageCreator,
    sendMessageCreator
  })(authRedirectComponent)

export default DialogsContainer
