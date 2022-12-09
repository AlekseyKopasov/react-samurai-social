import React, { ComponentType } from 'react'
import { BrowserRouter, Route, withRouter, Switch, Redirect } from 'react-router-dom'
import { connect, Provider } from 'react-redux'
import { compose } from 'redux'
import { initializeApp } from './redux/reducers/appReducer'

import './assets/styles/style.scss'

import Sidebar from './components/Sidebar/Sidebar'
import Preloader from './components/common/Preloader/Preloader'
import HeaderContainer from './components/Header/HeaderContainer'
import store, { AppStateType } from './redux/redux-store'
import withSuspense from './hoc/withSuspense'

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'))
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'))
const UsersContainer = React.lazy(() => import( './components/Users/UsersContainer'))
const LoginPage = React.lazy(() => import('./components/LoginPage/LoginPage'))

type MapPropsType = ReturnType<typeof mapStateToProps>
type DispatchPropsType = {
  initializeApp: () => void
}

const SuspendedUsers = withSuspense(UsersContainer)
const SuspendedDialogs = withSuspense(DialogsContainer)
const SuspendedProfile = withSuspense(ProfileContainer)
const SuspendedLogin = withSuspense(LoginPage)

class App extends React.Component<MapPropsType & DispatchPropsType> {
  catchAllUnhandledErrors = (e: PromiseRejectionEvent) => {
    console.error('Some error occurred!')
  }

  componentDidMount() {
    this.props.initializeApp()
    window.addEventListener('unhandledrejection', this.catchAllUnhandledErrors)
  }

  componentWillUnmount() {
    window.removeEventListener('unhandledrejection', this.catchAllUnhandledErrors)
  }

  render() {
    if (!this.props.initialized) {
      <Preloader/>
    }

    return (
      <BrowserRouter basename={ process.env.PUBLIC_URL }>
        <div className="app">
          <HeaderContainer/>
          <div className="app__content">
            <Sidebar/>
            <Switch>
              <Redirect exact from="/" to="/profile"/>
              <Route path="/dialogs"
                     render={ () => <SuspendedDialogs /> }/>
              <Route path="/profile/:userId?"
                     render={ () => <SuspendedProfile /> }/>
              <Route path="/users"
                     render={ () => <SuspendedUsers pageTitle={'Самураи'} /> }/>
              <Route path="/login"
                     render={ () => <SuspendedLogin /> }/>
              <Route path="*"
                     render={ () => <div>404 page</div> }/>
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    )
  }
}

const mapStateToProps = (state: AppStateType) => ({
  initialized: state.app.initialized,
})

const AppContainer = compose<ComponentType>(
  withRouter,
  connect(mapStateToProps, { initializeApp }),
)(App)

const SamuraiJSApp: React.FC = () => {
  return <BrowserRouter>
    <Provider store={ store }>
      <AppContainer/>
    </Provider>
  </BrowserRouter>
}

export default SamuraiJSApp
