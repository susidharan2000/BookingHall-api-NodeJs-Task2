import express from "express";
import { createRoom, Rooms } from "../Controllers/CreateRoomController.js";


const router = express.Router();

router.get('/Rooms',Rooms)
router.post('/createRoom',createRoom);

export default router;