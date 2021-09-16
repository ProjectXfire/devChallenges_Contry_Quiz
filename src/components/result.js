import React from "react";
// Utils
import { colors } from "../utils/colors";
// Images
import resultImage from "../images/undraw_winners_ao2o 2.svg";
// Styles
import { Card as CardStyled, CardContent } from "../styles/card";
import { Title, Image, Text, Number } from "../styles/shared";
// Componets
import { Button } from "../components/button";

export const Result = ({ correctAnswers, restartQuiz }) => {
  return (
    <CardStyled>
      <Title>COUNTRY QUIZ</Title>
      <CardContent center>
        <Image src={resultImage} alt="result" />
        <Title color={colors.question}>RESULT</Title>
        <Text>
          You got <Number>{correctAnswers}</Number> correct answers
        </Text>
        <Button
          text="Try again"
          color={colors.question}
          revert
          onClick={restartQuiz}
        />
      </CardContent>
    </CardStyled>
  );
};
