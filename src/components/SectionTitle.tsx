import { ReactNode, FC } from "react";
import styled from "styled-components";
import { useTheme } from "../contexts/Theme";
import DarkMode from "../interfaces/DarkMode";
import colours from "../styles/colours";

interface Props {
  children: ReactNode;
  color?: string;
}

const Container = styled.h1<DarkMode>`
  font-size: 3rem;
  margin-top: 1rem;
  font-family: "Tungsten";
  text-transform: uppercase;
  color: ${(props) =>
    props.color
      ? props.color
      : (props) => (props.darkMode ? colours.dark.one : colours.light.one)};
`;

export const SectionTitle: FC<Props> = ({ children, color }) => {
  const darkMode = useTheme();
  return (
    <Container color={color} darkMode={darkMode}>
      {children}
    </Container>
  );
};
