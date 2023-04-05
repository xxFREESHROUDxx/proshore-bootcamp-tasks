import React, { useState } from 'react';
import './ContactForm.css';

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
    alert('Thank you! Your contact information has been submitted.');
  };

  return (
    <div className='contact__container'>
      <form className='contact__form' onSubmit={handleSubmit}>
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
            type='number'
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
        </label>
        <div className='contact__form__button'>
          <button type='submit' style={{ marginRight: '12px' }}>
            Submit
          </button>
          <button type='button' onClick={props.onHideContactForm}>
            Close
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
