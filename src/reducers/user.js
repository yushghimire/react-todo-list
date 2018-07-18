const INITIAL_STATE = {
  email: '',
  isAuthenticated: localStorage.getItem('isAuth')
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        email: action.email,
        isAuthenticated: 'true'
      };

    case 'LOGOUT':
      return {
        ...state,
        email: '',
        isAuthenticated: 'false'
      };

    default:
      return state;
  }
};

export default userReducer;
