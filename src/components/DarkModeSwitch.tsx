import { useThemeUpdate, useTheme } from "../contexts/Theme";
import styled from "styled-components";
import colours from "../styles/colours";
import { ChangeEvent } from "react";

interface StyledLabelInterface {
  darkMode: boolean;
}

const StyledToggle = styled.input`
  opacity: 1;
  position: absolute;
  top: -9000px;
  left: -9000px;
  &:focus {
    + label::before {
      outline: solid lightblue thin;
    }
  }
`;

const StyledLabel = styled.label<StyledLabelInterface>`
  position: relative;
  display: flex;
  align-items: center;
  margin: 1em;
  color: white;
  cursor: pointer;
  &:before {
    content: "";
    width: 2em;
    height: 1em;
    background-color: ${(props) => (props.darkMode ? "lightgreen" : "#ddd")};
    border-radius: 1rem;
    margin-right: 0.25em;
    transition: background-color 200ms ease-in-out, left 200ms ease-in-out;
  }
  &:after {
    content: "";
    position: absolute;
    left: ${(props) => (props.darkMode ? "1.05em" : "0.05em")};
    width: 0.9em;
    height: 0.9em;
    background-color: ${(props) => (props.darkMode ? "green" : "white")};
    border-radius: 1rem;
    transition: background-color 200ms ease-in-out, left 200ms ease-in-out;
  }
`;

const DarkModeSwitch = () => {
  const darkMode = useTheme();
  const toggleTheme = useThemeUpdate();

  const handleChange = (e: ChangeEvent) => {
    toggleTheme();
    // Note: This allows outline of dark mode toggle to still show up when a user presses tab
    // key for accessibility but will make it disappear when the toggle is clicked.
    const element = e.currentTarget as HTMLInputElement;
    element.blur();
  };

  return (
    <>
      <StyledToggle
        type="checkbox"
        id="darkModeToggle"
        onChange={(e) => handleChange(e)}
      />
      <StyledLabel darkMode={darkMode} htmlFor="darkModeToggle">
        Dark Mode
      </StyledLabel>
    </>
  );
};

export default DarkModeSwitch;
