import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Footer from './components/layout/Footer';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Alert from './components/layout/Alert';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';
import PrivateRoute from './components/routing/PrivateRoute';
import Dashboard from './components/dashboard/Dashboard';
import Profiles from './components/profiles/Profiles';

//Redux
import { Provider } from 'react-redux';
import store from './store';
import Adverts from './components/adverts/Adverts';
import SingleAdvert from './components/adverts/SingleAdvert';
import CreateAdvert from './components/adverts/CreateAdvert';
import Profile from './components/profiles/Profile';
import NotFound from './components/layout/NotFound';
import DashboardActions from './components/dashboard/DashboardActions';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}
const App = () => {
  useEffect(() => {
    // check for token in LS
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar></Navbar>

          <Alert></Alert>
          <Switch>
            <Route exact path='/' component={Landing}></Route>
            <Route exact path='/register' component={Register}></Route>
            <Route exact path='/login' component={Login}></Route>
            <Route exact path='/companies' component={Profiles}></Route>
            <PrivateRoute
              exact
              path='/dashboard'
              component={Dashboard}
            ></PrivateRoute>
            <PrivateRoute
              exact
              path='/dashboard/edit-profile'
              component={DashboardActions}
            ></PrivateRoute>
            <PrivateRoute
              exact
              path='/adverts'
              component={Adverts}
            ></PrivateRoute>
            <PrivateRoute
              exact
              path='/adverts/advert/:advertId'
              component={SingleAdvert}
            ></PrivateRoute>
            <PrivateRoute
              exact
              path='/create-advert'
              component={CreateAdvert}
            ></PrivateRoute>
            <PrivateRoute
              exact
              path='/companies/company/:userId'
              component={Profile}
            ></PrivateRoute>
            <Route component={NotFound}></Route>
          </Switch>
          <Footer></Footer>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
