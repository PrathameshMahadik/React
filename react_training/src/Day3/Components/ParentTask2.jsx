/*Extend the previous application to demonstrate the use of nested contexts.
Create a new context to manage user preferences (e.g., theme preference).
Modify the parent component to provide both the authentication and preferences contexts.
Create a child component that consumes both contexts.
Allow the user to change their theme preference (light/dark) using a button in the child component.
Display the theme preference in the UI and adjust the component's styling accordingly.*/
import React, { createContext, useState } from "react";

const loginContext = createContext();

const ParentProvider = ({ children }) => {
  const [login, setLogin] = useState(false);
  return (
    <div>
      <loginContext.Provider value={{ login, setLogin }}>
        {children}
      </loginContext.Provider>
    </div>
  );
};
const ThemeContext = createContext();
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(true);
  return (
    <div>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        {children}
      </ThemeContext.Provider>
    </div>
  );
};

export default ParentProvider;
export { loginContext, ThemeContext, ThemeProvider };
