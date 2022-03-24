import { useTheme } from "../contexts/Theme";
import styled from "styled-components";
import DarkMode from "../interfaces/DarkMode";
import BurgerToggle from "./BurgerToggle";
import screens from "../styles/screens";
import { useState } from "react";
import DarkModeToggle from "./DarkModeSwitch";
import colours from "../styles/colours";

interface LinkWrapperInterface {
  open: boolean;
}

const Header = styled.header<DarkMode>`
  width: inherit;
  z-index: 10;
  position: fixed;
  top: 0px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  background-color: black;
  color: ${colours.light.textWhite};
  @media screen and (min-width: ${screens.sm}) {
    flex-direction: row;
  }
`;

const FlexWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Nav = styled.nav<LinkWrapperInterface>`
  display: ${(props) => (props.open ? "flex" : "none")};
  align-items: center;
  justify-content: center;

  @media screen and (min-width: ${screens.sm}) {
    display: flex;
    justify-content: end;
  }
`;

const LinkWrapper = styled.ul`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: ${screens.sm}) {
    flex-direction: row;
  }
`;

const Link = styled.a`
  display: flex;
  margin: 0.5rem;
  &:hover {
    /* TODO: Add hover colouration based on light/dark mode */
  }
  @media screen and (min-width: ${screens.sm}) {
    margin: 1rem;
  }
`;

export function NavBar() {
  const darkMode = useTheme();
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  return (
    <Header darkMode={darkMode}>
      <FlexWrapper>
        <DarkModeToggle />
        <BurgerToggle toggle={toggleNav} />
      </FlexWrapper>

      <Nav open={navOpen}>
        <LinkWrapper>
          <Link href="#home">Home</Link>
          <Link href="#about">About</Link>
          <Link href="#skills">Skills</Link>
          <Link href="#projects">Projects</Link>
          <Link href="#contact">Contact</Link>
        </LinkWrapper>
      </Nav>
    </Header>
  );
}
