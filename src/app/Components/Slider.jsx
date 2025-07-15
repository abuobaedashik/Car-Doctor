'use client'
import React from 'react'
import { Swiper, SwiperSlide, } from "swiper/react";
import banner1 from '../../../public/assets/images/banner/6.jpg'
import banner2 from '../../../public/assets/images/banner/5.jpg'
import banner3 from '../../../public/assets/images/banner/4.jpg'
import banner4 from '../../../public/assets/images/banner/3.jpg'
import banner5 from '../../../public/assets/images/banner/2.jpg'
import banner6 from '../../../public/assets/images/banner/1.jpg'
import "swiper/css";
import Image from 'next/image';

export default function Slider() {
  return (
        <>
      <Swiper className="mySwiper">
        <SwiperSlide><Image src={banner1} className='w-full md:h-[750px] h-[400px] inset-0 bg-gradient-to-t from-black via-black/85 to-transparent rounded-3xl'/></SwiperSlide>
        <SwiperSlide><Image src={banner3} className='w-full md:h-[750px] h-[400px]  rounded-3xl'/></SwiperSlide>
        <SwiperSlide><Image src={banner2} className='w-full md:h-[750px] h-[400px] rounded-3xl'/></SwiperSlide>
        <SwiperSlide><Image src={banner4} className='w-full md:h-[750px] h-[400px] rounded-3xl'/></SwiperSlide>
        <SwiperSlide><Image src={banner6} className='w-full md:h-[750px] h-[400px] rounded-3xl'/></SwiperSlide>
        <SwiperSlide><Image src={banner5} className='w-full md:h-[750px] h-[400px] rounded-3xl'/></SwiperSlide>
      </Swiper>
    </> 
  );
}
