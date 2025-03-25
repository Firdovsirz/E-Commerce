import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Qr from "@/../public/assets/footer/FR-qr.png";
import CopyrightIcon from '@mui/icons-material/Copyright';
import AppStore from "@/../public/assets/footer/app-store.png";
import SendIcon from "@/../public/assets/footer/icon-send.png";
import PlayStore from "@/../public/assets/footer/play-store.png";

export default function Footer() {
  return (
    <footer className='w-full bg-black py-[50px] px-[150px] mt-[70px]'>
        <div className='flex justify-between items-start'>
            <div className='text-white'>
                <h2 className='text-[25px] font-bold mb-5'>Exclusive</h2>
                <h3 className='font-bold my-5'>Subscribe</h3>
                <p className='mb-2'>Get 10% off your first order</p>
                <form action="" className='w-[200px] flex items-center justify-between p-2 rounded' style={{border: '1px solid white'}}>
                    <input type="email" placeholder='Enter your email' className='outline-none'/>
                    <button>
                        <Image src={SendIcon} alt='send icon' width={30} height={30}/>
                    </button>
                </form>
            </div>
            <div className='text-white'>
                <h2 className='text-[25px] font-bold mb-5'>Support</h2>
                <ul>
                    <li className='my-5 cursor-pointer'>Baku, Azerbaijan</li>
                    <li className='my-5 cursor-pointer'>firdovsirz@gmail.com</li>
                    <li className='my-5 cursor-pointer'>+994-55-451-18-70</li>
                </ul>
            </div>
            <div className='text-white'>
                <h2 className='text-[25px] font-bold mb-5'>Account</h2>
                <ul>
                    <li className='my-5 cursor-pointer'>My Account</li>
                    <li className='my-5 cursor-pointer'>Cart</li>
                    <li className='my-5 cursor-pointer'>Wishlist</li>
                    <li className='my-5 cursor-pointer'>Shop</li>
                </ul>
            </div>
            <div className='text-white'>
                <h2 className='text-[25px] font-bold mb-5'>Quick Link</h2>
                <ul>
                    <li className='my-5 cursor-pointer'>Privacy Policy</li>
                    <li className='my-5 cursor-pointer'>Terms of use</li>
                    <li className='my-5 cursor-pointer'>FAQ</li>
                    <li className='my-5 cursor-pointer'>Contact</li>
                </ul>
            </div>
            <div className='text-white'>
                <h2 className='text-[25px] font-bold mb-5'>Download App</h2>
                <p className='mb-5'>Save $3 with App New User Only</p>
                <div className='flex items-center'>
                    <Image src={Qr} alt='qr code' width={100} height={100}  className='mr-2'/>
                    <div>
                        <Image src={PlayStore} alt='play store' className='mb-2'/>
                        <Image src={AppStore} alt='app store'/>
                    </div>
                </div>
            </div>
        </div>
        <div className='w-full flex justify-center items-center text-white mt-15'>
            <CopyrightIcon className='text-white mr-2'/>
            <Link href={"https://frz-mu.vercel.app"}>
            <p>Copyright All right reserved. Developer by F.R</p>
            </Link>
        </div>
    </footer>
  )
}
