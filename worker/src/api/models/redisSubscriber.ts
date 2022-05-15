import Redis from "ioredis";

export const redisConfig = () => {
  if (process.env.NODE_ENV === "production") {
    return `redis://${process.env.REDIS_HOST}:${process.env.REDIS_PORT}`;
  }
  return "";
};

const redisSubscriber = new Redis(redisConfig());

export default redisSubscriber;
