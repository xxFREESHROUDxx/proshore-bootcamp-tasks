import React, { useContext, useState } from 'react';
import ContactForm from './ContactForm';
import './Task02.css';
import ThemeButton from '../ThemeButton/ThemeButton';
import ThemeContext from '../../contexts/ThemeContext';

const Task02 = () => {
  const [showParagraph1, setShowParagraph1] = useState(false);
  const [showParagraph2, setShowParagraph2] = useState(false);
  const [showParagraph3, setShowParagraph3] = useState(false);
  const [name, setName] = useState('');
  const [showContactForm, setShowContactForm] = useState(false);

  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleShowContactForm = () => {
    setShowContactForm(true);
  };

  const handleHideContactForm = () => {
    setShowContactForm(false);
  };

  const handleFormSubmit = (data) => {
    console.log('Form data:', data);
    setShowContactForm(false);
  };

  return (
    <div
      className={`task02__container ${isDarkMode ? 'dark-mode' : 'light-mode'}`}
    >
      <div className='task02__first'>
        <div>
          <button onClick={() => setShowParagraph1(!showParagraph1)}>
            Button 1
          </button>
          {showParagraph1 && <p>Paragraph 1</p>}
          {showParagraph1 && (
            <button onClick={() => setShowParagraph1(false)}>Hide</button>
          )}
        </div>

        <div>
          <button onClick={() => setShowParagraph2(!showParagraph2)}>
            Button 2
          </button>
          {showParagraph2 && <p>Paragraph 2</p>}
          {showParagraph2 && (
            <button onClick={() => setShowParagraph2(false)}>Hide</button>
          )}
        </div>

        <div>
          <button onClick={() => setShowParagraph3(!showParagraph3)}>
            Button 3
          </button>
          {showParagraph3 && <p>Paragraph 3</p>}
          {showParagraph3 && (
            <button onClick={() => setShowParagraph3(false)}>Hide</button>
          )}
        </div>
      </div>
      <div className='task02__second'>
        <h2>Please fill up the details</h2>
        <label htmlFor='name'>Name</label>
        <input
          type='text'
          name='name'
          id='name'
          value={name}
          onChange={handleNameChange}
          placeholder='Please enter your name'
        />
        <button onClick={handleShowContactForm}>Contact Us</button>
        {showContactForm && (
          <ContactForm
            name={name}
            onSubmit={handleFormSubmit}
            onHideContactForm={handleHideContactForm}
          />
        )}
      </div>
      <ThemeButton />
    </div>
  );
};

export default Task02;
