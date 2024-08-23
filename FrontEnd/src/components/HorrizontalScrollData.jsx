import React, { useRef } from 'react'
import Card from '../components/Card'
import { FaAngleRight } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa";


const HorrizontalScrollData = ({ data = [], heading ,trending,media_type }) => {
    const containerRef=useRef()

    const handleNext=()=>{
        containerRef.current.scrollLeft +=300
    }
    const handleprev=()=>{
        containerRef.current.scrollLeft -=300
    }
    return (
        <div className='container mx-auto px-3 my-10'>
            <h2 className='text-xl lg:text-2xl font-bold mb-2 text-white lg:mx-10'>{heading}</h2>
            <div className='relative'>
                <div ref={containerRef} className='grid lg:mx-10 grid-cols-[repeat(auto-fit,230px)] grid-flow-col gap-5  overflow-hidden relative z-10 overflow-x-scroll scroll-smooth transition-all scrollbar-none'>
                    {
                        data.map((data, index) => {
                            return (
                                <Card key={data.id + "heading" + index} data={data} index={index + 1} trending={trending} media_type={media_type} />
                            )
                        })
                    }
                </div>
                <div className='absolute top-0 hidden lg:flex justify-between w-full h-full items-center '>
                    <button onClick={handleprev} className='bg-white text-black p-1 rounded-full'><FaAngleLeft /></button>
                    <button onClick={handleNext} className='bg-white text-black p-1 rounded-full'>< FaAngleRight/></button>

                </div>
            </div>

        </div>
    )
}

export default HorrizontalScrollData