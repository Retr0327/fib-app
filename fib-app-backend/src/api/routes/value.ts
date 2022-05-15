import {
  handleGetAllValues,
  handleGetCurrentValue,
  handleInsertValues,
} from "../controllers";
import KoaRouter from "@koa/router";

const router = new KoaRouter({ prefix: "/values" });

router.post("/", handleInsertValues);
router.get("/all", handleGetAllValues);
router.get("/current", handleGetCurrentValue);

export { router as valueRoute };
