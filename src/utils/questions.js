import { randomNumbers } from "./randomNumbers";

const questions = [
  {
    name: "capital",
    text: " is the capital of",
  },
  /*{
    name: "flag",
    text: "Which country does this flag belong to?",
  },
  {
    name: "population",
    text: " - Which population does this country have?",
  },*/
];

// Options format
export const getOptions = (data, typeQuestion) => {
  let options = [];
  let letter = "A";
  data.forEach((option) => {
    if (typeQuestion === "capital" || typeQuestion === "flag") {
      options.push({
        name: option.name,
        letter,
      });
    }
    if (typeQuestion === "population") {
      options.push({
        name: option.population,
        letter,
      });
    }
    const letterChartCode = letter.charCodeAt(0);
    const nextLetter = String.fromCharCode(letterChartCode + 1);
    letter = nextLetter;
  });
  return options;
};

// Create question with their options
export const createQuestion = (data) => {
  const randomQuestion = 0;
  const oneOption = randomNumbers(3);

  const allOptions = [];
  const randomAppear = [];
  for (let i = 0; i < 4; i++) {
    let exist = false;
    const randomCountry = randomNumbers(249);
    do {
      exist = randomAppear.some((value) => value === randomCountry);
    } while (exist);
    randomAppear.push(randomCountry);
    allOptions.push(data[randomCountry]);
  }

  const country = allOptions[oneOption];
  const question = questions[randomQuestion];

  switch (question.name) {
    case "capital": {
      const options = getOptions(allOptions, "capital");
      return {
        correctOption: {
          question: country.capital + question.text,
          flag: false,
          answer: country.name,
        },
        options,
      };
    }
    /*case "flag": {
      const options = getOptions(allOptions, "flag");
      return {
        correctOption: {
          question: question.text,
          flag: true,
          image: country.flag,
          answer: country.name,
        },
        options,
      };
    }
    case "population": {
      const options = getOptions(allOptions, "population");
      return {
        correctOption: {
          question: country.name + question.text,
          flag: false,
          answer: country.population,
        },
        options,
      };
    }*/
    default: {
      return {
        correctOption: {
          question: "",
          flag: false,
          answer: "",
        },
        option: [],
      };
    }
  }
};
