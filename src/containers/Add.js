import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import AddFrom from '../components/AddFrom';
import * as todoServices from '../services/todoService';
import * as todoActions from '../actions/todoActionCreators';

let Add = props => {
  let submit = values => {
    let tags = [];

    if (values.tags) {
      Object.keys(values.tags).forEach(key => {
        return props.state.tags.forEach(state => {
          if (state.tagName === key) {
            tags.push(state.id);
          }
          return tags;
        });
      });
    }

    let data = { ...values, tags: tags };

    todoServices
      .todoPost(data)
      .then(() => todoServices.todoGet(props.state.pagination.page))
      .then(response => {
        props.fetchedTodo(response);
      })
      .catch(err => err);
  };

  return <AddFrom tags={props.state.tags} onSubmit={submit} />;
};

let mapStateToProps = state => {
  return { state: state.todoReducer };
};

let mapDispatchToProps = dispatch => {
  return bindActionCreators(todoActions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Add);
