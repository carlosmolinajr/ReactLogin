import './css/App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import React, { useState, useEffect} from 'react';
import Profile from './Profile'
import Register from './Register'
import VerifyEmail from './VerifyEmail';
import Login from './Login'
import Navbar from './navbar';
import {AuthProvider} from './AuthContext'
import {auth} from './firebase'
import {onAuthStateChanged} from 'firebase/auth'
import PrivateRoute from './PrivateRoute'
import Home from './Home'
import Space from './Space'
import Dashboard from './components/Dashboard'
import Preferences from './components/Preferences'
import useToken from './components/useToken';
import axios from 'axios';



function App() {

  const [currentUser, setCurrentUser] = useState(null)
  const [timeActive, setTimeActive] = useState(false)
  const [token, setToken] = useState();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user)
    })
  }, []);

  // if(!token) {
  //   return <Login setToken={setToken} />
  // }


  return (
    <Router>
      <AuthProvider value={{currentUser, timeActive, setTimeActive}}>
      <Switch>
        <PrivateRoute exact path="/" component={Profile} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path='/verify-email' component={VerifyEmail} />
        <Route exact path='/navbar' component={Navbar}/>
        <Route exact path='/Home' component={Home} />
        <Route exact path='/Space' component={Space} />
        <Route exact path='/Dashboard' component={Dashboard} />
        <Route exact path='/Preferences' component={Preferences} />
      </Switch>
      </AuthProvider>
    </Router>
    );
}
export default App;
