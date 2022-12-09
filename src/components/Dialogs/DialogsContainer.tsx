import { actions } from '../../redux/reducers/dialogsReducer'
import Dialogs from './Dialogs'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import { AppStateType } from '../../redux/redux-store'

const mapStateToProps = (state: AppStateType) => {
  return {
    dialogsPage: state.dialogsPage,
  }
}

export default compose<React.ComponentType>(
  withAuthRedirect,
  connect(mapStateToProps, {
    sendMessage: actions.sendMessage
  }),
)(Dialogs)
