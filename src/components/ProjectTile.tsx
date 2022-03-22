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

const Container = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProjectTitle = styled.span<DarkMode>`
  margin: 0.5rem;
  color: ${(props) =>
    props.darkMode ? colours.dark.primary : colours.light.primary};
`;

const ProjectTile: FC<IProjectTile> = ({ project, setModal }) => {
  const darkMode = useTheme();

  return (
    <Container
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
      <ProjectTitle darkMode={darkMode}>{project.title}</ProjectTitle>
    </Container>
  );
};

export default ProjectTile;
