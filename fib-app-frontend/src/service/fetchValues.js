import customFetch from "./customFetch";

const getCurrentValues = async (credentials) => {
  const url = "/api/values/current";
  return customFetch({ method: "GET", url, credentials });
};

export default getCurrentValues;
