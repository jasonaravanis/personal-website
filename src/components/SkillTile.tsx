import { FC } from "react";
import styled from "styled-components";
import { useTheme } from "../contexts/Theme";
import DarkMode from "../interfaces/DarkMode";
import colours from "../styles/colours";
import screens from "../styles/screens";
import { ISkill } from "../interfaces/Skill";

interface IntSkillTile {
  skill: ISkill;
  key: string;
}

const Container = styled.a``;

const Tile = styled.div<DarkMode>`
  position: relative;
  aspect-ratio: 1 / 1;
  background-color: ${(props) =>
    props.darkMode
      ? colours.dark.backgroundThree
      : colours.light.backgroundThree};
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);

  transition: transform 100ms ease-in-out;

  &:hover {
    transform: translateY(-5px);
  }
`;

const Image = styled.img`
  object-fit: contain;
  object-position: center;
  height: 100%;
  width: 100%;
  padding: 0.5rem;
  @media screen and (min-width: ${screens.md}) {
    padding: 0.75rem;
  }
`;

const HoverTitle = styled.span`
  position: absolute;
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  text-align: center;
  color: black;

  background: rgba(255, 255, 255, 0.5);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  transition: opacity 100ms ease-in-out;

  opacity: 0;
  &:hover {
    opacity: 1;
  }
`;

// This title for the skill only shows when the user is unable to hover (due to lack of a mouse pointer).
const MobileTitle = styled.span<DarkMode>`
  width: 100%;
  display: none;
  text-align: center;
  font-size: 0.8rem;
  margin-top: 0.5rem;
  color: ${(props) =>
    props.darkMode ? colours.dark.textWhite : colours.light.textBlack};

  @media (pointer: coarse) {
    display: inline-block;
  }
`;

const SkillTile: FC<IntSkillTile> = ({ skill }) => {
  const darkMode = useTheme();
  return (
    <Container href={skill.link} target="_blank">
      <Tile darkMode={darkMode}>
        <HoverTitle>
          <span>{skill.title}</span>
        </HoverTitle>
        <Image src={skill.image} alt={skill.title} />
      </Tile>
      <MobileTitle darkMode={darkMode}>{skill.title}</MobileTitle>
    </Container>
  );
};

export default SkillTile;
