import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import EditForm from '../components/EditForm';
import * as todoServices from '../services/todoService';
import * as todoActions from '../actions/todoActionCreators';

let EditBlock = props => {
  let todos = props.state.todoReducer.todos;
  let id = props.state.editReducer.editIndex;

  let index = todos.findIndex(x => x.id === id);

  let handleClose = () => {
    return props.hideEditBlock();
  };

  let handleChange = e => {
    return props.handleEditChange(e.target.value);
  };

  let handleSubmit = e => {
    e.preventDefault();

    todoServices
      .todoEdit(id, props.state.editReducer.newTodo)
      .then(response => {
        return props.editTodo(id, index, props.state.editReducer.newTodo);
      })
      .then(response => props.hideEditBlock());
  };

  return (
    <EditForm
      onClose={handleClose}
      onChange={handleChange}
      onSubmit={handleSubmit}
      data={props.state.editReducer.newTodo}
    />
  );
};

let mapStateToProps = state => ({ state });

let mapDispatchToProps = dispatch => bindActionCreators(todoActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(EditBlock);
