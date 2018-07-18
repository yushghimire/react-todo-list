import React from 'react';

import Edit from '../containers/Edit';
import Delete from '../containers/Delete';

const ButtonHolder = props => (
  <div className="button-holder">
    <Delete todo={props.todo} />
    <Edit todo={props.todo} />
  </div>
);

export default ButtonHolder;
