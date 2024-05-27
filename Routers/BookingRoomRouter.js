import express from "express"
import { Bookings, BookRooms } from "../Controllers/BookingRoomController.js";


const router = express.Router();

router.get('/bookings',Bookings);

router.post('/bookRooms',BookRooms);

export default router;