import React, { useEffect, useState } from "react";
import FibPageForm from "./FibPageForm";
import { CircularProgress } from "@mui/material";
import { getCurrentValues, getIndexes } from "../../service";

function FibPageController() {
  const [values, setValues] = useState({});
  const [seenIndex, setSeenIndex] = useState([]);
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const fetch_data_promise = await Promise.all([
        getCurrentValues(),
        getIndexes(),
      ]);

      const [valuesResult, indexesResult] = [
        fetch_data_promise[0],
        fetch_data_promise[1],
      ];

      setValues(valuesResult.data);
      setSeenIndex((prev) => [...prev, indexesResult.data]);
      setFetching(false);
    };

    fetchData();
  }, []);

  if (fetching) {
    return <CircularProgress />;
  }

  return <FibPageForm seenIndex={seenIndex} values={values} />;
}

export default FibPageController;
