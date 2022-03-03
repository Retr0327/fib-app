import { getAllValus } from "../services/valueServices.js";

const handleGetAllValues = async (req, res) => {
  const values = await getAllValus();
  return res.status(200).json({ status: "success", data: values });
};

export default handleGetAllValues;
