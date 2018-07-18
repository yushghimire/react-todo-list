import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Redirect } from 'react-router-dom';

import axiosService from '../services/axiosService';
import * as userActions from '../actions/userActionCreator';

let Logout = props => {
  axiosService.get('logout').then(response => {
    localStorage.setItem('isAuth', false);
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');

    props.logout();

    return response;
  });

  return <Redirect to="/login" />;
};

let mapStateToProps = state => state;
let mapDispatchToProps = dispatch => bindActionCreators(userActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Logout);
