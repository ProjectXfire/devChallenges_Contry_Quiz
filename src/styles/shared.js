import styled from "styled-components";
import { colors } from "../utils/colors";

export const Title = styled.div`
  font-size: 2rem;
  font-weight: bold;
  color: ${(props) => (props.color ? props.color : "white")};
  position: relative;
`;

export const Text = styled.p`
  margin: 0 10px;
  color: ${colors.question};
  font-weight: bold;
`;

export const QuizImage = styled.img`
  position: absolute;
  width: 30%;
  right: 0px;
  top: 0px;
`;

export const Button = styled.button`
  padding: 10px 30px;
  margin: 10px 0;
  color: ${(props) => (props.revert ? props.color : "white")};
  background-color: ${(props) => (props.revert ? "white" : props.color)};
  border: ${(props) => (props.revert ? `2px solid ${props.color}` : "none")};
  outline: none;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
  &:active {
    transform: scale(0.9);
  }
`;

export const Image = styled.img`
  width: 80%;
  margin-bottom: 40px;
`;

export const Number = styled.span`
  font-size: 2rem;
  color: ${colors.correct};
`;
