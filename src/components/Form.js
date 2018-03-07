import React from 'react';
import { reduxForm, Field } from "redux-form";

export function Form(props) {
  function onSubmit(values) {
    console.log(values);
  }
  return <div>
      <form>
        <label htmlFor="tracking">Tracking Number</label>
        <Field name="tracking" component="input" type="text"/>
        <label htmlFor="complaint">What is your issue</label>
        <Field component="select" name="complaint" id="complaint-reason">
          <option value="no-arrival">My Delivery Hasn't Arrived</option>
          <option value="wrong-item">The wrong item was delivered</option>
          <option value="part-missing">Part of my order was missing</option>
          <option value="damaged">Some of my order was damaged</option>
          <option value="other">Other (give details below)</option>
        </Field>
        <label htmlFor="details">Give more details</label>
        <Field component="textarea" name="details" id="complaint-details" cols="30" rows="10"></Field>
        <input type="submit"></input>
      </form>
    </div>;
}

export default reduxForm({
  form: 'delivery-complaint'
})(Form);