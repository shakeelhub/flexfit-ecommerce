import React from 'react';
import { Link } from 'react-router-dom';
import home from '../assets/dresses/home.png';

const Nav = () => {
  return (
    <>
      <nav className="bg-gray-200 fixed top-0 left-0 w-full z-40 shadow-xl py-4">
        <div className="container mx-auto flex justify-between items-center px-4">
          {/* Brand Name */}
          <a href="/" className="text-black text-xl tracking-widest font-bold">
            FLEXFIT
          </a>

          {/* Back to Home Button */}
          <div className="flex items-center">
            <Link
              to="/"
              className="flex items-center text-black text-sm font-medium hover:text-pink-500 transition duration-300"
            >
              Back To Home
              <img src={home} alt="Home" className="w-6 h-6 ml-2" />
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
