import express from "express";
import cors from "cors"
import createRoom  from "./Routers/CreateRoomRouter.js";
import BookingRooms from "./Routers/BookingRoomRouter.js"
import BookedData from "./Routers/BookedDataRouter.js"
import Customer  from "./Routers/CustomerRouter.js";
import CustomerBooked from "./Routers/CustomerBookedRouter.js";

const app = express();
const PORT = 4000;

app.use(express.json());
app.use(cors());

app.use('/api',createRoom);
app.use('/api',BookingRooms);
app.use('/api',BookedData);
app.use('/api',Customer);
app.use('/api',CustomerBooked);

app.listen(PORT,()=>{
    console.log(`App is running on port  ${4000}`);
});