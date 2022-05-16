import fetcher from "./fetcher";
import { EXTERNAL_API } from "src/constants";

const fetchCurrentValues = async () => {
  const url = `${EXTERNAL_API}/values/current`;

  try {
    const result = await fetcher({ method: "GET", url });
    return [result, null];
  } catch (error) {
    console.error("createShortURL: ", error);
    return [null, error];
  }
};

export default fetchCurrentValues;
