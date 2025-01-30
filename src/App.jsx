import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from './CartContext';
import HomePage from './pages/HomePage';
import Checkout from "./pages/CheckOut";
import './App.css';

// Loading Screen Component
const LoadingScreen = ({ onLoadComplete }) => {
  const [slideUp, setSlideUp] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSlideUp(true);
      setTimeout(() => {
        onLoadComplete();
      }, 1000);
    }, 2000);

    return () => clearTimeout(timer);
  }, [onLoadComplete]);

  return (
    <div
      className={`fixed inset-0 bg-black w-full min-h-screen transition-transform duration-1000 ${
        slideUp ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div
        className="absolute inset-0 bg-black"
        style={{
          backgroundImage: `
            radial-gradient(circle at center, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.2) 45%, rgba(0, 0, 0, 0.8) 75%, rgba(0, 0, 0, 0.95) 85%, black 100%),
            linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "100% 100%, 40px 40px, 40px 40px",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat, repeat, repeat",
        }}
      />

      <div className="relative flex flex-col items-center justify-center h-screen z-10 px-4">
      <h1 className="flex text-5xl sm:text-5xl md:text-7xl font-bold text-white gap-4 sm:gap-5">
  <span 
    className="animate-bounce-delay font-extrabold" 
    style={{ fontFamily: 'Fortrose, serif' }}
  >
    Flex
  </span>
  <span 
    className="animate-bounce-delay [animation-delay:0.66s] font-extrabold" 
    style={{ fontFamily: 'Fortrose, serif' }}
  >
    Fit
  </span>
</h1>

        <div className="w-2/4 sm:w-1/4 md:w-1/4 h-2 sm:h-2.5 mt-6 bg-gray-200 rounded overflow-hidden">
          <div className="h-full bg-gradient-to-r from-indigo-500 to-purple-400 animate-load" />
        </div>
      </div>
    </div>
  );
};

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <LoadingScreen onLoadComplete={() => setIsLoading(false)} />}
      
      <div
        className={`transition-opacity duration-1000 ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
      >
        <CartProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/checkout-page" element={<Checkout />} />
            </Routes>
          </BrowserRouter>
        </CartProvider>
      </div>
    </>
  );
}

export default App;