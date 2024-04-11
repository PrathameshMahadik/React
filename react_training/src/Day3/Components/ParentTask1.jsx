import React, { createContext, useState, useContext } from "react";

const LoginContext = createContext();
const Parent = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const userName = "Prathamesh";
  return (
    <>
      <h1>Parent Component</h1>
      {isLoggedIn ? (
        <p>Welcome, {userName}!</p>
      ) : (
        <div>
          <p>Please log in.</p>
        </div>
      )}
      <LoginContext.Provider value={{ isLoggedIn, setIsLoggedIn, userName }}>
        {children}
      </LoginContext.Provider>
    </>
  );
};
export const useAuth = () => useContext(LoginContext);
export default Parent;
