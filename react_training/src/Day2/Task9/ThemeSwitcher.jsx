/* 9.Create a theme switcher application using the useContext hook.
Create a context to manage the current theme (e.g., light or dark).
Provide a button to toggle between the two themes.
Use the useContext hook to access the theme value and update it.
Apply different styles and colors to components based on the selected theme. */
import React, { createContext } from 'react';
import ThemeProvider from './ThemeProvider';
import ThemedButton from './ThemedButton';
import ThemedContent from './ThemedContent';

const ThemeContext = createContext();

const themes = {
  light: {
    background: '#ffffff',
    color: '#000000',
  },
  dark: {
    background: '#222222',
    color: '#ffffff',
  },
};
export{themes, ThemeContext};

const ThemeSwitcher = () => {
  return (
    <ThemeProvider>
      <div className="App">
        <ThemedButton />
        <ThemedContent />
      </div>
    </ThemeProvider>
  );
};

export default ThemeSwitcher;
