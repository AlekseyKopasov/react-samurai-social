import MyPosts from './MyPosts'
import {addPost, updateNewPostText} from '../../../Redux/reducers/profileReducer'
import {connect} from 'react-redux'

const mapStateToProps = state => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
  }
}

const MyPostsContainer = connect(mapStateToProps,
  {addPost, updateNewPostText})(MyPosts)

export default MyPostsContainer
