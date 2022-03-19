import { useTheme } from "../contexts/Theme";
import styled from "styled-components";
import colours from "../styles/colours";

interface InterfaceDarkMode {
  darkMode: boolean;
}

const Wrapper = styled.div<InterfaceDarkMode>`
  display: flex;
  flex-direction: column;
  font-family: "Raleway";
  background-color: ${(props) =>
    props.darkMode ? colours.dark.background : colours.light.background};
`;

const Primary = styled.span<InterfaceDarkMode>`
  color: ${(props) =>
    props.darkMode ? colours.dark.primary : colours.light.primary};
  font-size: 10rem;
`;

const Secondary = styled.span<InterfaceDarkMode>`
  color: ${(props) =>
    props.darkMode ? colours.dark.secondary : colours.light.secondary};
  font-size: 5rem;
`;

const Tertiary = styled.span<InterfaceDarkMode>`
  color: ${(props) =>
    props.darkMode ? colours.dark.tertiary : colours.light.tertiary};
  font-size: 3rem;
`;

const Highlight = styled.span<InterfaceDarkMode>`
  color: ${(props) =>
    props.darkMode ? colours.dark.highlight : colours.light.highlight};
  font-size: 2rem;
`;

const ColoursDemo = () => {
  const darkMode = useTheme();
  return (
    <Wrapper darkMode={darkMode}>
      <Primary darkMode={darkMode}>Primary Colour</Primary>
      <Secondary darkMode={darkMode}>Secondary</Secondary>
      <Tertiary darkMode={darkMode}>Tertiary</Tertiary>
      <Highlight darkMode={darkMode}>Highlight</Highlight>
    </Wrapper>
  );
};

export default ColoursDemo;
