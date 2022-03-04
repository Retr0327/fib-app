import Redis from "ioredis";
import keys from "../constants/keys.js";

let { redisHost, redisPort } = keys;

const redisSubscriber = new Redis(`redis://${redisHost}:${redisPort}`);

export default redisSubscriber;
