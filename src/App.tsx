import { NavBar } from "./components/NavBar";
import { useTheme } from "./contexts/Theme";
import styled from "styled-components";
import colours from "./styles/colours";
import "./styles/fonts.css";
import Main from "./components/Main";

interface InterfaceAppStyles {
  darkMode: boolean;
}

const AppStyles = styled.div<InterfaceAppStyles>`
  color: ${colours.tertiary};
  background: ${(props) =>
    props.darkMode ? colours.primary : colours.secondary};
`;

function App() {
  const darkMode = useTheme();
  return (
    <AppStyles darkMode={darkMode}>
      <NavBar />
      <Main />
    </AppStyles>
  );
}

export default App;
