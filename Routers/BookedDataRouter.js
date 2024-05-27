import express from "express";
import { bookedData } from "../Controllers/BookedDataController.js";

const router = express.Router();

router.get('/bookedData',bookedData);

export default router;