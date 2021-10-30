import MyPosts from './MyPosts'
import {addPostCreator, updateNewPostTextCreator} from '../../../Redux/reducers/profileReducer'
import {connect} from 'react-redux'

const mapStateToProps = state => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
  }
}

const MyPostsContainer = connect(mapStateToProps,
  {addPostCreator, updateNewPostTextCreator})(MyPosts)

export default MyPostsContainer
