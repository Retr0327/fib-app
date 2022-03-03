import redisCli from "./redisCli.js";

const redisPublisher = redisCli.duplicate();

await redisPublisher.connect();

export default redisPublisher;
