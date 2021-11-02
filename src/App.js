import React from 'react'
import './App.css';
import ProfileContainer from './components/Profile/ProfileContainer'
import Sidebar from './components/Sidebar/Sidebar'
import {BrowserRouter, Route} from 'react-router-dom'
import DialogsContainer from './components/Dialogs/DialogsContainer'
import UsersContainer from './components/Users/UsersContainer'
import HeaderContainer from './components/Header/HeaderContainer'

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <HeaderContainer/>
        <Sidebar/>
        <div className="app-wrapper-content">
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
