import { FC, ReactNode } from "react";
import styled from "styled-components";

interface Props {
  children: ReactNode;
  id: string;
}

const StyledSection = styled.section`
  padding-top: 3rem;
  width: 100%;
  position: relative;
`;

const Section: FC<Props> = ({ children, id }) => {
  return <StyledSection id={id}>{children}</StyledSection>;
};

export default Section;
