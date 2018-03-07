import React from 'react';
import { reduxForm, Field } from 'redux-form';
import * as validators from '../validators';
import Input from './Input';

export class Form extends React.Component {
  onSubmit(values) {
    return fetch('https://us-central1-delivery-form-api.cloudfunctions.net/api/report', {
      method: 'POST',
      body: JSON.stringify(values),
      headers: { 'Content-Type': 'application/json'}
    })
    .then(res => {
      if (!res.ok) {
        console.log(res);
      }
      return;
    })
    .then(() => console.log('Submitted with values', values));
  }
  render() {
    return (
      <div>
        <form
          onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}
        >
          <Field
            name="trackingNumber"
            component={Input}
            type="text"
            validate={[validators.required, validators.trackingLength]}
            label="Tracking"
          />
          <Field component={Input} name="issue" id="complaint-reason" validate={[validators.complaint]} element="select" label="What is your Issue">
            <option value=""></option>
            <option value="not-delivered">My Delivery Hasn't Arrived</option>
            <option value="wrong-item">The wrong item was delivered</option>
            <option value="missing-part">Part of my order was missing</option>
            <option value="damaged">Some of my order was damaged</option>
            <option value="other">Other (give details below)</option>
          </Field>
          <Field
            component={Input}
            name="details"
            element="textarea"
            id="complaint-details"
            label="Give more details"
          />
          <button
            type="submit"
            disabled={this.props.pristine || this.props.submitting}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: 'delivery-complaint'
})(Form);
