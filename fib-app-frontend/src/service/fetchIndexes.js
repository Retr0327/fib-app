import customFetch from "./customFetch";

const getIndexes = async (credentials) => {
  const url = "/api/values/all";
  return customFetch({ method: "GET", url, credentials });
};

export default getIndexes;
