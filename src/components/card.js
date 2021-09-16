import React from "react";
// Utils
import { colors } from "../utils/colors";
// Styles
import {
  Card as CardStyled,
  CardContent,
  CardOptions,
  CardActions,
  Flag,
} from "../styles/card";
import { Title, Text, QuizImage } from "../styles/shared";
// Images
import adventure from "../images/undraw_adventure_4hum 1.svg";
// Components
import { Option } from "../components/option";
import { Button } from "../components/button";

export const Card = ({
  nextQuestion,
  questionOptions,
  selectOption,
  correctAnswer,
  myAnswer,
  blockOptions,
  showNextButton,
}) => {
  return (
    <CardStyled>
      <Title>
        COUNTRY QUIZ <QuizImage src={adventure} alt="adventure" />
      </Title>
      {questionOptions && (
        <CardContent>
          {questionOptions.correctOption.flag && (
            <Flag src={questionOptions.correctOption.image} alt="flag" />
          )}
          <Text>{questionOptions.correctOption.question}</Text>
          <CardOptions>
            {questionOptions.options.map((option, index) => {
              return (
                <Option
                  key={index}
                  optionText={option.name}
                  letter={option.letter}
                  onClick={() => selectOption(option.name)}
                  disabled={blockOptions}
                  colorAnswer={correctAnswer === index ? true : false}
                  incorrectAnswer={
                    correctAnswer !== myAnswer && index === myAnswer
                      ? true
                      : false
                  }
                />
              );
            })}
          </CardOptions>
          <CardActions>
            {showNextButton && (
              <Button
                type="button"
                onClick={() => nextQuestion()}
                text="Next"
                color={colors.button}
              />
            )}
          </CardActions>
        </CardContent>
      )}
    </CardStyled>
  );
};
