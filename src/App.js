import { useEffect, useState } from "react";
// Services
import { getList } from "./services/request";
// Utils
import { createQuestion } from "./utils/questions";
// Components
import { Container } from "./components/container";
import { Card } from "./components/card";
import { Result } from "./components/result";

function App() {
  const [states, setStates] = useState({
    countries: [],
    questionOptions: null,
    correctAnswer: -1,
    myAnswer: -1,
    blockOptions: false,
    showNextButton: false,
    correctAnswers: 0,
    showResults: false,
  });

  useEffect(() => {
    getList()
      .then((data) => {
        const question = createQuestion(data);
        setStates({ ...states, countries: data, questionOptions: question });
      })
      .catch((error) => console.log(error));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const nextQuestion = () => {
    if (states.correctAnswer !== states.myAnswer) {
      setStates({ ...states, showResults: true });
    } else {
      const question = createQuestion(states.countries);
      setStates({
        ...states,
        questionOptions: question,
        blockOptions: false,
        correctAnswer: -1,
        myAnswer: -1,
        showNextButton: false,
      });
    }
  };

  const selectOption = (optionSelected) => {
    const getAnswer = states.questionOptions.options.findIndex(
      (option) => option.name === states.questionOptions.correctOption.answer
    );
    const getMyAnswer = states.questionOptions.options.findIndex(
      (option) => option.name === optionSelected
    );
    if (optionSelected === states.questionOptions.correctOption.answer) {
      let points = states.correctAnswers;
      points++;
      setStates({
        ...states,
        correctAnswer: getAnswer,
        blockOptions: true,
        showNextButton: true,
        myAnswer: getMyAnswer,
        correctAnswers: points,
      });
    } else {
      setStates({
        ...states,
        correctAnswer: getAnswer,
        myAnswer: getMyAnswer,
        blockOptions: true,
        showNextButton: true,
      });
    }
  };

  const restartQuiz = () => {
    const question = createQuestion(states.countries);
    setStates({
      ...states,
      questionOptions: question,
      blockOptions: false,
      correctAnswer: -1,
      myAnswer: -1,
      showNextButton: false,
      correctAnswers: 0,
      showResults: false,
    });
  };

  return (
    <Container>
      {states.showResults ? (
        <Result
          correctAnswers={states.correctAnswers}
          restartQuiz={restartQuiz}
        />
      ) : (
        <Card
          nextQuestion={nextQuestion}
          questionOptions={states.questionOptions}
          selectOption={selectOption}
          correctAnswer={states.correctAnswer}
          myAnswer={states.myAnswer}
          blockOptions={states.blockOptions}
          showNextButton={states.showNextButton}
        />
      )}
    </Container>
  );
}

export default App;
