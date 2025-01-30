import React from 'react'
import HeroSection from '../components/HeroSection'
import Cart from '../components/Cart'
import Testimonials from '../components/Testimonials'
import Navbar from '../components/Navbar'
import Collection from '../components/Collection'
import AboutUs from '../components/AboutUs'
import Banner from '../components/Banner'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import { CartProvider } from '../CartContext'

const HomePage = () => {
    return (
        <>
            <CartProvider>
                <Navbar />
                <HeroSection />
                <Collection />
                <Cart />
                <AboutUs />
                <Banner />
                <Testimonials />
                <Contact />
                <Footer />
            </CartProvider>
        </>
    )
}

export default HomePage