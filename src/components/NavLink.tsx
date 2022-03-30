import { FC, ReactNode } from "react";
import styled from "styled-components";
import screens from "../styles/screens";
import { motion } from "framer-motion";

type Props = {
  children: ReactNode;
  href: string;
};

const Link = styled(motion.a)`
  display: flex;
  margin: 0.5rem;
  &:hover {
    /* TODO: Add hover colouration based on light/dark mode */
  }
  @media screen and (min-width: ${screens.sm}) {
    margin: 1rem;
  }
`;

const animation = {
  scale: 1.1,
  textShadow: "0px 0px 8px rgb(255,255,255)",
};

const NavLink: FC<Props> = ({ children, href }) => {
  return (
    <Link whileHover={animation} href={href}>
      {children}
    </Link>
  );
};

export default NavLink;
