import React from 'react';
import { Field, reduxForm } from 'redux-form';

let AddForm = props => {
  let mapTags = () => {
    return props.tags.map((tag, index) => (
      <label key={index}>
        <Field
          name={`tags[${tag.tagName}]`}
          id={tag.id}
          component="input"
          type="checkbox"
        />
        {tag.tagName}
        <br />
      </label>
    ));
  };

  return (
    <div className="add-form">
      <h2>Add Todo</h2>
      <form onSubmit={props.handleSubmit}>
        <label>
          Todo:
          <Field
            className="add-todo"
            name="todoName"
            component="input"
            type="text"
          />
        </label>
        <br />
        <label htmlFor="tags"> Tags </label>
        <br />
        {mapTags()}
        <br />
        <button className="add-button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

AddForm = reduxForm({
  form: 'add'
})(AddForm);

export default AddForm;
