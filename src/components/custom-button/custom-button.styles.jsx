import styled, { css } from "styled-components";

const invertedButtonStyles = css`
  width: 80%;
  opacity: 0.7;
  position: absolute;
  top: 255px;
  display: none;
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`;

const googleButtonStyles = css`
  background-color: #4285f4;
  color: white;
  border: none;

  &:hover {
    background-color: #357ae8;
    color: black;
    border: none;
  }
`;

const normalButtonStyles = css`
  background-color: black;
  color: white;
  border: none;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

const getButtonStyles = (props) => {
  if (props.isGoogleSignIn) return googleButtonStyles;
  if (props.inverted) return invertedButtonStyles;
  return normalButtonStyles;
};

export const CustomButtonContainer = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  text-transform: uppercase;
  font-family: "Open Sans Condensed";
  font-weight: bolder;
  cursor: pointer;
  display: flex;
  justify-content: center;

  ${getButtonStyles}
`;
