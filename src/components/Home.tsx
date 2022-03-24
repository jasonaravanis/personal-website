import styled from "styled-components";
import screens from "../styles/screens";
import professional from "../images/photos/professional.png";
import colours from "../styles/colours";
import Section from "./Section";
import { useTheme } from "../contexts/Theme";
import DarkMode from "../interfaces/DarkMode";

const StyledHome = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  font-family: "Tungsten";

  @media screen and (min-width: ${screens.md}) {
    flex-direction: column;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PrimaryTitle = styled.span<DarkMode>`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 5rem;
  color: ${(props) =>
    props.darkMode ? colours.dark.highlight : colours.light.highlight};

  @media screen and (min-width: ${screens.md}) {
    align-items: flex-start;
    font-size: 7rem;
  }

  @media screen and (min-width: ${screens.lg}) {
    align-items: flex-start;
    font-size: 8rem;
  }
`;

const Subtitle = styled.span<DarkMode>`
  position: relative;
  top: -3vw;
  font-family: "Raleway";
  font-size: 2rem;
  color: ${(props) =>
    props.darkMode ? colours.dark.highlight : colours.light.highlight};
  color: #64a6a3;

  @media screen and (min-width: ${screens.md}) {
    align-items: flex-start;
    font-size: 2.5rem;
  }

  @media screen and (min-width: ${screens.lg}) {
    align-items: flex-start;
    font-size: 3rem;
  }
`;

const Home = () => {
  const darkMode = useTheme();
  return (
    <Section
      id="home"
      lightBackground={colours.light.backgroundOne}
      darkBackground={colours.dark.backgroundOne}
    >
      <StyledHome>
        <TitleContainer>
          <PrimaryTitle darkMode={darkMode}>
            <span>JASON ARAVANIS</span>
          </PrimaryTitle>
          <Subtitle darkMode={darkMode}>Full Stack Developer</Subtitle>
        </TitleContainer>
        {/* <ProfessionalPhoto src={professional} alt="Professional headshot" /> */}
      </StyledHome>
    </Section>
  );
};

export default Home;
