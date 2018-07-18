import React from 'react';
import { Field, reduxForm } from 'redux-form';

let RegisterForm = ({handleSubmit}) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>First Name</label>
        <Field name="firstName" component="input" type="text" />

        <label>Last Name</label>
        <Field name="lastName" component="input" type="text" />

        <label>Email</label>
        <Field name="email" component="input" type="text" />

        <label>Password</label>
        <Field name="password" component="input" type="password" />

        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

RegisterForm = reduxForm({
  form: 'register'
})(RegisterForm);

export default RegisterForm;
