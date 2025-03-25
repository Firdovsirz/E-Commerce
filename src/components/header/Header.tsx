'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import MenuIcon from '@mui/icons-material/Menu';
import LoginIcon from '@mui/icons-material/Login';
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/reducers/rootReducer';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);
  const [cartLength, setCartLength] = useState<number>(0);
  useEffect(() => {
    setCartLength(cartItems.length);
  }, [cartItems])

  console.log(cartLength);


  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <header style={{ borderBottom: '1px solid #b9b9b9' }} className="w-full bg-white relative">
      <nav className="flex justify-between items-center px-6 sm:px-10 lg:px-20 py-4">
        {/* Logo */}
        <Link href={"/home"}>
          <div className="text-black cursor-pointer font-bold text-xl">
            E-Commerce
          </div>
        </Link>

        {/* Mobile Menu Toggle */}
        <div className="sm:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <CloseIcon className="text-gray-700" /> : <MenuIcon className="text-gray-700" />}
          </button>
        </div>
        {menuOpen && (
          <div className="fixed top-0 left-0 w-full h-full bg-white z-50 flex flex-col items-center justify-center">
            <button className="absolute top-5 right-5" onClick={() => setMenuOpen(false)}>
              <CloseIcon className="text-gray-700 text-3xl" />
            </button>
            <ul className="flex flex-col items-center space-y-6 text-xl">
              <li className="cursor-pointer" onClick={() => setMenuOpen(false)}>Home</li>
              <li className="cursor-pointer" onClick={() => setMenuOpen(false)}>Contact</li>
              <li className="cursor-pointer" onClick={() => setMenuOpen(false)}>About</li>
            </ul>
          </div>
        )}

        {/* Desktop Navigation */}
        <div className="hidden sm:flex items-center space-x-8 text-[17px]">
          <ul className="flex space-x-8">
            <li className="cursor-pointer">Home</li>
            <li className="cursor-pointer">Contact</li>
            <li className="cursor-pointer">About</li>
          </ul>
        </div>

        {/* Search & Icons */}
        <div className="hidden sm:flex items-center space-x-6">
          {/* Search Box */}
          <div className="hidden md:flex items-center border border-gray-400 px-2 py-1 rounded">
            <input
              className="outline-none text-[16px] w-[150px] md:w-[200px] lg:w-[250px]"
              type="text"
              placeholder="What are you looking for?"
            />
            <SearchIcon className="ml-2 cursor-pointer text-gray-500" />
          </div>

          {/* Icons */}
          <FavoriteBorderIcon className="cursor-pointer text-gray-500" style={{ fontSize: 30 }} />
          <Link href="/cart">
            <div className="relative">
              <ShoppingCartIcon className="cursor-pointer text-gray-500" style={{ fontSize: 30 }} />
              {cartLength > 0 && (
                <div className="w-[20px] h-[20px] absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {cartLength}
                </div>
              )}
            </div>
          </Link>
          <LoginIcon className="cursor-pointer text-gray-500" style={{ fontSize: 30 }} />
        </div>
      </nav>
    </header>
  );
}