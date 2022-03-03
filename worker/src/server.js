import Redis from "ioredis";
import keys from "./constants/keys.js";

function fib(index) {
  if (index < 2) return 1;
  return fib(index - 1) + fib(index - 2);
}

let { redisHost, redisPort } = keys;

const redis = new Redis(`redis://${redisHost}:${redisPort}`);
const redisSub = new Redis(`redis://${redisHost}:${redisPort}`);

redisSub.subscribe("insert", (err, count) => {
  if (err) {
    console.error("Failed to subscribe: %s", err.message);
  }
  console.log(`subscribed to ${count} channels.`);
});

redisSub.on("message", (channel, message) => {
  console.log(`Received ${message} from ${channel}`);
  redis.hset("values", message, fib(parseInt(message)));
});
