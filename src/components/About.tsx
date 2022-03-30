import styled from "styled-components";
import screens from "../styles/screens";
import colours from "../styles/colours";
import Section from "./Section";
import { useTheme } from "../contexts/Theme";
import DarkMode from "../interfaces/DarkMode";
import { motion } from "framer-motion";
import Bio from "./Bio";

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

const AnimationContainer = styled(motion.div)``;

const TitleContainer = styled.div<DarkMode>`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 25px;
  padding: 2rem;
  background-color: ${(props) =>
    props.darkMode ? colours.dark.six : colours.light.six};
  line-height: 1;
`;

const PrimaryTitle = styled.span<DarkMode>`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 5rem;
  color: ${(props) =>
    props.darkMode ? colours.dark.seven : colours.light.seven};

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
  /* position: relative; */
  /* top: -3vw; */
  font-family: "Raleway";
  font-size: 2rem;
  color: ${(props) =>
    props.darkMode ? colours.dark.seven : colours.light.seven};

  @media screen and (min-width: ${screens.md}) {
    align-items: flex-start;
    font-size: 2.5rem;
  }

  @media screen and (min-width: ${screens.lg}) {
    align-items: flex-start;
    font-size: 3rem;
  }
`;

const containerVariants = {
  hidden: {
    y: "-20vh",
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 100,
    },
  },
};

const Home = () => {
  const darkMode = useTheme();
  return (
    <Section id="about">
      <StyledHome>
        <AnimationContainer
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <TitleContainer darkMode={darkMode}>
            <PrimaryTitle darkMode={darkMode}>JASON ARAVANIS</PrimaryTitle>
            <Subtitle darkMode={darkMode}>Full Stack Developer</Subtitle>
          </TitleContainer>
        </AnimationContainer>
      </StyledHome>
      <Bio />
    </Section>
  );
};

export default Home;
