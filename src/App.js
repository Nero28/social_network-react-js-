import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Header/Dialogs';
import Music from './components/Music/Header/Music';
import News from './components/News/Header/News';
import { Route, BrowserRouter } from 'react-router-dom';
import Settings from './components/Settings/Header/Setiings';

const App = () => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div class='app-wrapper-content'>
          <Route path ='/dialogs'  component = {Dialogs} />
          <Route path ='/profile' component = {Profile} />
          <Route path ='/news' component = {News} />
          <Route path ='/music' component = {Music} />
          <Route path ='/settings' component = {Settings} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
