import redisCli from "./redisCli.js";

const redisSubscriber = redisCli.duplicate();

await redisSubscriber.connect();

export default redisSubscriber;
