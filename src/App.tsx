import { NavBar } from "./components/NavBar";
import { useTheme } from "./contexts/Theme";
import styled from "styled-components";
import GlobalFonts from "./styles/fonts/fonts";
import colours from "./styles/colours";
import "./styles/fonts/fonts.css";
import About from "./components/About";
import Skills from "./components/Skills";
import DarkMode from "./interfaces/DarkMode";
import screens from "./styles/screens";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import WaveBorder from "./components/WaveBorder";
import WaveBorderThin from "./components/WaveBorderTHIN";

const AppStyles = styled.div<DarkMode>`
  display: flex;
  flex-direction: column;
  color: ${(props) => (props.darkMode ? colours.dark.one : colours.light.one)};
  background-color: ${(props) =>
    props.darkMode ? colours.dark.five : colours.light.five};
  font-family: "Raleway";
`;

const ScreenContainer = styled.div`
  width: 100vw;
  min-width: ${screens.minimum};
  display: flex;
  flex-direction: column;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 3rem;
`;

function App() {
  const darkMode = useTheme();
  return (
    <AppStyles darkMode={darkMode}>
      <GlobalFonts />
      <ScreenContainer>
        <NavBar />
        <ContentContainer>
          <WaveBorder>
            <About />
          </WaveBorder>
          <WaveBorderThin>
            <Skills />
          </WaveBorderThin>

          <WaveBorderThin>
            <Projects />
          </WaveBorderThin>
          <Contact />
        </ContentContainer>
      </ScreenContainer>
    </AppStyles>
  );
}

export default App;
