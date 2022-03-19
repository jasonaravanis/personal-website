import { NavBar } from "./components/NavBar";
import { useTheme } from "./contexts/Theme";
import styled from "styled-components";
import colours from "./styles/colours";
import "./styles/fonts.css";
import Main from "./components/Main";
import ColoursDemo from "./components/ColoursDemo";

interface InterfaceAppStyles {
  darkMode: boolean;
}

const AppStyles = styled.div<InterfaceAppStyles>`
  color: ${(props) =>
    props.darkMode ? colours.dark.secondary : colours.light.secondary};
  background: ${(props) =>
    props.darkMode ? colours.dark.background : colours.light.background};
`;

function App() {
  const darkMode = useTheme();
  return (
    <AppStyles darkMode={darkMode}>
      <NavBar />
      {/* <Main /> */}
      <ColoursDemo />
    </AppStyles>
  );
}

export default App;
