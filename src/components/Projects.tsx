import styled from "styled-components";
import quicksnapGIF from "../images/gifs/quicksnap.gif";
import { SectionTitle } from "./SectionTitle";
import ProjectTile from "./ProjectTile";
import Modal from "./Modal";
import { ReactNode, useState } from "react";
import { IProject } from "../interfaces/Project";

const StyledSection = styled.section`
  width: 100%;
  position: relative;
`;

const ProjectGrid = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
`;

const Projects = () => {
  const [modalContent, setModalContent] = useState<IProject | null>(null);

  return (
    <StyledSection>
      <SectionTitle>Projects</SectionTitle>
      <ProjectGrid>
        <ProjectTile
          image={quicksnapGIF}
          title="QuickSnap"
          setModal={setModalContent}
        />
      </ProjectGrid>
      <Modal content={modalContent} setContent={setModalContent} />
    </StyledSection>
  );
};

export default Projects;
