import styled from "styled-components";
import { SectionTitle } from "./SectionTitle";
import ProjectTile from "./ProjectTile";
import Modal from "./Modal";
import { useState } from "react";
import { IProject } from "../interfaces/Project";
import projects from "../utils/projects";
import Section from "./Section";
import colours from "../styles/colours";
import { motion } from "framer-motion";
import { IWindowSize } from "../interfaces/WindowSize";
import useWindowSize from "../hooks/useWindowSize";
import screens from "../styles/screens";

const ProjectGrid = styled(motion.div)`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
`;

const animation = {
  hidden: {},
  visible: {
    transition: {
      type: "tween",
      delay: 1,
      duration: 1.5,
      staggerChildren: 0.1,
      when: "beforeChildren",
    },
  },
};

const Projects = () => {
  const [modalContent, setModalContent] = useState<IProject | null>(null);
  const size: IWindowSize = useWindowSize();

  // On small screens the margin for animating the project tiles should be reduced.
  const animationMargin = size.width! > parseInt(screens.md) ? 0.8 : 0.2;

  return (
    <Section
      id="projects"
      lightBackground={colours.light.backgroundTwo}
      darkBackground={colours.dark.backgroundTwo}
    >
      <SectionTitle>Projects</SectionTitle>
      <ProjectGrid
        variants={animation}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: animationMargin,
        }}
      >
        {projects.map((project) => (
          <ProjectTile
            key={project.title}
            project={project}
            setModal={setModalContent}
          />
        ))}
      </ProjectGrid>
      <Modal content={modalContent} setContent={setModalContent} />
    </Section>
  );
};

export default Projects;
