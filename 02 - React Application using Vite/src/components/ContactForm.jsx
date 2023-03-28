import React, { useState } from 'react';

const ContactForm = (props) => {
  const [address, setAddress] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: props.name,
      address,
      number,
    };
    props.onSubmit(data);
  };

  return (
    <div>
      <h3>Contact Form</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor='name'>
          Name:
          <input type='text' id='name' value={props.name} disabled />
        </label>
        <label>
          Address:
          <input
            type='text'
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </label>
        <label>
          Number:
          <input
            type='text'
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
        </label>
        <button type='submit' style={{ marginRight: '12px' }}>
          Submit
        </button>
        <button type='button' onClick={props.onHideContactForm}>
          Close
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
