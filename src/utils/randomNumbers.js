export const randomNumbers = (range) => {
  range++;
  const number = Math.floor(Math.random() * range);
  return number;
};
