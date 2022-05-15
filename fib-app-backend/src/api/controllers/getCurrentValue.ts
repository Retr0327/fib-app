import { Context } from "koa";
import { redisCli } from "../models";

const handleGetCurrentValue = async (ctx: Context) => {
  const result: string[] = await new Promise((resolve, reject) => {
    redisCli.hgetall("values", (error, result) => {
      if (error) {
        return reject(error);
      }

      const value = Object.values(result!);
      return resolve(value);
    });
  });

  ctx.body = 200;
  ctx.body = { status: "success", data: result[0] };
};

export default handleGetCurrentValue;
