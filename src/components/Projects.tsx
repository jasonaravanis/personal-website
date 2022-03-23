import styled from "styled-components";
import { SectionTitle } from "./SectionTitle";
import ProjectTile from "./ProjectTile";
import Modal from "./Modal";
import { useState } from "react";
import { IProject } from "../interfaces/Project";
import projects from "../utils/projects";
import Section from "./Section";

const ProjectGrid = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
`;

const Projects = () => {
  const [modalContent, setModalContent] = useState<IProject | null>(null);

  return (
    <Section id="projects" lightBackground="#e76f51" darkBackground="black">
      <SectionTitle>Projects</SectionTitle>
      <ProjectGrid>
        {projects.map((project) => (
          <ProjectTile project={project} setModal={setModalContent} />
        ))}
      </ProjectGrid>
      <Modal content={modalContent} setContent={setModalContent} />
    </Section>
  );
};

export default Projects;
