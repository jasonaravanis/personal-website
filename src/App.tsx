import { NavBar } from "./components/NavBar";
import { useTheme } from "./contexts/Theme";
import styled from "styled-components";
import GlobalFonts from "./styles/fonts/fonts";
import colours from "./styles/colours";
import "./styles/fonts/fonts.css";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import DarkMode from "./interfaces/DarkMode";
import screens from "./styles/screens";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const AppStyles = styled.div<DarkMode>`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  color: ${(props) =>
    props.darkMode ? colours.dark.secondary : colours.light.secondary};
  background: ${(props) =>
    props.darkMode ? colours.dark.background : colours.light.background};
  font-family: "Raleway";
`;

const ScreenContainer = styled.div`
  width: 100vw;
  min-width: ${screens.minimum};
  display: flex;
  flex-direction: column;
  /* align-items: center; */
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  margin-top: 3rem;

  /* @media screen and (min-width: ${screens.md}) {
    width: 100%;
  } */
`;

function App() {
  const darkMode = useTheme();
  return (
    <AppStyles darkMode={darkMode}>
      <GlobalFonts />
      <ScreenContainer>
        <NavBar />
        <ContentContainer>
          <Home />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </ContentContainer>
      </ScreenContainer>
    </AppStyles>
  );
}

export default App;
