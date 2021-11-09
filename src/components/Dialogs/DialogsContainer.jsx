import {sendMessageCreator, updateNewMessageCreator} from '../../Redux/reducers/messagesReducer'
import Dialogs from './Dialogs'
import {compose} from 'redux'
import {connect} from 'react-redux'
import {withAuthRedirect} from '../../hoc/withAuthRedirect'

const mapStateToProps = (state) => {
  return {
    messagesPage: state.messagesPage,
  }
}

export default compose(
  withAuthRedirect,
  connect(mapStateToProps,{updateNewMessageCreator, sendMessageCreator}),
)(Dialogs)
