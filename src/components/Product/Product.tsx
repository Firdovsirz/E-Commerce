import React from 'react';
import Image from 'next/image';
import Button from '../Button/Button';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

interface ProductProps {
    product: {
        id: number;  // Add a unique identifier
        discount: number;
        image?: string;
        title: string;
        newPrice: number;
        oldPrice: number;
        commentCount: number;
    };
    handleAddToCart: (product: ProductProps['product']) => void;
}

export default function Product({ product, handleAddToCart }: ProductProps) {
    return (
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
                <Image src={product.image || '/placeholder.png'} alt={product.title} width={150} height={150} />
            </div>
            <div className="px-1 py-5">
                <h3>{product.title}</h3>
                <div className="flex items-center mb-[10px]">
                    <p className="mr-[20px] font-bold" style={{ color: "#db4444" }}>
                        {`$${product.newPrice}`}
                    </p>
                    {product.oldPrice && (
                        <p className="text-gray-500 line-through">{`$${product.oldPrice}`}</p>
                    )}
                </div>
                <div className="flex items-center justify-start mb-[40px]">
                    <Image src={"/5-star.jpg"} alt="5-star" width={100} height={50} />
                    <p className="mt-1 ml-2">{`(${product.commentCount})`}</p>
                </div>
                <Button width="250" content="Add to Cart" onClick={() => handleAddToCart(product)} />
            </div>
        </div>
    );
}