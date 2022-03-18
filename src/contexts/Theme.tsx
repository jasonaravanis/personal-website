import { createContext, FC, ReactNode, useContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

type Props = {
  children: ReactNode;
};

const ThemeContext = createContext(true);
const ThemeUpdateContext = createContext(() => {});

export function useTheme() {
  return useContext(ThemeContext);
}

export function useThemeUpdate() {
  return useContext(ThemeUpdateContext);
}

export const ThemeProvider: FC<Props> = ({ children }) => {
  const [darkTheme, setDarkTheme] = useLocalStorage("darkTheme", false);

  return (
    <ThemeContext.Provider value={darkTheme}>
      <ThemeUpdateContext.Provider value={() => setDarkTheme(!darkTheme)}>
        {children}
      </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  );
};
