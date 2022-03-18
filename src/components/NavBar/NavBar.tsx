import { useTheme, useThemeUpdate } from "../../contexts/Theme";
import "./NavBar.scss";

export function NavBar() {
  const darkMode = useTheme();
  const toggleTheme = useThemeUpdate();

  return (
    <>
      <nav className={darkMode ? "dark" : "light"}>Some Content Goes Here</nav>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </>
  );
}
