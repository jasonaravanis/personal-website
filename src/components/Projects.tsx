import styled from "styled-components";
import quicksnapGIF from "../images/gifs/quicksnap.gif";
import { SectionTitle } from "./SectionTitle";
import ProjectTile from "./ProjectTile";
import Modal from "./Modal";
import { ReactNode, useState } from "react";
import { IProject } from "../interfaces/Project";
import skills from "../utils/skills";

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
          title="QuickSnap"
          image={quicksnapGIF}
          url="https://quicksnap-58e9a.web.app"
          repo="https://github.com/Atlas-1510/quicksnap"
          description="QuickSnap is a media-sharing platform based on Instagram, which allows users to share photos, send messages, and like, comment, and save posts."
          builtWith={[
            skills.react,
            skills.firebase,
            skills.framerMotion,
            skills.tailwindcss,
          ]}
          setModal={setModalContent}
        />
      </ProjectGrid>
      <Modal content={modalContent} setContent={setModalContent} />
    </StyledSection>
  );
};

export default Projects;
