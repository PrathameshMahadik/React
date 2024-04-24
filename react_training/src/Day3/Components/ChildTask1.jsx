import React from 'react';
import { useAuth } from './ParentTask1';

const Child = () => {
  const { isLoggedIn, setIsLoggedIn, userName} = useAuth();
  return (
    <div>
        <h1>Child Component</h1>
      {isLoggedIn ? (
        <p>Welcome, {userName}!</p>
      ) : (
        <div>
          <p>Please log in.</p>
        </div>
      )}
      <button onClick={()=>setIsLoggedIn(!isLoggedIn)}>{isLoggedIn ? "Logged In" : "Log In"}</button>
    </div>
  );
};
export default Child;
