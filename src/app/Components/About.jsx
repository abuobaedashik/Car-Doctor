import Image from 'next/image'
import React from 'react'
import person from '../../../public/assets/images/about_us/person.jpg'
import parts from '../../../public/assets/images/about_us/parts.jpg'

export default function About() {
  return (
    <div className='flex  md:flex-row flex-col gap-[150px] md:gap-2 '>
      <div className="img md:w-[50%] w-full mx-auto  ">
        <div className="person-img relative">
          <Image src={person} className='md:w-[650px] w-[480px] h-[500px] md:h-[680px]' />
          <Image src={parts} className='md:w-[400px] w-[275px] md:h-[400px] h-[200px] absolute md:-bottom-[80px] -bottom-[60px] left-[80px] md:left-[340px] border-t-4 border-l-4 border-[#ffffff] rounded-lg' />
        </div>
      </div>
      <div className="text md:w-[50%] w-full mx-auto  pl-16 ">
        <div className="text-box w-[600px]">
          <h1 className="text-2xl font-bold text-[#ff3812] my-3 ">About Us</h1>
          <h1 className="text-5xl font-bold text-[#131313]">We are qualified & of experience in this field</h1>
          <h1 className="text-2xl mt-5 font-medium text-[#737373]">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </h1>
          <h1 className="text-2xl mt-3 font-medium text-[#737373]">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </h1>
          <button className="mt-5 text-xl px-4 py-3 rounded-lg font-bold text-[#FFFFFF] bg-[#FF3811]">Get More Info</button>
        </div>
      </div>
    </div>
  )
}
