import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import './index.scss';
//comments
import NavBar from './components/NavBar';
import ProtectedRoute from './components/ProtectedRoute';
// adicionar Footer e Exercise mais tarde

import Error from './views/Error';
import SignIn from './views/Authentication/SignIn';
import SignUp from './views/Authentication/SignUp';
import Home from './views/Home';
import Profile from './views/Profile';
import ProfileEdit from './views/ProfileEdit';
import HeroWodSingle from './views/HeroWodSingle';
import MovementList from './views/MovementList';
import MovementSingle from './views/MovementSingle';
import MyWods from './views/MyWods';
import NewMovement from './views/NewMovement';
import HeroWod from './views/HeroWod';

import { loadUserInformation } from './services/dataAuthentication';
import NewWod from './views/NewWod';

class App extends Component {
  constructor() {
    super();
    this.state = {
      loaded: false,
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
  
        {this.state.loaded && (
          <BrowserRouter>
            <NavBar user={this.state.user} updateUserInformation={this.updateUserInformation} />
            <Switch>
              <Route path="/" exact component={Home} />
              <ProtectedRoute
                exact
                authorized={this.state.user}
                path="/mywods"
                redirect={'/sign-in'}
                render={props => <MyWods user={this.state.user} {...props} />}
              />
              <ProtectedRoute
                exact
                authorized={this.state.user}
                path="/mywods/createWod"
                redirect={'/sign-in'}
                render={props => <NewWod user={this.state.user} {...props} />}
              />
              {/* <Route path="/mywods/createWod" exact component={NewWod} /> */}
              <Route path="/herowod" exact component={HeroWod} />
              <Route path="/herowod/:id" exact component={HeroWodSingle} />
              <Route path="/movement" exact component={MovementList} />
              <Route path="/movement/create" exact component={NewMovement} />
              <Route path="/movement/:id" exact component={MovementSingle} />
             

              <ProtectedRoute
                path="/sign-up"
                authorized={!this.state.user}
                redirect={'/'}
                render={props => (
                  <SignUp {...props} updateUserInformation={this.updateUserInformation} />
                )}
              />
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
                path="/profile/edit"
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
              <Route path="/error" component={Error} />
              <Redirect to="/error" />
            </Switch>
          </BrowserRouter>
        )}
 
      </div>
    );
  }
}

export default App;
