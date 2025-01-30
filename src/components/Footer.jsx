import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-pink-600 py-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {/* Navigation Section */}
          <div className="space-y-4">
            <h3 className="text-white font-bold text-xl">Navigation</h3>
            <ul className="text-white space-y-2">
              <li className="flex items-center">
                <span className="mr-2 text-gray-400 transition-all duration-300 transform group-hover:translate-x-2">&gt;</span>
                <a href="#" className="group hover:text-pink-200 transition-all duration-300 hover:translate-x-4">Home</a>
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-gray-400 transition-all duration-300 transform group-hover:translate-x-2">&gt;</span>
                <a href="#collection" className="group hover:text-pink-200 transition-all duration-300 hover:translate-x-4" style={{scrollBehavior:'smooth'}}>Collections</a>
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-gray-400 transition-all duration-300 transform group-hover:translate-x-2">&gt;</span>
                <a href="#aboutus" className="group hover:text-pink-200 transition-all duration-300 hover:translate-x-4">About Us</a>
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-gray-400 transition-all duration-300 transform group-hover:translate-x-2">&gt;</span>
                <a href="#testimonial" className="group hover:text-pink-200 transition-all duration-300 hover:translate-x-4">Testimonials</a>
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-gray-400 transition-all duration-300 transform group-hover:translate-x-2">&gt;</span>
                <a href="#contact" className="group hover:text-pink-200 transition-all duration-300 hover:translate-x-4">Contact</a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="space-y-4">
            <h3 className="text-white font-bold text-xl">Contact</h3>
            <p className="text-white">Mail id : trendvault.zofficial@gmail.com</p>
            <p className="text-white">Phone: +91 9445174614</p>
            <p className="text-white">Address: No. 12, Gandhi Street, Saidapet, Chennai - 600015</p>
            <p className="text-white italic">"Trend Your Style!"</p>
          </div>

    
          <div className="flex space-x-6">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-200 hover:-translate-y-4 transition duration-300">
              <FaFacebook size={24} />
            </a>
            <a href="https://www.instagram.com/flexfit.z/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-200 hover:-translate-y-4 transition duration-300">
              <FaInstagram size={24} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-200 hover:-translate-y-4 transition duration-300">
              <FaTwitter size={24} />
            </a>
            <a
      href="https://wa.me/9445174614"
      target="_blank"
      rel="noopener noreferrer"
      className="text-white hover:text-pink-200 hover:-translate-y-4 transition duration-300"
    >
      <FaWhatsapp size={24} />
    </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
