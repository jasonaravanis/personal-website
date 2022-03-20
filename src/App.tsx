import { NavBar } from "./components/NavBar";
import { useTheme } from "./contexts/Theme";
import styled from "styled-components";
import colours from "./styles/colours";
import "./styles/fonts.css";
import Main from "./components/Main";
import ColoursDemo from "./components/ColoursDemo";
import DarkMode from "./interfaces/DarkMode";

const AppStyles = styled.div<DarkMode>`
  color: ${(props) =>
    props.darkMode ? colours.dark.secondary : colours.light.secondary};
  background: ${(props) =>
    props.darkMode ? colours.dark.background : colours.light.background};
  font-family: "Raleway";
`;

function App() {
  const darkMode = useTheme();
  return (
    <AppStyles darkMode={darkMode}>
      <NavBar />
      {/* <Main /> */}
      {/* <ColoursDemo /> */}
    </AppStyles>
  );
}

export default App;
