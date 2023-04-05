import React, { useContext, useState } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import ThemeContext from '../../contexts/ThemeContext';
import ThemeButton from '../ThemeButton/ThemeButton';

const Home = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <div
      style={{ height: '100vh' }}
      className={isDarkMode ? 'dark-mode' : 'light-mode'}
    >
      <header>
        <h1 className={isDarkMode ? 'font--light' : 'font--dark'}>
          Welcome to the Demo Project
        </h1>
      </header>

      <nav className={isDarkMode ? 'home__navbar--dark' : 'home__navbar'}>
        <ul>
          <li>
            <Link to='/task01'>
              <h2>Task 01</h2>
            </Link>
          </li>
          <li>
            <Link to='/task02'>
              <h2>Task 02</h2>
            </Link>
          </li>
          <li>
            <Link to='/task03'>
              <h2>Task 03</h2>
            </Link>
          </li>
        </ul>
      </nav>

      {/* <span>
        {isDarkMode ? (
          <MdLightMode
            style={{
              height: '32px',
              width: '32px',
              position: 'absolute',
              bottom: '20px',
              right: '20px',
              cursor: 'pointer',
            }}
            onClick={toggleTheme}
          />
        ) : (
          <MdDarkMode
            style={{
              height: '32px',
              width: '32px',
              position: 'absolute',
              bottom: '20px',
              right: '20px',
              cursor: 'pointer',
            }}
            onClick={toggleTheme}
          />
        )}
      </span> */}
      <ThemeButton />
    </div>
  );
};

export default Home;
