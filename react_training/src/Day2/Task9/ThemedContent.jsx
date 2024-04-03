import { useContext } from "react";
import { ThemeContext, themes } from "./ThemeSwitcher";

const ThemedContent = () => {
  const { currentTheme } = useContext(ThemeContext);

  return (
    <div
      style={{
        background: themes[currentTheme].background,
        color: themes[currentTheme].color,
      }}
    >
      <h1>Welcome to Theme Switcher</h1>
    </div>
  );
};
export default ThemedContent;
