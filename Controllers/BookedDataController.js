const BookedData = [
    {RoomName:"luxuary suite",BookedStatus:true,CustomerName:"susi",Data:"02-03-2023",StartTime:"10:00am",EndTime:"12:00am"},
    {RoomName:"normal suit",BookedStatus:true,CustomerName:"rajesh",Data:"023-04-2023",StartTime:"11:00am",EndTime:"10:00am"},
    {RoomName:"beach suit",BookedStatus:false,CustomerName:"jack",Data:"29-10-2023",StartTime:"12:00am",EndTime:"05:00pm"},
    {RoomName:"luxuary suite",BookedStatus:true,CustomerName:"sparrow",Data:"19-08-2023",StartTime:"12:00am",EndTime:"05:00pm"},
    {RoomName:"beach Suite",BookedStatus:true,CustomerName:"deo",Data:"1-012-2024",StartTime:"09:00am",EndTime:"10:00pm"},
];

export const bookedData = (req,res)=>{
    res.status(200).json({Message:"Booked Data",Data:BookedData});
}

