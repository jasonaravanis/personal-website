import { useThemeUpdate } from "../contexts/Theme";
import styled from "styled-components";

interface IWrp {}

const Wrapper = styled.header<IWrp>`
  font-family: "Raleway";
  font-weight: 700;
  font-size: 5rem;
`;

export function NavBar() {
  const toggleTheme = useThemeUpdate();

  return (
    <Wrapper>
      <nav>Some Content Goes Here</nav>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </Wrapper>
  );
}
