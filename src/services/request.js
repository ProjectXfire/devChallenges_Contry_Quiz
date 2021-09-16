export const getList = async () => {
  const response = await fetch(
    "https://restcountries.eu/rest/v2/all?fields=name;capital;flag;population"
  );
  const data = await response.json();
  return data;
};
