import { FC, ReactNode } from "react";
import styled from "styled-components";
import screens from "../styles/screens";
import { IBackground } from "../interfaces/Background";
import { useTheme } from "../contexts/Theme";

interface Props {
  children: ReactNode;
  id: string;
  lightBackground: string;
  darkBackground: string;
}

const FullScreenBackGround = styled.section<IBackground>`
  max-width: 100vw;
  overflow-x: hidden;
  display: flex;
  justify-content: center;
  background-color: ${(props) =>
    props.darkMode ? props.darkBackground : props.lightBackground};
`;

const CentralContainer = styled.div`
  position: relative;
  padding: 2rem 0 2rem 0;
  width: 90vw;

  max-width: ${screens.lg};
`;

const Section: FC<Props> = ({
  children,
  id,
  lightBackground,
  darkBackground,
}) => {
  const darkMode = useTheme();
  return (
    <FullScreenBackGround
      id={id}
      darkMode={darkMode}
      lightBackground={lightBackground}
      darkBackground={darkBackground}
    >
      <CentralContainer>{children}</CentralContainer>
    </FullScreenBackGround>
  );
};

export default Section;
