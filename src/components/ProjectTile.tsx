import { FC } from "react";
import styled from "styled-components";
import colours from "../styles/colours";
import { useTheme } from "../contexts/Theme";
import DarkMode from "../interfaces/DarkMode";
import { IProject } from "../interfaces/Project";
import { motion } from "framer-motion";

interface IProjectTile {
  project: IProject;
  key: string;
  setModal: (project: IProject) => void;
}

const LoadAnimationContainer = styled(motion.div)``;
const HoverAnimationContainer = styled(motion.div)``;

const Container = styled.button<DarkMode>`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) =>
    props.darkMode ? colours.dark.seven : colours.light.seven};
  padding: 1rem 1rem 0.5rem 1rem;
  border-radius: 25px;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
`;

const ProjectLabel = styled.span<DarkMode>`
  margin-top: 0.5rem;
  color: ${(props) => (props.darkMode ? colours.dark.one : colours.light.one)};
`;

const loadAnimation = {
  hidden: { scale: 1.1, opacity: 0 },
  visible: { scale: 1, opacity: 1 },
};

const ProjectTile: FC<IProjectTile> = ({ project, setModal }) => {
  const darkMode = useTheme();

  return (
    <LoadAnimationContainer variants={loadAnimation}>
      <HoverAnimationContainer whileHover={{ scale: 1.05 }}>
        <Container
          darkMode={darkMode}
          onClick={() =>
            setModal({
              image: project.image,
              title: project.title,
              url: project.url,
              repo: project.repo,
              description: project.description,
              builtWith: project.builtWith,
            })
          }
        >
          <img src={project.image} alt="title" />
          <ProjectLabel darkMode={darkMode}>{project.title}</ProjectLabel>
        </Container>
      </HoverAnimationContainer>
    </LoadAnimationContainer>
  );
};

export default ProjectTile;
