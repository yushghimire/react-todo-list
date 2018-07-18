import React from 'react';

import Add from '../containers/Add';
import Search from '../containers/Search';
import EditBlock from '../containers/EditBlock';
import Pagination from '../containers/Pagination';

import TodoWrapper from './TodoWrapper';

const AppWrapper = props => {
  let tempState = props.data;
  let tempTodos = tempState.todoReducer.todos;

  let listTodo = tempTodos.map((todo, index) => (
    <TodoWrapper key={todo.id} todo={todo} />
  ));

  return (
    <div className="wrapper">
      <h1>Todo List</h1>
      <Search />
      <Add />
      <hr />
      {listTodo}
      {props.data.editReducer.editFlag ? <EditBlock /> : null}
      <Pagination />
    </div>
  );
};

export default AppWrapper;
