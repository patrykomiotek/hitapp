import { useState } from "react";
import { Theme, getMode, useThemeContext } from "./ThemeContext";

export const ThemeSwitcher = () => {
  const [theme, setTheme] = useState<Theme | null>(getMode());
  const context = useThemeContext();

  const handleClick = () => {
    context.toggle();
    setTheme((theme) => (theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT));
  };

  return (
    <div>
      <button onClick={handleClick}>Toggle, current: {theme}</button>
    </div>
  );
};
