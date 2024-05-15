import React, { useContext, useState } from "react";
import { loginContext, ThemeContext } from "./ParentTask2";
import "../css/theme.css";

const Child = () => {
  const { login, setLogin } = useContext(loginContext);
  const { theme, setTheme } = useContext(ThemeContext);
  const [username, setusername] = useState("");

  return (
    <div>
      <div>
        <button
          onClick={() => {
            setTheme(!theme);
          }}
        >
          Toggle Theme
        </button>
        {theme ? (
          <div className="dark-theme">
            {login ? <h1>Welcome {username}! </h1> : <h1>Please log in.</h1>}
            {login ? (
              <button onClick={() => setLogin(false)}>Sign Out</button>
            ) : (
              <div>
                <input
                  type="text"
                  disabled={login}
                  onChange={(e) => setusername(e.target.value)}
                />
                <button
                  onClick={() => {
                    setLogin(true);
                  }}
                >
                  Enter
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="light-theme">
            {login ? <h1>Welcome {username}! </h1> : <h1>Please log in.</h1>}
            {login ? (
              <button onClick={() => setLogin(false)}>Sign Out</button>
            ) : (
              <div>
                <input
                  type="text"
                  disabled={login}
                  onChange={(e) => setusername(e.target.value)}
                />
                <button
                  onClick={() => {
                    setLogin(true);
                  }}
                >
                  Enter
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Child;
