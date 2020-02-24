import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Music from './components/Music/Header/Music';
import News from './components/News/Header/News';
import { Route } from 'react-router-dom';
import Settings from './components/Settings/Header/Setiings';
import Friends from './components/Navbar/Friends/Friends';
import DialogsContainer from './components/Dialogs/Header/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginPage from './components/Login/Login';




const App = (props) => {

  return (
    <div className='app-wrapper'>
      <HeaderContainer />
      <Navbar />
      <div className='app-wrapper-content'>
        <Route path='/dialogs'
          render={() => <DialogsContainer store={props.store} />} />
        <Route path='/profile/:userId?'
          render={() => <ProfileContainer store={props.store} />} />
        <Route path='/users'
          render={() => <UsersContainer store={props.store} />} />
        <Route path='/news' component={News} />
        <Route path='/music' component={Music} />
        <Route path='/settings' component={Settings} />
        <Route path='/friends'
          render={() => <Friends state={props.state.sidebar} />} />
        <Route path='/login'
          render={() => <LoginPage />} />
      </div>
    </div>
  );
}

export default App;
