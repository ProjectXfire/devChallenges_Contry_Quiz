import React from "react";
// Providers
import { MdCheckCircle, MdCancel } from "react-icons/md";
// Styles
import { Option as OptionStyled } from "../styles/option";

export const Option = ({
  letter,
  optionText,
  onClick,
  disabled,
  colorAnswer,
  incorrectAnswer,
}) => {
  return (
    <OptionStyled
      onClick={onClick}
      disabled={disabled}
      colorAnswer={colorAnswer}
      incorrectAnswer={incorrectAnswer}
    >
      <div>
        <span>{letter}</span>
        {optionText}
      </div>
      {colorAnswer && <MdCheckCircle />}
      {incorrectAnswer && <MdCancel />}
    </OptionStyled>
  );
};
