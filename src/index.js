import state, {addPost, subscribe, updatePostText} from './Redux/state'
import ReactDOM from 'react-dom'
import App from './App'
import React from 'react'

const rerenderEntireTree = (state) => {
  ReactDOM.render(
    <App
      state={state}
      addPost={addPost}
      updatePostText={updatePostText}
    />,
    document.getElementById('root')
  )
}

rerenderEntireTree(state)

subscribe(rerenderEntireTree)
