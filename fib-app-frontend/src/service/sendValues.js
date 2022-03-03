import customFetch from "./customFetch";

const sendValues = async (credentials) => {
  const url = "/api/values";
  return customFetch({ method: "POST", url, credentials });
};

export default sendValues;
