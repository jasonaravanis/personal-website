import { FC } from "react";
import styled from "styled-components";
import { IconContext } from "react-icons";
import { FiMenu } from "react-icons/fi";
import screens from "../styles/screens";

interface IntBurgerToggle {
  toggle: () => void;
}

const HamburgerToggleWrapper = styled.a`
  display: flex;
  margin: 1rem;
  @media screen and (min-width: ${screens.sm}) {
    display: none;
  }
`;

const BurgerToggle: FC<IntBurgerToggle> = ({ toggle }) => {
  return (
    <HamburgerToggleWrapper onClick={toggle}>
      <IconContext.Provider value={{ size: "2rem" }}>
        <FiMenu />
      </IconContext.Provider>
    </HamburgerToggleWrapper>
  );
};

export default BurgerToggle;
