import axiosService from './axiosService';

export const userRegister = values =>
  axiosService.post('register', {
    first_name: values.firstName,
    last_name: values.lastName,
    email: values.email,
    password: values.email
  });
