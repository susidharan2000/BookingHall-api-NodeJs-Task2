const customer = [
    {customerName:"susi",RoomName:"luxuary suite",date:"02-08-2024",startTime:"11:00am",endTime:"10:00am"},
    {customerName:"ram",RoomName:"beach suite",date:"01-12-2023",startTime:"10:00am",endTime:"6:00pm"},
    {customerName:"jack",RoomName:"normal suite",date:"24-11-2023",startTime:"12:00am",endTime:"10:00pm"},
    {customerName:"Deo",RoomName:"luxuary suite",date:"05-03-2024",startTime:"10:00am",endTime:"04:00pm"},
    {customerName:"lissz",RoomName:"normal suite",date:"24-11-2023",startTime:"10:00am",endTime:"11:00pm"},
];

export const Customer = (req,res)=>{
    res.status(200).json({Message:"Customer Details",Data:customer});
}