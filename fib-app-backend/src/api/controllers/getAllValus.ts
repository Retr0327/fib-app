import { Context } from "koa";
import { getAllValus } from "../services";

const handleGetAllValues = async (ctx: Context) => {
  const result = await getAllValus();
  ctx.status = 200;
  ctx.body = { status: "success", data: result };
};

export default handleGetAllValues;
