import React, { Suspense } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Music from './components/Music/Header/Music';
import News from './components/News/Header/News';
import { Route, withRouter, Switch, Redirect } from 'react-router-dom';
import Settings from './components/Settings/Header/Setiings';
import Friends from './components/Navbar/Friends/Friends';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginPage from './components/Login/Login';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { initialazeApp } from './redux/app-reducer';
import Preloader from './components/common/Preloader/Preloader';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/redux-store';
import WithSuspense from './hoc/WithSuspense';


const DialogsContainer = React.lazy(() => import('./components/Dialogs/Header/DialogsContainer'));


class App extends React.Component {
  catchAllUnhandledErrors = (reason, promise) => {
    alert('Some error');
  }


  componentDidMount() {
    this.props.initialazeApp();
    window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors);
  }


  componentWillUnmount() {
    window.removeEventListener("unhandledrejection", this.catchAllUnhandledErrors);
  }


  render() {
    if (!this.props.initialazed) {
      return <Preloader />
    }

    return (
      <div className='app-wrapper'>
        <HeaderContainer />
        <Navbar />
        <div className='app-wrapper-content'>
          <Switch >
            <Route exact path='/'
              render={() => <Redirect to={'/profile'} />} />
            <Route path='/dialogs'
              render={WithSuspense(DialogsContainer)} />
            <Route path='/profile/:userId?'
              render={() => <ProfileContainer />} />
            <Route path='/users'
              render={() => <UsersContainer />} />
            <Route path='/news' component={News} />
            <Route path='/music' component={Music} />
            <Route path='/settings' component={Settings} />
            <Route path='/friends'
              render={() => <Friends />} />
            <Route path='/login'
              render={() => <LoginPage />} />
            <Route path='*'
              render={() => <div>404 NOT FOUND</div>} />
          </Switch>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialazed: state.app.initialazed
});


const AppContainer = compose(
  withRouter,
  connect(mapStateToProps, { initialazeApp }))(App);

const SamuraiJSApp = (props) => {
  return <BrowserRouter>
    <Provider store={store}>
      <AppContainer />
    </Provider>
  </BrowserRouter>
};

export default SamuraiJSApp;