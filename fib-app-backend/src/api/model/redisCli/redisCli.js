import redis from "redis";
import keys from "../../constants/keys.js";

let { redisHost, redisPort } = keys;

const redisConfig = {
  url: `redis://${redisHost}:${redisPort}`,
  retry_strategy: () => 1000,
  legacyMode: true, // so that we can get redisCli in the current project
};

const redisCli = redis.createClient(redisConfig);

await redisCli.connect();

export default redisCli;
