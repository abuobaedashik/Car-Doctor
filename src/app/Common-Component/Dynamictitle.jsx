import React from 'react'

export default function Dynamictitle({title,maintitle,description}) {
  return (
    <div className='text-center flex flex-col items-center justify-center'>
         <div className="title text-2xl font-bold text-[#ff3812]  mb-1">{title}</div>
         <div className="subtitle text-[#131313] text-5xl font-bold mt-3" >{maintitle}</div>
         <div className="discription text-[#737373] font-medium text-xl mt-3 mb-5 max-w-[650px] ">{description}</div>
    </div>
  )
}

// MONGODB_URI="mongodb+srv://CarDoctor:uMDlowWXmn517aNy@cluster0.g1qcw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
// DB_Name=CarDoctorDB
