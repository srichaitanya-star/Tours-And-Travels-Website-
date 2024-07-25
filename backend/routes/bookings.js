import express from "express";
import {
  createBooking,
  getAllBooking,
  getBooking,
} from "../controllers/bookingController.js";

import { adminAuth, userAuth } from "../utils/verifyToken.js";

const router = express.Router();

router.post("/", userAuth, createBooking);
router.get("/:id", userAuth, getBooking);
router.get("/", adminAuth, getAllBooking);

export default router;
