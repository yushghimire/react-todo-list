import React from 'react';

let EditForm = props => (
  <div className="edit clearfix">
    <span onClick={props.onClose}>X</span>
    <h2>Edit Todo</h2>
    <form onSubmit={props.onSubmit}>
      <label>
        Name
        <input type="text" value={props.data} onChange={props.onChange} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  </div>
);

export default EditForm;
