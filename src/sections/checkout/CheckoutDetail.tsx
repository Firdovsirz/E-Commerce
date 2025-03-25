"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/reducers/rootReducer';
import CreditCard from "@/../public/assets/checkout/credit-card.png";
import Button from '@/components/Button/Button';

export default function CheckoutDetail() {
    const cartItems = useSelector((state: RootState) => state.cart.cartItems);
    const totalPrice = cartItems.reduce((acc, item) => acc + item.quantity * item.newPrice, 0);
    const shipping = totalPrice > 140 ? 0 : cartItems.length * 10;
    const [isChecked, setIsChecked] = useState(false);
    return (
        <section className='flex justify-evenly items-center py-20'>
            <div>
                <form action="">
                    <div className='mb-5 w-[300px]'>
                        <p className='mb-2'>First Name <span className='text-red-500'>*</span></p>
                        <input type="text" placeholder='Firdovsi Rzaev' style={{ background: "#f5f5f5" }} className='outline-none p-2 rounded w-full' />
                    </div>
                    <div className='mb-5 w-[300px]'>
                        <p className='mb-2'>Company Name {'(optional)'}</p>
                        <input type="text" placeholder='F.R' style={{ background: "#f5f5f5" }} className='outline-none p-2 rounded w-full' />
                    </div>
                    <div className='mb-5 w-[300px]'>
                        <p className='mb-2'>Street Name <span className='text-red-500'>*</span></p>
                        <input type="text" placeholder='Sulh' style={{ background: "#f5f5f5" }} className='outline-none p-2 rounded w-full' />
                    </div>
                    <div className='mb-5 w-[300px]'>
                        <p className='mb-2'>Apartment, floor, etc. {'(optional)'}</p>
                        <input type="text" placeholder='Apt' style={{ background: "#f5f5f5" }} className='outline-none p-2 rounded w-full' />
                    </div>
                    <div className='mb-5 w-[300px]'>
                        <p className='mb-2'>Town/City <span className='text-red-500'>*</span></p>
                        <input type="text" placeholder='Baku' style={{ background: "#f5f5f5" }} className='outline-none p-2 rounded w-full' />
                    </div>
                    <div className='mb-5 w-[300px]'>
                        <p className='mb-2'>Phone Number <span className='text-red-500'>*</span></p>
                        <input type="text" placeholder='+994554511870' style={{ background: "#f5f5f5" }} className='outline-none p-2 rounded w-full' />
                    </div>
                    <div className='mb-5 w-[300px]'>
                        <p className='mb-2'>Email Adress <span className='text-red-500'>*</span></p>
                        <input type="text" placeholder='firdovsirz@gmail.com' style={{ background: "#f5f5f5" }} className='outline-none p-2 rounded w-full' />
                    </div>
                    <label>
                        <label
                        >
                            <input
                                type="checkbox"
                                className='mr-2'
                            />
                        </label>
                        Save details for the next orders.
                    </label>
                </form>
            </div>
            <div className='w-[400px]'>
                {cartItems.map((item, index) => {
                    return (
                        <div className='w-full flex justify-between my-2'>
                            <div className='flex items-center'>
                                <Image src={`${item.image}`} alt={`${item.title}`} width={50} height={50} className='mr-2' />
                                <p>{item.title}</p>
                            </div>
                            <p>{item.newPrice}</p>
                        </div>
                    )
                })}
                <div className='flex justify-between my-6 py-2' style={{ borderBottom: '1px solid #a2a2a2' }}>
                    <p>Subtotal:</p>
                    <p>{`$${totalPrice}`}</p>
                </div>
                <div className='flex justify-between my-6 py-2' style={{ borderBottom: '1px solid #a2a2a2' }}>
                    <p>Shipping:</p>
                    <p>{shipping === 0 ? "Free" : shipping}</p>
                </div>
                <div className='flex justify-between my-6'>
                    <p>Total:</p>
                    <p>{totalPrice + shipping}</p>
                </div>
                <div className='w-full mb-10'>
                    <label className='flex justify-between mb-5'>
                        <div>
                            <input type="radio" id="payment-method-bank" name="payment-method" value="bank" className='mr-2' />
                            Bank
                        </div>
                        <Image src={CreditCard} alt='credit cards' />
                    </label>
                    <label>
                        <input type="radio" id="payment-method-cod" name="payment-method" value="cod" className='mr-2' />
                        Cash on Delivery
                    </label>
                </div>
                <Button width='150' content='Place Order' />
            </div>
        </section>
    )
}
