import React from 'react';
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';
import CartItems from '@/sections/cart/CartItems';

export default function page() {
  return (
    <>
      <Header />
      <CartItems />
      <Footer />
    </>
  )
}
