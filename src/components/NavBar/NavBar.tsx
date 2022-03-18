import { useTheme, useThemeUpdate } from "../../contexts/Theme";
import styled from "styled-components";
import colours from "../../styles/colours";

interface IWrp {
  darkMode: boolean;
}

const Wrapper = styled.header<IWrp>`
  color: ${colours.tertiary};
  background: ${(props) =>
    props.darkMode ? colours.primary : colours.secondary};
`;

export function NavBar() {
  const darkMode = useTheme();
  const toggleTheme = useThemeUpdate();

  return (
    <Wrapper darkMode={darkMode}>
      <nav>Some Content Goes Here</nav>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </Wrapper>
  );
}
