"use client"
import React, { useState, useEffect } from 'react';
import Dynamictitle from '../Common-Component/Dynamictitle';
import { GoArrowRight } from "react-icons/go";
import dbconnect from '@/Liberary/Dbconnect';


export default function Services() {
    const [services, setServices] = useState([]);

    useEffect(() => {
        const getService = async () => {
            // const serviceCollection =dbconnect('CarDoctor')
            // const data =serviceCollection.find({}).toArray()
            const res = await fetch('/services.json');
            const data = await res.json();
            console.log(data);
            setServices(data);
        };

        getService();
    }, []);

    return (
        <div>
            <Dynamictitle
                title="Services"
                maintitle="Our Service Area"
                description="the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
            />
            <div className="mt-12">
                <div className='grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-7 '>
                    {services.map((eService) => {
                        return (<>
                            <div>
                                <div className=" bg-base-100  shadow-sm rounded-2xl">
                                    <figure className='p-5 rounded-3xl'>
                                        <img
                                            src={eService.img}
                                            alt="Shoes"
                                            className='rounded-2xl h-[300px] w-full' />
                                    </figure>
                                    <div className="p-5 flex items-center justify-between gap-2">
                                        <div className="left">
                                            <h2 className='text-3xl font-bold text-[#151515]'>{eService.title}</h2>
                                            <h2 className='text-2xl font-bold text-[#FF3811] '>Price:{eService.price}</h2>
                                        </div>
                                        <div className="right">
                                            <button className="arrow text-[#FF3811] font-bold text-3xl">
                                                 <GoArrowRight />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>)
                    })}
                </div>
            </div>
        </div>
    );
}
