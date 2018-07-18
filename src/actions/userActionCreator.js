export const loginSucess = email => ({
  type: 'LOGIN_SUCCESS',
  email
});

export const logout = () => ({
  type: 'LOGOUT'
});
