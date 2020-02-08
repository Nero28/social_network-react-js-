import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Header/Dialogs';
import Music from './components/Music/Header/Music';
import News from './components/News/Header/News';
import { Route } from 'react-router-dom';
import Settings from './components/Settings/Header/Setiings';
import Friends from './components/Navbar/Friends/Friends';




const App = (props) => {

  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <div className='app-wrapper-content'>
        <Route path='/dialogs'
          render={() => <Dialogs  store={props.store}/>} />
        <Route path='/profile'
          render={() => <Profile profilePage={props.state.profilePage}
                                 dispatch={props.dispatch} />} />
        <Route path='/news' component={News} />
        <Route path='/music' component={Music} />
        <Route path='/settings' component={Settings} />
        <Route path='/friends'
          render={() => <Friends state={props.state.friendsPage} />} />
      </div>
    </div>
  );
}

export default App;
