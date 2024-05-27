import express from "express";
import { Customer } from "../Controllers/CustomerController.js";

const router = express.Router();

router.get('/customer',Customer);

export default router; 