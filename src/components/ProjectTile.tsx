import { FC } from "react";
import styled from "styled-components";
import colours from "../styles/colours";
import { useTheme } from "../contexts/Theme";
import DarkMode from "../interfaces/DarkMode";
import { IProject } from "../interfaces/Project";

interface IProjectTile {
  project: IProject;
  setModal: (project: IProject) => void;
}

const Container = styled.button<DarkMode>`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) =>
    props.darkMode
      ? colours.dark.backgroundThree
      : colours.light.backgroundThree};
  padding: 1rem 1rem 0.5rem 1rem;
  border-radius: 25px;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
`;

const ProjectLabel = styled.span<DarkMode>`
  margin-top: 0.5rem;
  color: ${(props) =>
    props.darkMode ? colours.dark.textWhite : colours.light.textBlack};
`;

const ProjectTile: FC<IProjectTile> = ({ project, setModal }) => {
  const darkMode = useTheme();

  return (
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
  );
};

export default ProjectTile;
