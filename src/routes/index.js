import React from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Switch
} from 'react-router-dom';

import App from '../containers/App';
import Home from '../components/Home';
import Login from '../containers/Login';
import Logout from '../containers/Logout';
import Register from '../containers/Register';
import PrivateRoute from '../containers/PrivateRoute';

/**
 *
 * @param {*} props
 */

const Routes = props => {
  let isAuth = props.state.userReducer.isAuthenticated;
  let checkAuth = () => {
    if (isAuth === 'true') {
      return (
        <li>
          <NavLink to="/logout">Log Out</NavLink>
        </li>
      );
    } else {
      return (
        <div className="hidden-field">
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
          <li>
            <NavLink to="/register">Register</NavLink>
          </li>
        </div>
      );
    }
  };

  return (
    <Router>
      <div>
        <ul className="container">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/todolist">Todo List</NavLink>
          </li>
          {checkAuth()}
        </ul>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/logout" component={Logout} />
          <Route path="/register" component={Register} />
          <PrivateRoute path="/todolist" component={App} />
        </Switch>
      </div>
    </Router>
  );
};

let mapStateToProps = state => {
  return { state };
};

export default connect(mapStateToProps)(Routes);
