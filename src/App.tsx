import { NavBar } from "./components/NavBar";
import { useTheme } from "./contexts/Theme";
import styled from "styled-components";
import colours from "./styles/colours";
import "./styles/fonts.css";
import Home from "./components/Home";
import About from "./components/About";
import ColoursDemo from "./components/ColoursDemo";
import DarkMode from "./interfaces/DarkMode";
import screens from "./styles/screens";

const AppStyles = styled.div<DarkMode>`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${(props) =>
    props.darkMode ? colours.dark.secondary : colours.light.secondary};
  background: ${(props) =>
    props.darkMode ? colours.dark.background : colours.light.background};
  font-family: "Raleway";
`;

const ScreenContainer = styled.main`
  width: 100vw;
  max-width: ${screens.lg};
  min-width: ${screens.minimum};
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: ${screens.md}) {
    width: 90vw;
  }
`;

const ContentContainer = styled.div`
  width: 90vw;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: ${screens.md}) {
    width: 100%;
  }
`;

function App() {
  const darkMode = useTheme();
  return (
    <AppStyles darkMode={darkMode}>
      <ScreenContainer>
        <NavBar />
        <ContentContainer>
          <Home />
          <About />
          <About />
          <About />
          <About />
        </ContentContainer>
      </ScreenContainer>
    </AppStyles>
  );
}

export default App;
