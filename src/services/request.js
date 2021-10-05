export const getList = async () => {
  console.log(process.env.REACT_APP_API_KEY);
  const response = await fetch(
    `http://api.countrylayer.com/v2/all?access_key=${process.env.REACT_APP_API_KEY}`
  );
  const data = await response.json();
  return data;
};
