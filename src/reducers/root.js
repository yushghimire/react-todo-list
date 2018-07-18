import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import userReducer from './user';
import todoReducer from './todo';
import editReducer from './editTodo';

const rootReducer = combineReducers({
  todoReducer,
  editReducer,
  userReducer,
  form: formReducer
});

export default rootReducer;
