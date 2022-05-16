import { Context } from "koa";
import { redisCli } from "../models";

type RedisResultType = {
  index: string;
  fib: string;
}[];

const handleGetCurrentValue = async (ctx: Context) => {
  const redisResult: RedisResultType = await new Promise((resolve, reject) => {
    redisCli.hgetall("values", (error, result) => {
      if (error) {
        return reject(error);
      }
      const keys = Object.keys(result!);

      const resultObj = keys.map((value) => {
        return {
          index: value,
          fib: result![value],
        };
      });

      return resolve(resultObj);
    });
  });

  ctx.body = 200;
  ctx.body = { status: "success", data: redisResult };
};

export default handleGetCurrentValue;
