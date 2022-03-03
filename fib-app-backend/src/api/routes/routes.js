import { Router } from "express";
import { values } from "./values.js";

const routes = Router();

routes.get("/", (req, res) => {
  console.log(req.get("host"));
  return res.send({ data: req.get("host") });
});

routes.use("/values", values);

export default routes;
