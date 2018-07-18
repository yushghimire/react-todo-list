import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Redirect } from 'react-router-dom';

import LoginForm from '../components/LoginForm';
import axiosService from '../services/axiosService';
import * as userActions from '../actions/userActionCreator';

const Login = props => {
  let submit = values => {
    return axios
      .post('http://localhost:8848/api/login', {
        email: values.email,
        password: values.password
      })
      .then(response => {
        let { accessToken, refreshToken } = response.data.data.tokens;

        localStorage.setItem('isAuth', true);
        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('refreshToken', refreshToken);

        axiosService.defaults.headers['Authorization'] = localStorage.getItem('accessToken');

        props.loginSucess(values.email);

        return response;
      })
      .catch(err => err);
  };

  if (props.userReducer.isAuthenticated === 'true') {
    return <Redirect to="/todolist" />;
  } else {
    return <LoginForm onSubmit={submit} />;
  }
};

let mapStateToProps = state => state;
let mapDispatchToProps = dispatch => bindActionCreators(userActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Login);
