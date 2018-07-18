import React from 'react';

let DeleteButton = props => (
  <button className="delete-button" onClick={props.onDelete}></button>
);

export default DeleteButton;
