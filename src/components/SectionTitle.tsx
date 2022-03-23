import { ReactNode, FC } from "react";
import styled from "styled-components";
import { useTheme } from "../contexts/Theme";
import DarkMode from "../interfaces/DarkMode";
import colours from "../styles/colours";

interface Props {
  children: ReactNode;
}

const Container = styled.h1<DarkMode>`
  font-size: 3rem;
  margin: 1rem 0 1rem 0;
  font-family: "Tungsten";
  text-transform: uppercase;
  color: ${(props) =>
    props.darkMode ? colours.dark.primary : colours.light.primary};
`;

export const SectionTitle: FC<Props> = ({ children }) => {
  const darkMode = useTheme();
  return <Container darkMode={darkMode}>{children}</Container>;
};
