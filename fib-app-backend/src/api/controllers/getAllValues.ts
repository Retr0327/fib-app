import { Context } from "koa";
import { getAllValus } from "../services";

const handleGetAllValues = async (ctx: Context) => {
  const result = await getAllValus();

  const arrayOfValues = result?.map((value) => value.fib_number);

  const filtered = result?.filter(
    ({ fib_number }, index) => !arrayOfValues?.includes(fib_number, index + 1)
  );

  ctx.status = 200;
  ctx.body = { status: "success", data: filtered };
};

export default handleGetAllValues;
