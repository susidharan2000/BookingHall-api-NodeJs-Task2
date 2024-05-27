const CustomerBooked = [
    {CustomerName:"susi",RoomName:"luxuary suite",Data:"02-03-2023",StartTime:"10:00am",EndTime:"12:00am",BookingId:101,BookingData:"02-12-2020",BookingStatus:"completed"},
    {CustomerName:"jack",RoomName:"normal suite",Data:"10-09-2023",StartTime:"11:00am",EndTime:"10:00am",BookingId:102,BookingData:"09-11-2023",BookingStatus:"pending"},
    {CustomerName:"leo",RoomName:"beach suite",Data:"10-09-2023",StartTime:"11:00am",EndTime:"10:00am",BookingId:103,BookingData:"09-11-2023",BookingStatus:"pending"},
    {CustomerName:"nick",RoomName:"normal suite",Data:"07-11-2023",StartTime:"01:00am",EndTime:"05:00pm",BookingId:104,BookingData:"09-11-2023",BookingStatus:"completed"},
];

export const CustomersBooked = (req,res)=>{
    res.status(200).json({Message:"Customers Booked",Data:CustomerBooked});
}