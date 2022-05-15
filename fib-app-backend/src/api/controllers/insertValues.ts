import { Context } from "koa";
import { redisCli, redisPublisher } from "../models";
import { createValusByFibIndex } from "../services";

type ReuqestValue = {
  index: string;
};

const handleInsertValues = async (ctx: Context) => {
  const { index }: ReuqestValue = ctx.request.body;

  if (parseInt(index) > 40) {
    ctx.status = 422;
    ctx.body = { status: "failed", msg: "Index too high!" };
    return;
  }

  await Promise.all([
    redisCli.hset("values", index, parseInt(index)),
    redisPublisher.publish("insert", index),
    createValusByFibIndex(parseInt(index)),
  ]);

  ctx.status = 201;
  ctx.body = { status: "success", working: true };
};

export default handleInsertValues;
