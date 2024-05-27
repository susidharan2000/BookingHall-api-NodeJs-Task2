const Room = [
    {
        roomId:1,
        NumberOFSeats:20,
        Animities:["beach View","bathTub","coffee Maker","swimming pool"],
        PricePerHr:"200.00"
    }
];
export const Rooms = (req,res)=>{
    res.status(200).json({Message:"Rooms Detail",Data:Room});
}
export const createRoom = (req,res)=>{
    const {NumberOFSeats,Animities,PricePerHr} = req.body;
    const newRoom = {
        id:Room.length + 1,
        NumberOFSeats:NumberOFSeats,
        Animities:Animities,
        PricePerHr:PricePerHr
    }
    Room.push(newRoom);
    res.status(200).json({Message:"Room Created Successfully",Data:newRoom});
}