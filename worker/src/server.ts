import { fibonacci } from "./api/helper";
import { redisCli, redisSubscriber } from "./api/models";

redisSubscriber.subscribe("insert", (err, count) => {
  if (err) {
    console.error("Failed to subscribe: %s", err.message);
  }
  console.log(`subscribed to ${count} channels.`);
});

redisSubscriber.on("message", (channel, message) => {
  console.log(`Received ${message} from ${channel}`);
  redisCli.hset("values", message, fibonacci(parseInt(message)));
});
