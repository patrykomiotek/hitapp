import {
  MutableRefObject,
  createContext,
  useContext,
  useEffect,
  useRef,
  // useState,
} from "react";

export enum Theme {
  LIGHT = "light",
  DARK = "dark",
}

type ThemeContextType = {
  theme: MutableRefObject<Theme | null>;
  toggle: () => void;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("Oh no! You should wrap component inside ThemeProvider");
  }
  return context;
};

const addDarkCssClass = () => document.body.classList.add("dark");
const removeDarkCssClass = () => document.body.classList.remove("dark");

export const getMode = () => {
  if (window.matchMedia) {
    // next.js
    const matchesDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    return matchesDarkMode ? Theme.DARK : Theme.LIGHT;
  }
  return null; // Theme.LIGHT
};

const useTheme = () => {
  // const [theme, setTheme] = useState();
  const theme = useRef<Theme | null>(getMode());

  useEffect(() => {
    const themeMode = getMode();
    if (themeMode === Theme.DARK) {
      addDarkCssClass();
    }

    // query = window.matchMedia("(prefers-color-scheme: dark)").matches
    // query.addEventListener("change", handleSchemeValues)
  }, []);

  const toggle = () => {
    if (theme.current === Theme.DARK) {
      theme.current = Theme.LIGHT;
      removeDarkCssClass();
    } else {
      theme.current = Theme.DARK;
      addDarkCssClass();
    }
  };

  return { theme, toggle };
};

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeContext.Provider value={useTheme()}>{children}</ThemeContext.Provider>
  );
};
