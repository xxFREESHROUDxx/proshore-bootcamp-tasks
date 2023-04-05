import React, { useContext, useState } from 'react';
import './Task01.css';
import ThemeButton from '../ThemeButton/ThemeButton';
import ThemeContext from '../../contexts/ThemeContext';

const Task01 = () => {
  const [user, setUser] = useState([]);
  const [filteredUser, setFilteredUser] = useState([]);

  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  const handleSubmit = (event) => {
    event.preventDefault(); // stop empty data being submitted and also same data being submitted multiple times

    if (event.target.fullname.value === '') {
      alert('Please enter your name');
      return;
    }

    if (event.target.age.value === '') {
      alert('Please enter your age');
      return;
    }

    if (event.target.email.value === '') {
      alert('Please enter your email');
      return;
    } //prevent same data being send multiple times

    const checkEmail = user.find(
      (person) => person.email === event.target.email.value
    );
    const checkName = user.find(
      (person) => person.fullname === event.target.fullname.value
    );

    if (checkEmail || checkName) {
      alert('User already exist');
      return;
    }

    const userData = {
      fullname: event.target.fullname.value,
      age: event.target.age.value,
      email: event.target.email.value,
    };
    setUser([...user, userData]); // make the form on the data empty after submitting data

    event.target.reset();
  }; // filter the users whose age is greater than 30

  const handleFilter = () => {
    // check if there is no user registered
    if (user.length === 0) {
      alert('No user registered! Please register now');
      return;
    }
    const filteredUsers = user.filter((person) => person.age >= 30);
    setFilteredUser(filteredUsers);
  };

  return (
    <div
      style={{ height: '100vh' }}
      className={`task01__container ${isDarkMode ? 'dark-mode' : 'light-mode'}`}
    >
      <form
        className={`task01__form ${
          isDarkMode ? 'dark-mode shadow--dark' : 'light-mode shadow--light'
        }`}
        onSubmit={handleSubmit}
      >
        <h1 className={isDarkMode ? 'font--light' : 'font--dark'}>
          Signup Form
        </h1>
        <div>
          <label
            className={isDarkMode ? 'font--light' : 'font--dark'}
            htmlFor='fullname'
          >
            Full Name
          </label>
          <input type='text' name='fullname' id='fullname' />
        </div>

        <div>
          <label
            htmlFor='age'
            className={isDarkMode ? 'font--light' : 'font--dark'}
          >
            Age
          </label>
          <input type='number' name='age' id='age' />
        </div>

        <div>
          <label
            className={isDarkMode ? 'font--light' : 'font--dark'}
            htmlFor='email'
          >
            Email
          </label>
          <input type='email' name='email' id='email' />
        </div>
        <div className='btn'>
          <button type='submit'>Submit</button>
          <button type='button' onClick={handleFilter}>
            Filter Data
          </button>
        </div>
      </form>
      <div
        className={`task--filtered-items ${
          isDarkMode ? 'dark-mode shadow--dark' : 'light-mode  shadow--light'
        }`}
      >
        <div style={{ marginBottom: '2rem' }}>
          <h2 className={isDarkMode ? 'font--light' : 'font--dark'}>
            User Registered: {user.length === 0 ? 'No user' : `${user.length}`}
          </h2>
          <p className={isDarkMode ? 'font--light' : 'font--dark'}>
            {user.map((person, index) => (
              <li key={index}>
                Name: {person.fullname} &nbsp; Age: {person.age} &nbsp; Email:{' '}
                {person.email}
              </li>
            ))}
          </p>
        </div>
        <div>
          <h3 className={isDarkMode ? 'font--light' : 'font--dark'}>
            Filtered users whose age &gt; 30
          </h3>
          <p className={isDarkMode ? 'font--light' : 'font--dark'}>
            {filteredUser.map((person, index) => (
              <li key={index}>
                Name: {person.fullname} &nbsp; Age: {person.age} &nbsp; Email:{' '}
                {person.email}
              </li>
            ))}
          </p>
        </div>
      </div>
      <ThemeButton />
    </div>
  );
};

export default Task01;
