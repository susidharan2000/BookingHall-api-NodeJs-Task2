import express from "express";
import { CustomersBooked } from "../Controllers/CustomerBookedComtroller.js";

const router = express.Router();

router.get('/customerbooked',CustomersBooked);

export default router;