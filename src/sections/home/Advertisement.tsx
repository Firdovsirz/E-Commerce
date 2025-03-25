import React from 'react';
import Image from 'next/image';
import JBL from "@/../public/assets/home/jbl.png";

export default function Advertisement() {
    return (
        <section className="w-[90%] h-[600px] px-50 mt-20 py-10" style={{ margin: '50px auto' }}>
            <div className=' flex justify-between bg-black w-[100%] h-[100%] p-[50px] rounded'>
                <div className='flex flex-col justify-between items-start'>
                    <h3 className='text-[50px] text-white w-[400px] mb-10'>Enhance Your Music Experience</h3>
                    <div className='flex items-center mb-10'>
                        <div className='bg-white rounded-[50%] w-[70px] h-[70px] flex flex-col justify-center items-center p-[10px] mx-3'>
                            <p>2</p>
                            <p className=''>Days</p>
                        </div>
                        <div className='bg-white rounded-[50%] w-[70px] h-[70px] flex flex-col justify-center items-center p-[10px] mx-3'>
                            <p>20</p>
                            <p>Hours</p>
                        </div>
                        <div className='bg-white rounded-[50%] w-[70px] h-[70px] flex flex-col justify-center items-center p-[10px] mx-3'>
                            <p>16</p>
                            <p>Minutes</p>
                        </div>
                        <div className='bg-white rounded-[50%] w-[70px] h-[70px] flex flex-col justify-center items-center p-[10px] mx-3'>
                            <p>32</p>
                            <p>Seconds</p>
                        </div>
                    </div>
                    <button 
                    className='w-[200px] h-[50px] text-[#000] w-[150px] h-[40px] bg-[#00FF66] text-white rounded p-5 flex justify-center items-center cursor-pointer hover:bg-[transparent]'
                    style={{border: '1px solid #00FF66', transition: 'all 400ms'}}>
                        Buy Now!
                    </button>
                </div>
                <div className='flex justify-center items-center rounded-lg'>
                    <Image src={JBL} alt='jbl'/>
                </div>
            </div>
        </section>
    )
}