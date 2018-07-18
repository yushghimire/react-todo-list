import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import EditButton from '../components/EditButton';
import * as todoActions from '../actions/todoActionCreators';

let Edit = props => {
  let handleClick = () => {
    props.handleEditChange(props.todo.name);

    return props.showEditBlock(props.todo.id);
  };

  return <EditButton onClick={handleClick} />;
};

let mapStateToProps = state => ({ state });

let mapDispatchToProps = dispatch => bindActionCreators(todoActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Edit);
