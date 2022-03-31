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
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 25px;
  margin: 2rem 0 2rem 0;
  padding: 2rem;
  line-height: 1;
  text-align: center;
`;

const Blob = styled.svg`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-55%) translateY(-45%);
  width: 100%;
  aspect-ratio: 3 / 2;
  overflow: visible;
`;

const PrimaryTitle = styled.span<DarkMode>`
  z-index: 10;
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
    font-size: 8rem;
  }
`;

const Subtitle = styled.span<DarkMode>`
  z-index: 10;

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
            <Blob
              id="visual"
              viewBox="0 0 500 600"
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              preserveAspectRatio="none"
            >
              <g transform="translate(275 304)">
                <motion.path
                  animate={{
                    d: [
                      "M159.3 -193.4C201.7 -154.4 227.9 -99.6 241.9 -39.7C256 20.1 257.9 85.1 229.2 130.1C200.6 175.2 141.3 200.4 81.6 220.5C21.9 240.6 -38.3 255.6 -94 242.3C-149.7 228.9 -200.8 187.2 -221.4 135.6C-241.9 84 -231.7 22.5 -219.7 -37.5C-207.7 -97.5 -193.9 -156 -156.9 -196C-120 -236 -60 -257.5 -0.7 -256.6C58.5 -255.7 117 -232.4 159.3 -193.4",
                      "M168.1 -209.5C207.7 -167.2 222.5 -104.5 225.2 -46.1C227.8 12.3 218.3 66.4 192.5 111.3C166.7 156.1 124.7 191.8 73 218.4C21.2 244.9 -40.4 262.5 -86.6 243.3C-132.9 224.2 -163.9 168.3 -195.6 113.1C-227.4 57.8 -259.9 3.1 -258.1 -52.1C-256.3 -107.4 -220.1 -163.3 -171.3 -204C-122.6 -244.7 -61.3 -270.4 1.5 -272.2C64.3 -273.9 128.6 -251.9 168.1 -209.5",
                    ],
                  }}
                  transition={{
                    repeatType: "reverse",
                    repeat: Infinity,
                    ease: "linear",
                    duration: 6,
                  }}
                  fill="#BB004B"
                ></motion.path>
              </g>
            </Blob>
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
