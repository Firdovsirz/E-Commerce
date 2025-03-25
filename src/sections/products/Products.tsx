"use client";

import React from 'react';
import Image from 'next/image';
import Button from '@/components/Button/Button';
import { addToCart } from "@/redux/actions/actions";
import { Pagination, Autoplay } from "swiper/modules";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { RootState } from "@/redux/reducers/rootReducer";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

interface Product {
    id: number;
    title: string;
    oldPrice: number;
    newPrice: number;
    commentCount: number;
    discount: number;
    image: string | undefined;
}

export default function Products() {
    const products: Product[] = [
        {
            id: 1,
            title: "HAVIT HV-G92 Gamepad",
            oldPrice: 160,
            newPrice: 120,
            commentCount: 88,
            discount: 40,
            image: "/assets/products/havit-hv-g92-gamepad.png",
        },
        {
            id: 2,
            title: "AK-900 Wired Keyboard",
            oldPrice: 1160,
            newPrice: 960,
            commentCount: 75,
            discount: 35,
            image: "/assets/products/ak-900-wired-keyboard.png",
        },
        {
            id: 3,
            title: "IPS LCD Gaming Monitor",
            oldPrice: 400,
            newPrice: 370,
            commentCount: 99,
            discount: 30,
            image: "/assets/products/ipc-lcd-gaming-monitor.png",
        },
        {
            id: 4,
            title: "Comfort Chair",
            oldPrice: 250,
            newPrice: 220,
            commentCount: 26,
            discount: 20,
            image: "/assets/products/comfort-chair.png",
        },
        {
            id: 5,
            title: "Book Shelf",
            oldPrice: 1500,
            newPrice: 1250,
            commentCount: 75,
            discount: 25,
            image: "/assets/products/bookshelf.png",
        },
        {
            id: 6,
            title: "Gucci Bag",
            oldPrice: 3500,
            newPrice: 3000,
            commentCount: 75,
            discount: 30,
            image: "/assets/products/gucci-bag.png",
        },
        {
            id: 7,
            title: "Liquid Cooler",
            oldPrice: 4500,
            newPrice: 3550,
            commentCount: 90,
            discount: 35,
            image: "/assets/products/liquid-cooler.png",
        },
    ];
    const dispatch = useDispatch();
    const cartItems = useSelector((state: RootState) => state.cart.cartItems);
    const notify = () => toast.success("Item added to the cart successfully!", { autoClose: 1000 });
    const handleAddToCart = (product: Product) => {
        const cartItem = {
            ...product,
            quantity: 1,
        };
        dispatch(addToCart(cartItem));
        console.log(cartItems);
        notify();
    };
    return (
        <section className='w-[80%] h-[80vh] flex justify-center items-center ml-[10px] rounded' style={{background: "#fff"}}>
            <div className='w-[80%] h-[100%] overflow-scroll flex flex-wrap justify-start items-center'>
                {products.map((product, index) => {
                    return (
                        <div className="w-[260px] rounded m-10" style={{ boxShadow: "2px 2px 10px #b9b9bb9"}}>
                            <div
                                className="relative w-[258px] h-[250px] flex items-center justify-center"
                                style={{ background: "#f5f5f5" }}
                            >
                                <div
                                    className="absolute top-[10px] left-[20px] w-[fit-content] px-3 py-1 rounded text-white"
                                    style={{ background: "#db4444" }}
                                >
                                    {`-${product.discount}%`}
                                </div>
                                <FavoriteBorderIcon className="absolute top-[20px] right-[20px] cursor-pointer" />
                                <Image src={`${product.image}`} alt={`${product.title}`} width={150} height={150} />
                            </div>
                            <div className="px-1 py-5">
                                <h3>{product.title}</h3>
                                <div className="flex items-center mb-[10px]">
                                    <p className="mr-[20px] font-bold" style={{ color: "#db4444" }}>
                                        {`$${product.newPrice}`}
                                    </p>
                                    <p className="text-gray-500 line-through">{`$${product.oldPrice}`}</p>
                                </div>
                                <div className="flex items-center justify-start mb-[40px]">
                                    <Image src={"/5-star.jpg"} alt="5-star" width={100} height={50} />
                                    <p className="mt-1 ml-2">{`(${product.commentCount})`}</p>
                                </div>
                                <Button width="250" content="Add to Cart" onClick={() => handleAddToCart(product)} />
                            </div>
                        </div>
                    )
                })}
            </div>
            <ToastContainer />
        </section>
    )
}
