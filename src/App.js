import React from 'react'
import {BrowserRouter, Route, withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {compose} from 'redux'
import {initializeApp} from './Redux/reducers/appReducer'

import './assets/styles/style.scss'

import ProfileContainer from './components/Profile/ProfileContainer'
import Sidebar from './components/Sidebar/Sidebar'
import DialogsContainer from './components/Dialogs/DialogsContainer'
import UsersContainer from './components/Users/UsersContainer'
import HeaderContainer from './components/Header/HeaderContainer'
import LoginPage from './components/LoginPage/LoginPage'
import Preloader from './components/common/Preloader/Preloader'

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp()
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }

    return (
      <BrowserRouter>
        <div className="app">
          <HeaderContainer/>
          <div className="app__content">
            <Sidebar/>
            <Route path="/dialogs"
                   render={() => <DialogsContainer />}/>
            <Route path="/profile/:userId?"
                   render={() => <ProfileContainer />}/>
            <Route path="/users"
                   render={() => <UsersContainer />}/>
            <Route path="/login"
                   render={() => <LoginPage />}/>
          </div>
        </div>
      </BrowserRouter>
    )
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

export default compose (
  withRouter,
  connect(mapStateToProps, {initializeApp})
)(App)
