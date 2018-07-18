const INITIAL_STATE = {
  editFlag: false,
  editIndex: 0,
  newTodo: ''
};

const editReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'EDIT_START':
      return { ...state, editFlag: true, editIndex: action.editIndex };

    case 'EDIT_END':
      return { ...state, editFlag: false };

    case 'EDITING':
      return { ...state, newTodo: action.newTodo };

    default:
      return state;
  }
};

export default editReducer;
