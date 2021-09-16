import styled from "styled-components";
import { colors } from "../utils/colors";

export const Option = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 300px;
  outline: none;
  padding: 10px 15px;
  margin-top: 10px;
  margin-bottom: 10px;
  border: ${(props) => {
    if (props.colorAnswer || props.incorrectAnswer) {
      return `1px solid white`;
    }
    if (props.disabled) {
      return `1px solid ${colors.border}`;
    }
    return `1px solid ${colors.border}`;
  }};
  border-radius: 10px;
  background-color: ${(props) => {
    if (props.colorAnswer) {
      return colors.correct;
    }
    if (props.incorrectAnswer) {
      return colors.incorrect;
    }
    return "white";
  }};
  color: ${(props) => {
    if (props.colorAnswer || props.incorrectAnswer) {
      return "white";
    }
    return colors.border;
  }};
  text-align: left;
  cursor: pointer;
  & div {
    display: flex;
  }
  & span {
    margin-right: 10px;
  }
  &:hover {
    background-color: ${(props) => {
      if (props.colorAnswer) {
        return colors.correct;
      }
      if (props.incorrectAnswer) {
        return colors.incorrect;
      }
      if (props.disabled) {
        return "white";
      }
      return colors.button;
    }};
    color: ${(props) => {
      if (props.colorAnswer || props.incorrectAnswer) {
        return "white";
      }
      if (props.disabled) {
        return colors.border;
      }
      return "white";
    }};
    border: ${(props) => {
      if (props.colorAnswer || props.incorrectAnswer) {
        return `1px solid white`;
      }
      if (props.disabled) {
        return `1px solid ${colors.border}`;
      }
      return `1px solid white`;
    }};
  }
  &:active {
    transform: ${(props) => (props.disabled ? "none" : "scale(0.95)")};
  }
`;
