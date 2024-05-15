import { createContext, useContext } from "react";
import { themes } from "../MockData/themes";

const ThemeContext = createContext();

const ThemedButton = () => {
  const { currentTheme, toggleTheme } = useContext(ThemeContext);
  return (
    <button
      onClick={toggleTheme}
      style={{
        background: themes[currentTheme].background,
        color: themes[currentTheme].color,
      }}
    >
      Toggle Theme
    </button>
  );
};
export default ThemedButton;
export {ThemeContext}
