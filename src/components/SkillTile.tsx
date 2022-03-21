import { FC } from "react";
import styled from "styled-components";
import { useTheme } from "../contexts/Theme";
import DarkMode from "../interfaces/DarkMode";
import colours from "../styles/colours";

interface IntSkillTile {
  img: string;
  title: string;
  link: string;
}

const Container = styled.a`
  position: relative;
  display: grid;
  place-items: center;
  aspect-ratio: 1/ 1;
  background-color: blue;
  border-radius: 10px;
  background-color: white;
  overflow: hidden;
  cursor: pointer;
  -webkit-box-shadow: 0px 0px 13px -5px #7d7d7d;
  box-shadow: 0px 0px 13px -5px #7d7d7d;
  transition: transform 100ms ease-in-out;

  &:hover {
    transform: translateY(-5px);
  }
`;

const Image = styled.img`
  padding: 1rem;
`;

const HoverTitle = styled.div<DarkMode>`
  position: absolute;
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  text-align: center;
  color: ${(props) =>
    props.darkMode ? colours.dark.primary : colours.light.primary};

  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  transition: opacity 100ms ease-in-out;

  opacity: 0;
  &:hover {
    opacity: 1;
  }
`;

const SkillTile: FC<IntSkillTile> = ({ img, title, link }) => {
  const darkMode = useTheme();
  return (
    <Container href={link} target="_blank">
      <HoverTitle darkMode={darkMode}>
        <span>{title}</span>
      </HoverTitle>
      <Image src={img} alt={title} />
    </Container>
  );
};

export default SkillTile;
