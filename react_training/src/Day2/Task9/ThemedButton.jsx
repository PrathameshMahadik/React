import { useContext } from "react";
import { ThemeContext, themes } from "./ThemeSwitcher";

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
