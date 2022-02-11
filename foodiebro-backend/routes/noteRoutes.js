import express from "express";
import {
  getNotes,
  CreateNote,
  DeleteNote,
} from "../controllers/noteController.js";
const router = express.Router();

router.route("/").post(getNotes);
router.route("/:id").delete(DeleteNote);
router.route("/create").post(CreateNote);

export default router;