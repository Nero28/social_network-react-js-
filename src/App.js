import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Music from './components/Music/Header/Music';
import News from './components/News/Header/News';
import { Route } from 'react-router-dom';
import Settings from './components/Settings/Header/Setiings';
import Friends from './components/Navbar/Friends/Friends';
import DialogsContainer from './components/Dialogs/Header/DialogsContainer';

import UsersContainer from './components/Users/UsersContainer';




const App = (props) => {

  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <div className='app-wrapper-content'>
        <Route path='/dialogs'
          render={() => <DialogsContainer store={props.store}/>} />
        <Route path='/profile'
          render={() => <Profile  store={props.store}/>} />
          <Route path='/users'
          render={() => <UsersContainer  store={props.store}/>} />
        <Route path='/news' component={News} />
        <Route path='/music' component={Music} />
        <Route path='/settings' component={Settings} />
        <Route path='/friends'
          render={() => <Friends state={props.state.sidebar} />} />
      </div>
    </div>
  );
}

export default App;
