const INITIAL_STATE = {
  todos: [],
  tags: [],
  pagination: [],
  searchKey: '',
  isFetching: false
};

const todoReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'FETCH_TODO':
      return { ...state, isFetching: true };

    case 'FETCHED_TODO':
      return { ...state, isFetching: false, todos: action.payload, pagination: action.pageload};

    case 'FETCH_TODO_ERROR':
      return { ...state, error: action.payload };

    case 'FETCHED_TAGS':
      return { ...state, tags: action.payload };

    case 'ADD_TODO':
      return { ...state, todos: [...state.todos, action.payload]};

    case 'EDIT_TODO':
      return {
        ...state,
        todos: [
          ...state.todos.slice(0, action.index),
          action.newTodo,
          ...state.todos.slice(action.index + 1)
        ]
      };

    case 'DELETE_TODO':
      return {
        ...state,
        todos: [
          ...state.todos.slice(0, action.index),
          ...state.todos.slice(action.index + 1)
        ]
      };
    case 'SEARCH':
      return {
        ...state,
        searchKey: action.searchKey
      };

    default:
      return state;
  }
};

export default todoReducer;
