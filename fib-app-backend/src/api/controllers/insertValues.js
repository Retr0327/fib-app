import { redisCli, redisPublisher } from "../model/index.js";
import { createValusByFibIndex } from "../services/valueServices.js";

const handleInsertValues = async (req, res) => {
  const { index } = req.body;

  if (parseInt(index) > 40) {
    return res.status(422).json({ status: "failed", msg: "Index too high!" });
  }

  await redisCli.hSet("values", index, parseInt(index));
  // await redisCli.hset('values', index, 'Nothing yet!');

  await redisPublisher.publish("insert", parseInt(index));

  await createValusByFibIndex(parseInt(index));

  return res.status(201).json({ status: "success", working: true });
};

export default handleInsertValues;
