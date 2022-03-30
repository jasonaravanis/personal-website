import { FC } from "react";
import styled from "styled-components";
import { IProject } from "../interfaces/Project";
import { FiX } from "react-icons/fi";
import { IconContext } from "react-icons";
import colours from "../styles/colours";
import screens from "../styles/screens";
import BuiltWithTile from "../components/BuiltWithTile";
import { useTheme } from "../contexts/Theme";
import DarkMode from "../interfaces/DarkMode";
import { motion } from "framer-motion";

interface Props {
  content: IProject;
  setContent: (content: IProject | null) => void;
}

const AnimationContainer = styled(motion.div)`
  position: fixed;
  max-width: 90vw;

  z-index: 10000;
  font-family: "Raleway";
  box-shadow: 0px 0px 13px -5px #7d7d7d;

  @media screen and (min-width: ${screens.sm}) {
    max-width: 50vw;
  }
`;

const ContentContainer = styled.div<DarkMode>`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  background: ${(props) =>
    props.darkMode
      ? colours.dark.backgroundThree
      : colours.light.backgroundThree};
  border-radius: 25px;
`;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: ${screens.lg}) {
    flex-direction: row;
  }
`;

const Backdrop = styled(motion.div)`
  position: fixed;
  height: 100%;
  width: 100%;
  display: grid;
  place-items: center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 10000;
`;

const ExitButton = styled.button`
  align-self: flex-end;
  margin-bottom: 0.5rem;
`;

const ProjectInfoContainer = styled.div`
  margin-right: 1rem;
`;

const ProjectTitle = styled.h1`
  font-size: 2rem;
`;

const ProjectDescription = styled.p`
  margin: 1rem 0 1rem 0;
`;

const BuiltWithTitle = styled.h2`
  font-size: 1.5rem;
`;

const BuiltWithGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(45px, 1fr));
  gap: 0.5rem;
  margin: 0.5rem 0 0.5rem 0;

  @media screen and (min-width: ${screens.md}) {
    grid-template-columns: repeat(auto-fill, minmax(45px, 1fr));
  }
`;

const ImageAndButtonsContainer = styled.div`
  min-width: 50%;
  display: flex;
  flex-direction: column;
  margin: 1rem 0 1rem 0;
`;

const Image = styled.img``;

const LinksContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Link = styled.a<DarkMode>`
  padding: 0.5rem 1rem 0.5rem 1rem;
  margin: 1rem;
  border: 1px solid
    ${(props) =>
      props.darkMode ? colours.dark.highlight : colours.light.highlight};
  color: ${(props) =>
    props.darkMode ? colours.dark.highlight : colours.light.highlight};
  border-radius: 25px;
  text-align: center;
  &:hover {
    border: 1px solid white;
    background-color: ${(props) =>
      props.darkMode ? colours.dark.highlight : colours.light.highlight};
    color: white;
  }
  transition: all 100ms ease-in-out;
`;

const backDropAnimation = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};

const dropInAnimation = {
  hidden: {
    y: "-50vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: "50vh",
    opacity: 0,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
};

const Modal: FC<Props> = ({ content, setContent }) => {
  const darkMode = useTheme();
  // overflow styles applied to body to prevent scrolling of main content while modal is open.
  document.body.style.overflow = "hidden";

  const closeModal = () => {
    document.body.style.overflow = "auto";
    setContent(null);
  };

  return (
    <Backdrop
      onClick={closeModal}
      variants={backDropAnimation}
      initial="hidden"
      animate="visible"
      exit="exit"
      key="backdrop"
    >
      <AnimationContainer
        variants={dropInAnimation}
        initial="hidden"
        animate="visible"
        exit="exit"
        key="modal"
      >
        <ContentContainer
          darkMode={darkMode}
          onClick={(e) => e.stopPropagation()}
        >
          <ExitButton onClick={closeModal}>
            <IconContext.Provider
              value={{
                size: "2rem",
                color: darkMode
                  ? colours.dark.highlight
                  : colours.light.highlight,
              }}
            >
              <FiX />
            </IconContext.Provider>
          </ExitButton>
          <Layout>
            <ProjectInfoContainer>
              <ProjectTitle>{content.title}</ProjectTitle>
              <ProjectDescription>{content.description}</ProjectDescription>
              <BuiltWithTitle>Built With:</BuiltWithTitle>
              <BuiltWithGrid>
                {content.builtWith.map((tool) => (
                  <BuiltWithTile
                    key={tool.title}
                    link={tool.link}
                    img={tool.image}
                    title={tool.title}
                  />
                ))}
              </BuiltWithGrid>
            </ProjectInfoContainer>
            <ImageAndButtonsContainer>
              <img src={content.image} alt={content.title} />
              <LinksContainer>
                <Link darkMode={darkMode} href={content.url} target="_blank">
                  Live Preview
                </Link>
                <Link darkMode={darkMode} href={content.repo} target="_blank">
                  View Code
                </Link>
              </LinksContainer>
            </ImageAndButtonsContainer>
          </Layout>
        </ContentContainer>
      </AnimationContainer>
    </Backdrop>
  );
};

export default Modal;
