const bookingRoom = [
    {customerName:"susi",date:"02-08-2024",startTime:"11:00am",endTime:"10:00am",roomId:1}
];

export const Bookings = (req,res)=>{
    res.status(200).json({Message:"Bookings",Data:bookingRoom});
}

export const BookRooms = (req,res)=>{
    const {customerName,date,startTime,endTime,roomId} = req.body;

    const isBooked = bookingRoom.find(booking =>
        booking.roomId === roomId &&
        booking.date === date
    );

    if(isBooked){
        res.status(200).send("Room already booked for this time slot.");
    }else{
    const newBooking = {
        customerName:customerName,
        date:date,
        startTime:startTime,
        endTime:endTime,
        roomId:roomId
    }
    bookingRoom.push(newBooking);
    res.status(200).json({Message:"Room Bookings",Data: newBooking});
}
}