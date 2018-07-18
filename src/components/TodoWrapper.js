import React from 'react';

import TodoList from './TodoList';
import ButtonHolder from './ButtonHolder';

export default props => {
  let tagList;

  if (props.todo.tags) {
    tagList = props.todo.tags.map((tag, index) => (
      <TodoList key={index} tag={tag} />
    ));
  } else {
    tagList = null;
  }

  return (
    <div className="todo-wrapper clearfix">
      <div className="todo-holder">
        <h2>{props.todo.name}</h2>
      </div>
      <ButtonHolder todo={props.todo} />
      <h3>Tags:</h3>
      <ul className="todo-list">{tagList}</ul>
    </div>
  );
};
