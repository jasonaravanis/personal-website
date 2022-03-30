import { useTheme } from "../contexts/Theme";
import styled from "styled-components";
import DarkMode from "../interfaces/DarkMode";
import BurgerToggle from "./BurgerToggle";
import NavLink from "./NavLink";
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
  background-color: ${(props) =>
    props.darkMode ? colours.dark.one : colours.light.one};
  color: ${(props) =>
    props.darkMode ? colours.dark.seven : colours.light.seven};
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
          <NavLink href="#about">About</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </LinkWrapper>
      </Nav>
    </Header>
  );
}
