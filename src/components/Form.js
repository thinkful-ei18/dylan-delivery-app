import React from 'react';

export default function Form(props) {
  return <div>
      <form>
        <label>Tracking Number</label>
        <input type="text"/>
        <label>What is your issue</label>
        <select name="text" id="complaint-reason">
          <option value="no-arrival">My Delivery Hasn't Arrived</option>
          <option value="wrong-item">The wrong item was delivered</option>
          <option value="part-missing">Part of my order was missing</option>
          <option value="damaged">Some of my order was damaged</option>
          <option value="other">Other (give details below)</option>
        </select>
        <label>Give more details</label>
        <textarea name="details" id="complaint-details" cols="30" rows="10"></textarea>
        <input type="submit"></input>
      </form>
    </div>;
}