import { redisCli } from "../model/index.js";

const handleGetCurrentValue = async (req, res) => {
  redisCli.hGetAll("values", (error, values) => {
    if (error) {
      return res.status(500).json({ status: "failed" });
    }

    return res.status(200).json({ status: "success", data: values });
  });
};

export default handleGetCurrentValue;
