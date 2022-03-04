import Redis from "ioredis";
import keys from "../constants/keys.js";

let { redisHost, redisPort } = keys;

const redis = new Redis(`redis://${redisHost}:${redisPort}`);

export default redis;
