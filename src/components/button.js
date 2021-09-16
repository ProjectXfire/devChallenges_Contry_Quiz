import React from "react";
// Styles
import { Button as ButtonStyled } from "../styles/shared";

export const Button = ({
  text,
  type = "button",
  color,
  onClick,
  size = "md",
  revert,
}) => {
  return (
    <ButtonStyled
      revert={revert}
      color={color}
      size="md"
      type={type}
      onClick={onClick}
    >
      {text}
    </ButtonStyled>
  );
};
