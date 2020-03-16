import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import './index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
//comments
import NavBar from './components/NavBar';
import ProtectedRoute from './components/ProtectedRoute';
// adicionar Footer e Exercise mais tarde

import ErrorView from './views/Error';
import SignIn from './views/Authentication/SignIn';
import SignUp from './views/Authentication/SignUp';
import Home from './views/Home';
import Profile from './views/Profile';
import ProfileEdit from './views/ProfileEdit';
import TimerSingle from './views/TimerSingle';
import TimerList from './views/TimerList';
import WorkoutDay from './views/WorkoutDay';
import WorkoutList from './views/WorkoutsList';

import { loadUserInformation } from './services/dataAuthentication';

class App extends Component {
  constructor() {
    super();
    this.state = {
      //quando autenticação feita, mudar loaded para FALSE
      loaded: true,
      //...
      user: null
    };
    this.updateUserInformation = this.updateUserInformation.bind(this);
  }

  componentDidMount() {
    loadUserInformation()
      .then(user => {
        this.updateUserInformation(user);
        this.setState({
          loaded: true
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  updateUserInformation(user) {
    this.setState({
      user
    });
  }
  render() {
    return (
      <div>
        {(this.state.loaded && (
          <BrowserRouter>
            <NavBar user={this.state.user} updateUserInformation={this.updateUserInformation} />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/timers" exact component={TimerList} />
              <Route path="/timers/single" component={TimerSingle} />
              <Route path="/exercise" exact component={WorkoutDay} />
              <Route path="/exercise/list" exact component={WorkoutList} />
              <Route path="/sign-up" component={SignUp} />
              <ProtectedRoute
                path="/sign-in"
                authorized={!this.state.user}
                redirect={'/'}
                render={props => (
                  <SignIn {...props} updateUserInformation={this.updateUserInformation} />
                )}
              />
              <ProtectedRoute
                authorized={this.state.user}
                redirect="/sign-in"
                path="/private/edit"
                render={props => (
                  <ProfileEdit
                    updateUserInformation={this.updateUserInformation}
                    user={this.state.user}
                    {...props}
                  />
                )}
              />
              <ProtectedRoute
                authorized={this.state.user}
                redirect="/sign-in"
                path="/profile"
                render={props => <Profile user={this.state.user} {...props} />}
              />
            </Switch>
          </BrowserRouter>
        )) || <span>Loadin...</span>}
      </div>
    );
  }
}

export default App;
