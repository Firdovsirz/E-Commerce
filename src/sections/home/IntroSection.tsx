import React from 'react';
import Image from 'next/image';
import IntroImg from '@/../public/assets/home/intro-img.png';

export default function IntroSection() {
  return (
    <section className='h-[400px] w-full flex justify-between items-start' style={{borderBottom: '1px solid #b9b9b9'}}>
        <aside className='flex justify-center items-center w-[20%] py-14' style={{borderRight: '1px solid #b9b9b9'}}>
            <ul>
                <li className='mb-2 cursor-pointer'>Women's Fashion</li>
                <li className='mb-2 cursor-pointer'>Men's Fashion</li>
                <li className='mb-2 cursor-pointer'>Electronics</li>
                <li className='mb-2 cursor-pointer'>Home & Lifestyle</li>
                <li className='mb-2 cursor-pointer'>Medicine</li>
                <li className='mb-2 cursor-pointer'>Sports & Outdoor</li>
                <li className='mb-2 cursor-pointer'>Baby's & Toys</li>
                <li className='mb-2 cursor-pointer'>Groceries & Pets</li>
                <li className='mb-2 cursor-pointer'>Health & Beauty</li>
            </ul>
        </aside>
        <div className='w-[80%] flex justify-center items-center p-10'>
            <Image src={IntroImg} alt="intro-img" />
        </div>
    </section>
  )
}
