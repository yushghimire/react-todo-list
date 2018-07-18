export const fetchTodo = () => ({
  type: 'FETCH_TODO'
});

export const fetchedTodo = response => ({
  type: 'FETCHED_TODO',
  payload: response.data.data,
  pageload: response.data.metadata
});

export const fetchTodoError = err => ({
  type: 'FETCH_TODO_ERROR',
  payload: err
});

export const fetchTags = data => ({
  type: 'FETCHED_TAGS',
  payload: data
});

export const addTodo = newTodo => {
  return {
    type: 'ADD_TODO',
    payload: newTodo
  };
};

export const deleteTodo = index => ({
  type: 'DELETE_TODO',
  index
});

export const searchTodo = searchKey => ({
  type: 'SEARCH',
  searchKey
});

export const showEditBlock = editIndex => ({
  type: 'EDIT_START',
  editFlag: true,
  editIndex
});

export const hideEditBlock = () => ({
  type: 'EDIT_END',
  editFlag: false,
  editIndex: 0
});

export const handleEditChange = newTodo => ({
  type: 'EDITING',
  newTodo
});

export const editTodo = (id, index, newTodo) => ({
  type: 'EDIT_TODO',
  newTodo: { id: id, name: newTodo },
  index
});
