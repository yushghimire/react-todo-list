import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import DeleteButton from '../components/DeleteButton';
import * as todoServices from '../services/todoService';
import * as todoActions from '../actions/todoActionCreators';

let Delete = props => {
  let handleDelete = () => {
    let todos = props.state.todoReducer.todos;
    let id = props.todo.id;

    let index = todos.findIndex(x => x.id === id);

    todoServices
      .todoDelete(id)
      .then(() => props.deleteTodo(index))
      .then(() => todoServices.todoGet())
      .then(response => {
        props.fetchedTodo(response);
      });
  };

  return <DeleteButton onDelete={handleDelete} />;
};

let mapStateToProps = state => {
  return { state };
};

let mapDispatchToProps = dispatch => bindActionCreators(todoActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Delete);
