import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as todoService from '../services/todoService';
import * as todoActions from '../actions/todoActionCreators';

const Pagination = props => {
  let pages = [];
  let mapPages;

  let handleClick = e => {
    props.fetchTodo();

    let asyncTaskOption;

    if (!props.state.searchKey) {
      asyncTaskOption = todoService.todoGet(e.target.innerHTML);
    } else {
      asyncTaskOption = todoService.todoSearch(
        props.state.searchKey,
        e.target.innerHTML
      );
    }

    asyncTaskOption
      .then(response => {
        return props.fetchedTodo(response);
      })
      .catch(err => {
        props.fetchTodoError(err);
      });
  };

  if (props.state.pagination) {
    for (let i = 1; i <= props.state.pagination.pageCount; i++) {
      pages.push(i);
    }

    mapPages = () => {
      return pages.map((page, index) => (
        <li key={index}>
          <a onClick={handleClick}>{page}</a>
        </li>
      ));
    };
  }

  if (props.state.pagination) {
    return (
      <div>
        <ul className="pagination">{mapPages()}</ul>
      </div>
    );
  } else {
    return null;
  }
};

let mapStateToProps = state => {
  return { state: state.todoReducer };
};

let mapDispatchToProps = dispatch => {
  return bindActionCreators(todoActions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);
