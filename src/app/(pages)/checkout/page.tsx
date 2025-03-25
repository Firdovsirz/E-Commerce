import React from 'react';
import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';
import CheckoutDetail from '@/sections/checkout/CheckoutDetail';

export default function page() {
    return (
        <>
            <Header />
            <CheckoutDetail />
            <Footer />
        </>
    )
}
