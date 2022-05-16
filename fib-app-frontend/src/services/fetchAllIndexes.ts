import fetcher from "./fetcher";
import { EXTERNAL_API } from "src/constants";

const fetchAllIndexes = async () => {
  const url = `${EXTERNAL_API}/values/all`;

  try {
    const result = await fetcher({ method: "GET", url });
    return [result, null];
  } catch (error) {
    console.error("createShortURL: ", error);
    return [null, error];
  }
};

export default fetchAllIndexes;
