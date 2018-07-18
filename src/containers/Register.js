import React from 'react';

import RegisterForm from '../components/RegisterForm';
import * as userServices from '../services/userServices';

let Register = () => {
  let submit = values =>{
    userServices
      .userRegister(values)
      .then(res => res);
  };

  return <RegisterForm onSubmit={submit}/>;
};

export default Register;
