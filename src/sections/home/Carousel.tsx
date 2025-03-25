"use client";

import "swiper/css";
import Link from "next/link";
import Image from "next/image";
import "swiper/css/pagination";
import Button from "@/components/Button/Button";
import Product from "@/components/Product/Product";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
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

export default function Carousel() {
    const [slidesPerView, setSlidesPerView] = useState(1);

    const dispatch = useDispatch();
    const cartItems = useSelector((state: RootState) => state.cart.cartItems);
    const calculateSlidesPerView = (width: number) => {
        if (width >= 1200) return 4;
        if (width >= 992) return 3;
        if (width >= 768) return 2;
        return 1;
    };

    useEffect(() => {
        const handleResize = () => {
            setSlidesPerView(calculateSlidesPerView(window.innerWidth));
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

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
            id: 3,
            title: "IPS LCD Gaming Monitor",
            oldPrice: 400,
            newPrice: 370,
            commentCount: 99,
            discount: 30,
            image: "/assets/products/ipc-lcd-gaming-monitor.png",
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
    ];
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
        <>
            <section className="w-full px-50 mt-20 py-10 flex flex-col items-center">
                <div className="w-full flex flex-col justify-center items-start">
                    <div className="flex items-center mb-5">
                        <div className="w-[20px] h-[40px] rounded mr-2" style={{ background: "#db4444" }} />
                        <p className="text-[18px] font-bold" style={{ color: "#db4444" }}>Products</p>
                    </div>
                    <h2 className="mb-5">Products</h2>
                </div>

                <Swiper
                    modules={[Pagination, Autoplay]}
                    spaceBetween={40}
                    slidesPerView={slidesPerView}
                    loop={true}
                    // pagination={{ clickable: true }}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    className="w-full mb-[50px]"
                >
                    {products.map((product, index) => (
                        <SwiperSlide key={index} style={{ padding: 10 }}>
                            <div className="w-[260px] rounded" style={{ boxShadow: "2px 2px 10px #b9b9bb9" }}>
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
                        </SwiperSlide>
                    ))}
                </Swiper>
                <Link href="/products"><Button width="200" content="View All Products" /></Link>
                <div className="w-[70%] h-[1px] bg-[#b9b9b9]" style={{ marginInline: 'auto', marginTop: 50 }} />
            </section>
            <ToastContainer />
        </>
    );
}