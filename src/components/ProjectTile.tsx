import { FC } from "react";
import styled from "styled-components";
import colours from "../styles/colours";
import { useTheme } from "../contexts/Theme";
import DarkMode from "../interfaces/DarkMode";
import { IProject } from "../interfaces/Project";

interface IProjectTile extends IProject {
  setModal: (project: IProject) => void;
}

const Container = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: lightblue;
`;

const ProjectTitle = styled.span<DarkMode>`
  margin: 0.5rem;
  color: ${(props) =>
    props.darkMode ? colours.dark.primary : colours.light.primary};
`;

const ProjectTile: FC<IProjectTile> = ({ title, image, setModal }) => {
  const darkMode = useTheme();

  return (
    <Container
      onClick={() =>
        setModal({
          image,
          title,
        })
      }
    >
      <img src={image} alt="title" />
      <ProjectTitle darkMode={darkMode}>{title}</ProjectTitle>
    </Container>
  );
};

export default ProjectTile;
