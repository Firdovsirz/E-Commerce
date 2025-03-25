import React from 'react';
import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';
import Products from '@/sections/products/Products';
import Filter from '@/components/Filter/Filter';

export default function page() {
  return (
    <>
      <Header />
      <main className='flex justify-between items-start p-[10px]' style={{ background: "#f7e8e8" }}>
        <Filter />
        <Products />
      </main>
      <Footer />
    </>
  )
}
