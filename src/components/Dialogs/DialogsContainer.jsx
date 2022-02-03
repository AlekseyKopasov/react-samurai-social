import {sendMessageCreator, updateNewMessageCreator} from '../../Redux/reducers/dialogsReducer'
import Dialogs from './Dialogs'
import {compose} from 'redux'
import {connect} from 'react-redux'
import {withAuthRedirect} from '../../hoc/withAuthRedirect'

const mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  }
}

export default compose(
  withAuthRedirect,
  connect(mapStateToProps,{updateNewMessageCreator, sendMessageCreator}),
)(Dialogs)
