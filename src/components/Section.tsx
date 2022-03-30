import { FC, ReactNode } from "react";
import styled from "styled-components";
import screens from "../styles/screens";
import { useTheme } from "../contexts/Theme";

interface Props {
  children: ReactNode;
  id: string;
}

const FullScreenContainer = styled.section`
  width: 100vw;
  overflow-x: hidden;
  display: flex;
  justify-content: center;
`;

const CentralContainer = styled.div`
  position: relative;
  padding: 2rem 0rem 2rem 0rem;
  width: 90vw;
  max-width: ${screens.lg};
`;

const Section: FC<Props> = ({ children, id }) => {
  const darkMode = useTheme();
  return (
    <FullScreenContainer id={id}>
      <CentralContainer>{children}</CentralContainer>
    </FullScreenContainer>
  );
};

export default Section;
