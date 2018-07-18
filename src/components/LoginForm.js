import React from 'react';
import { Field, reduxForm } from 'redux-form';

let LoginForm = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email:</label>
        <Field name="email" component="input" type="text" />
      </div>
      <div>
        <label>Password:</label>
        <Field name="password" component="input" type="password" />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

LoginForm = reduxForm({
  form: 'login'
})(LoginForm);

export default LoginForm;
