import fetcher from "./fetcher";
import { API } from "src/constants";
import { CredentialsType } from "types";

const createFibValues = async (credentials: CredentialsType) => {
  const url = `${API}/values`;

  try {
    const result = await fetcher({ method: "POST", url, credentials });
    return [result, null];
  } catch (error) {
    console.error("createFibValues: ", error);
    return [null, error];
  }
};

export default createFibValues;
