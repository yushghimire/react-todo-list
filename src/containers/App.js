import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import AppWrapper from '../components/AppWrapper';
import * as todoService from '../services/todoService';
import * as todoActions from '../actions/todoActionCreators';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.getData = this.getData.bind(this);
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    const FIRST_PAGE = 1;

    this.props.fetchTodo();
    todoService
      .todoGet(FIRST_PAGE)
      .then(response => {
        return this.props.fetchedTodo(response);
      })
      .then(() =>
        todoService.tagsGet().then(res => {
          let { data } = res.data;

          return this.props.fetchTags(data);
        })
      )
      .catch(err => {
        this.props.fetchTodoError(err);
      });
  }

  render() {
    return <AppWrapper data={this.props.state} app={this} />;
  }
}

let mapStateToProps = state => {
  return { state };
};

let mapDispatchToProps = dispatch => {
  return bindActionCreators(todoActions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
