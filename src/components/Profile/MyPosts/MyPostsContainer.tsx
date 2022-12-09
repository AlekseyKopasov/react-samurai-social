import MyPosts, { DispatchPropsType, MapPropsType } from './MyPosts'
import { actions } from '../../../redux/reducers/profileReducer'
import { connect } from 'react-redux'
import { AppStateType } from '../../../redux/redux-store'

const mapStateToProps = (state: AppStateType) => {
  return {
    posts: state.profilePage.posts,
  } as MapPropsType
}

const MyPostsContainer = connect<MapPropsType, DispatchPropsType, {}, AppStateType>(mapStateToProps,
  { addPost: actions.addPost })(MyPosts)

export default MyPostsContainer
