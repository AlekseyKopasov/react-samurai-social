import MyPosts from './MyPosts'
import {addPostCreator, updateNewPostTextCreator} from '../../../Redux/reducers/profileReducer'
import {connect} from 'react-redux'

const mapStateToProps = state => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addPost() {
      dispatch(addPostCreator())
    },
    changePostText(text) {
      dispatch(updateNewPostTextCreator(text))
    },
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer
