import React from 'react';
import Offer from '@/components/offer/Offer';
import Header from '@/components/header/Header';
import Carousel from '@/sections/home/Carousel';
import Footer from '@/components/footer/Footer';
import Categories from '@/sections/home/Categories';
import HomeDetails from '@/sections/home/HomeDetails';
import IntroSection from '@/sections/home/IntroSection';
import Advertisement from '@/sections/home/Advertisement';

export default function () {
    return (
        <>
            <Offer />
            <Header />
            <IntroSection />
            <Carousel />
            <Categories />
            <Advertisement />
            <HomeDetails />
            <Footer />
        </>
    )
}
