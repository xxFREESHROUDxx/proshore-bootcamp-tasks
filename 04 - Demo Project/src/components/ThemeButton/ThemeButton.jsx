import React, { useContext } from 'react';
import ThemeContext from '../../contexts/ThemeContext';

const ThemeButton = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  return (
    <button
      className={
        isDarkMode
          ? 'btn btn-floating fa fa-toggle-on'
          : 'btn btn-floating fa fa-toggle-off'
      }
      onClick={toggleTheme}
    ></button>
  );
};

export default ThemeButton;
