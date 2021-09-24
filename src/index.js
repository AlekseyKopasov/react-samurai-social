import store from './Redux/redux-store'
import ReactDOM from 'react-dom'
import App from './App'
import React from 'react'

const rerenderEntireTree = (state) => {
  ReactDOM.render(
    <App
      state={state}
      dispatch={store.dispatch.bind(store)}
      store={store}
    />,
    document.getElementById('root')
  )
}

rerenderEntireTree(store.getState())

store.subscribe(() => {
  rerenderEntireTree(store.getState())
})
