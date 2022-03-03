import { Router } from "express";
import {
  handleGetAllValues,
  handleGetCurrentValue,
  handleInsertValues,
} from "../controllers/index.js"; 

const router = Router();
 
router.post("/", handleInsertValues);
router.get("/all", handleGetAllValues);
router.get("/current", handleGetCurrentValue);

export { router as values };
