"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Button from '@/components/Button/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import { ToastContainer, toast } from 'react-toastify';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/redux/reducers/rootReducer';
import HeartBrokenIcon from '@mui/icons-material/HeartBroken';
import { removeFromCart, increaseQuantity, decreaseQuantity } from '@/redux/actions/actions';

export default function CartItems() {
    const dispatch = useDispatch();
    const cartItems = useSelector((state: RootState) => state.cart.cartItems);

    const totalPrice = cartItems.reduce((acc, item) => acc + item.quantity * item.newPrice, 0);
    const shipping = totalPrice > 140 ? 0 : cartItems.length * 10;

    const notify = (message: string) => toast.success(message, { autoClose: 1000 });

    const handleRemoveFromCart = (id: number) => {
        dispatch(removeFromCart(id));
        notify("Item removed from cart successfully!");
    };

    const handleIncreaseQuantity = (id: number) => {
        dispatch(increaseQuantity(id));
    };

    const handleDecreaseQuantity = (id: number, quantity: number) => {
        if (quantity === 1) {
            dispatch(removeFromCart(id));
            notify("Item removed from cart!");
        } else {
            dispatch(decreaseQuantity(id));
        }
    };

    return (
        <section className='w-full p-[50px] flex justify-evenly items-center'>
            {cartItems.length > 0 ? (
                <>
                    <div className='w-[80%]'>
                        <div className='mb-10 w-full'>
                            <ul className='flex'>
                                <li className='w-[350px]'>Product</li>
                                <li className='w-[200px] flex justify-start items-start'>Price</li>
                                <li className='w-[200px]'>Quantity</li>
                                <li className='w-[200px]'>Total Price</li>
                                <li className='w-[200px]'>Remove Item</li>
                            </ul>
                        </div>
                        <div>
                            {cartItems.map((item) => (
                                <div key={item.id} className='flex items-center my-[30px]'>
                                    <div className='flex items-center w-[350px] cursor-pointer'>
                                        <Image src={`${item.image}`} alt={`${item.title}`} width={80} height={80} className='mr-5' />
                                        {item.title}
                                    </div>
                                    <div className='w-[200px]'>
                                        {`$ ${item.newPrice}`}
                                    </div>
                                    <div className='w-[200px] flex items-center'>
                                        <button
                                            className='text-[25px] mr-5 flex justify-center items-center rounded h-[30px] w-[30px] cursor-pointer'
                                            style={{ border: '1px solid #a2a2a2', color: "#a2a2a2" }}
                                            onClick={() => handleDecreaseQuantity(item.id, item.quantity)}
                                        >-</button>
                                        <span className='text-[20px]'>{item.quantity}</span>
                                        <button
                                            className='text-[15px] ml-5 flex justify-center items-center rounded h-[30px] w-[30px] cursor-pointer'
                                            style={{ border: '1px solid #a2a2a2', color: "#a2a2a2" }}
                                            onClick={() => handleIncreaseQuantity(item.id)}
                                        >+</button>
                                    </div>
                                    <div className='w-[200px]'>{`$ ${item.quantity * item.newPrice}`}</div>
                                    <div className='w-[200px]'>
                                        <div className='w-[fit-content] bg-red-500 p-2 rounded' onClick={() => handleRemoveFromCart(item.id)}>
                                            <DeleteIcon className='text-white cursor-pointer' />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='rounded-[10px] p-3 w-[450px]' style={{ border: '1px solid #a2a2a2' }}>
                        <h2 className='font-bold mb-2'>Cart Total</h2>
                        <div className='mb-2 p-2  flex justify-between' style={{ borderBottom: '1px solid #a2a2a2' }}>
                            <p>Subtotal:</p> <p>{`$ ${totalPrice.toFixed(2)}`}</p>
                        </div>
                        <div className='mb-2 p-2 flex justify-between' style={{ borderBottom: '1px solid #a2a2a2' }}>
                            <p>Shipping:</p> <p>{shipping === 0 ? "Free" : `$ ${shipping}`}</p>
                        </div>
                        <div className='mb-2 p-2 flex justify-between'>
                            <p>Total:</p> <p>{`$ ${(totalPrice + shipping).toFixed(2)}`}</p>
                        </div>
                        <div className='w-full flex justify-between items-center mb-5'>
                            <form action="" className='flex justify-between w-full'>
                                <input type="text" placeholder='PROMO CODE' className='outline-none p-2 rounded' style={{ border: '1px solid #a2a2a2', width: "80%" }} />
                                <Button width='50' content='Apply' />
                            </form>
                        </div>
                        <Link href={"/checkout"}>
                            <Button width='230' content='Proceed to checkout' />
                        </Link>
                    </div>
                </>
            ) : (
                <div className='w-full flex flex-col justify-center items-center p-5'>
                    <HeartBrokenIcon className='mb-5' style={{ fontSize: "50px", color: "#a2a2a2" }} />
                    <h2 className='text-[30px] text-[#a2a2a2] mb-5'>There is no item in cart</h2>
                    <Link href={"/home"}>
                        <Button width='250' content='Continue Shopping' />
                    </Link>
                </div>
            )}
            <ToastContainer />
        </section>
    );
}