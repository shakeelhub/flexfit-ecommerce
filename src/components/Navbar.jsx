import React, { useState } from 'react';
import Cart from './Cart';

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const [isCartOpen, setIsCartOpen] = useState(false); // State for cart visibility

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenuAndScroll = (target) => {
    setIsOpen(false);
    document.querySelector(target).scrollIntoView({ behavior: 'smooth' }); // Scroll to the section
  };

  return (
    <>


      <nav className="bg-gray-200 fixed top-0 left-0 w-full z-40 shadow-xl transition-shadow duration-300 py-6 mb-10">

        <div className="container mx-auto flex justify-between items-center px-4">
          {/* Brand Name */}
          <a href="/" className="text-black text-xl tracking-widest font-bold" style={{ fontFamily: 'Fortrose, serif' }}>
            FLEXFIT
          </a>

          {/* Centered Nav Links */}
          <div className="hidden md:flex space-x-12">
            <a
              href="/"
              className="text-black hover:text-pink-600 tracking-widest transition duration-300 ease-in-out relative underline-hover"
            >
              HOME
            </a>
            <a
              href="#collection"
              className="text-black tracking-widest hover:text-pink-600 transition duration-300 ease-in-out relative underline-hover"
              onClick={(e) => {
                e.preventDefault();
                closeMenuAndScroll('#collection'); // Close menu and scroll to collection
              }}
            >
              COLLECTION
            </a>
            <a
              href="#aboutus"
              className="text-black tracking-widest hover:text-pink-600 transition duration-300 ease-in-out relative underline-hover"
              onClick={(e) => {
                e.preventDefault();
                closeMenuAndScroll('#aboutus'); // Close menu and scroll to aboutus
              }}
            >
              ABOUT US
            </a>
            <a
              href="#testimonial"
              className="text-black tracking-widest hover:text-pink-600 transition duration-300 ease-in-out relative underline-hover"
              onClick={(e) => {
                e.preventDefault();
                closeMenuAndScroll('#testimonial');
              }}
            >
              TESTIMONIALS
            </a>
            <a
              href="#contact"
              className="text-black tracking-widest hover:text-pink-600 transition duration-300 ease-in-out relative underline-hover"
              onClick={(e) => {
                e.preventDefault();
                closeMenuAndScroll('#contact');
              }}
            >
              CONTACT
            </a>
          </div>

          {/* Cart Button (Visible on larger screens) */}
          <button
            onClick={toggleCart}
            className="hidden md:flex items-center space-x-2 bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 transition duration-300 ease-in-out group"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 transform transition-transform duration-500 ease-in-out group-hover:rotate-180"
              style={{ transition: "transform 0.5s ease-in-out" }}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 7h14M7 13h10m-5-6h2"
              />
            </svg>
            <span className="tracking-widest">CART</span>
          </button>

          {/* Mobile Menu and Cart Button (Visible on smaller screens) */}
          <div className="md:hidden flex items-center space-x-4">
            {/* Cart Button (Mobile) */}

            <button className="text-black hover:text-gray-700 pt-2 pr-2 group" onClick={toggleCart}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 transform transition-transform duration-500 ease-in-out group-hover:rotate-180"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 7h14M7 13h10m-5-6h2"
                />
              </svg>
            </button>

            {/* Mobile Menu Button */}
            <button
              className="text-black focus:outline-none hover:text-gray-500 duration-300 transition ease-in-out z-50"
              onClick={toggleMenu}
            >
              <svg
                className={`h-6 w-6 fill-current transition-transform duration-500 ${isOpen ? "hover:rotate-180" : ""
                  }`}
                viewBox="0 0 20 18"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  // Close (X) icon
                  <>
                    <path d="M4 4 L16 16" stroke="white" strokeWidth="2" />
                    <path d="M16 4 L4 16" stroke="white" strokeWidth="2" />
                  </>
                ) : (
                  // Hamburger icon
                  <>
                    <path
                      className="animate-line-1"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4 6h16v2H4V6z"
                    />
                    <path
                      fillRule="evenodd"
                      className="animate-line-2"
                      clipRule="evenodd"
                      d="M4 11h16v2H4v-2z"
                    />
                    <path
                      fillRule="evenodd"
                      className="animate-line-3"
                      clipRule="evenodd"
                      d="M4 16h16v2H4v-2z"
                    />
                  </>
                )}
              </svg>
            </button>
          </div>

        </div>

        {/* Mobile Menu with Sliding Animation */}
        <div
          className={`fixed top-0 right-0 w-full h-screen bg-black 
        transition-transform duration-500 ease-in-out transform z-10
        ${isOpen ? 'translate-x-0' : 'translate-x-full'} 
        flex flex-col items-end justify-center z-40`}
        >
          <div className="container mx-auto flex flex-col space-y-8 text-right px-8">
            <a
              href="/"
              className={`text-white text-2xl hover:text-gray-400 
            transition-all duration-300 
            ${isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}
            hover:-translate-x-2 delay-100`}
              onClick={(e) => {
                e.preventDefault();
                closeMenuAndScroll('#'); // Close menu and scroll to top (home)
              }}
            >
              HOME
            </a>
            <a
              href="#collection"
              className={`text-white text-2xl hover:text-gray-400 
            transition-all duration-300 
            ${isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}
            hover:-translate-x-2 delay-100`}
              onClick={(e) => {
                e.preventDefault();
                closeMenuAndScroll('#collection'); // Close menu and scroll to collection
              }}
            >
              COLLECTION
            </a>
            <a
              href="#aboutus"
              className={`text-white text-2xl hover:text-gray-400 
            transition-all duration-300 
            ${isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}
            hover:-translate-x-2 delay-100`}
              onClick={(e) => {
                e.preventDefault();
                closeMenuAndScroll('#aboutus'); // Close menu and scroll to about us
              }}
            >
              ABOUT US
            </a>
            <a
              href="#testimonial"
              className={`text-white text-2xl hover:text-gray-400 
            transition-all duration-300 
            ${isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}
            hover:-translate-x-2 delay-100`}
              onClick={(e) => {
                e.preventDefault();
                closeMenuAndScroll('#testimonial');
              }}
            >
              TESTIMONIALS
            </a>
            <a
              href="#contact"
              className={`text-white text-2xl hover:text-gray-400 
            transition-all duration-300 
            ${isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}
            hover:-translate-x-2 delay-100`}
              onClick={(e) => {
                e.preventDefault();
                closeMenuAndScroll('#contact'); // Close menu and scroll to contact
              }}
            >
              CONTACT
            </a>
          </div>
        </div>
      </nav>

      <Cart isOpen={isCartOpen} onClose={toggleCart} />
    </>
  )
}

export default Navbar;
