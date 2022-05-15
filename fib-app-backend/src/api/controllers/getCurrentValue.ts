import { Context } from "koa";
import { redisCli } from "../models";

const handleGetCurrentValue = async (ctx: Context) => {
  redisCli.hgetall("values", (error, result) => {
    if (error) {
      ctx.status = 500;
      ctx.body = { status: "failed" };
      return;
    }

    ctx.body = 200;
    ctx.body = { status: "success", data: result };
  });
};

export default handleGetCurrentValue;
