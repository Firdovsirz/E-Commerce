import React from 'react';
import Image from 'next/image';
import SecureIcon from "@/../public/assets/home/Icon-secure.png";
import DeliveryIcon from "@/../public/assets/home/icon-delivery.png";
import CustomerServiceIcon from "@/../public/assets/home/Icon-customer.png";

export default function HomeDetails() {
    return (
        <section className='w-full flex justify-center items-center'>
            <div className='w-[60%] flex justify-between items-center'>
                <div className='flex flex-col items-center justify-center'>
                    <div className='bg-[#C0C0C1] rounded-[50%] flex justify-center items-center w-[45px] h-[45px] mb-5'>
                        <div className='bg-black rounded-[50%] p-1 w-[30px] h-[30px]'>
                            <Image src={DeliveryIcon} alt='delivery' width={25} height={25}/>
                        </div>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <h3 className='font-bold'>FREE AND FAST DELIVERY</h3>
                        <p className='text-[12px]'>Free delivery for all orders over $140</p>
                    </div>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <div className='bg-[#C0C0C1] rounded-[50%] flex justify-center items-center w-[45px] h-[45px] mb-5'>
                        <div className='bg-black rounded-[50%] p-1 w-[30px] h-[30px]'>
                            <Image src={CustomerServiceIcon} alt='customer service' />
                        </div>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <h3 className='font-bold'>7/24 CUSTOMER SERVICE</h3>
                        <p className='text-[12px]'>Friendly 7/24 customer service</p>
                    </div>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <div className='bg-[#C0C0C1] rounded-[50%] flex justify-center items-center w-[45px] h-[45px] mb-5'>
                        <div className='bg-black rounded-[50%] p-1 w-[30px] h-[30px]'>
                            <Image src={SecureIcon} alt='money back guarantee' />
                        </div>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <h3 className='font-bold'>MONEY BACK GUARANTEE</h3>
                        <p className='text-[12px]'>We reurn money within 30 days</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
