import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import SearchBox from '../components/SearchBox';
import * as todoServices from '../services/todoService';
import * as todoActions from '../actions/todoActionCreators';

const Search = props => {
  let handleChange = e => {
    const FIRST_PAGE = 1;

    props.searchTodo(e.target.value);

    todoServices.todoSearch(e.target.value, FIRST_PAGE).then(response => {
      return response ? props.fetchedTodo(response) : null;
    });
  };

  return (
    <SearchBox
      searchKey={props.state.todoReducer.searchKey}
      onChange={handleChange}
    />
  );
};

let mapStateToProps = state => ({
  state
});

let mapDispatchToProps = dispatch => {
  return bindActionCreators(todoActions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
