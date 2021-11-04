import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'

import './assets/styles/style.scss'

import ProfileContainer from './components/Profile/ProfileContainer'
import Sidebar from './components/Sidebar/Sidebar'
import DialogsContainer from './components/Dialogs/DialogsContainer'
import UsersContainer from './components/Users/UsersContainer'
import HeaderContainer from './components/Header/HeaderContainer'

const App = () => {
  return (
    <BrowserRouter>
        <div className="app">
          <HeaderContainer/>
            <div className="app__content">
              <Sidebar/>
                <Route path="/dialogs"
                       render={() => <DialogsContainer />}
                />
                <Route path="/profile/:userId?"
                       render={() => <ProfileContainer />}/>
                <Route path="/users"
                       render={() => <UsersContainer />}/>
            </div>
        </div>
    </BrowserRouter>
  );
}

export default App;
