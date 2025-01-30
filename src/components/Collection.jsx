import React, { useState, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Couples1 from '../assets/dresses/Couples hoodie_1.jpg';
import Couples2 from '../assets/dresses/Couples hoodie_2.jpg';
import Gym1 from '../assets/dresses/Gym Oversized t-shirt_1 .jpg';
import Gym2 from '../assets/dresses/Gym Oversixed t-shirt _2.jpg';
import luffy from '../assets/dresses/luffy anime hoodie.jpg';
import luffy2 from '../assets/dresses/luffy2.jpg';
import Oversized1 from '../assets/dresses/oversized_1.png';
import Oversized2 from '../assets/dresses/oversized_2.png';
import polo1 from '../assets/dresses/polo_1.jpg';
import polo2 from '../assets/dresses/polo_2.jpg';
import porsche1 from '../assets/dresses/Porsche down shoulder_1.jpg';
import porsche2 from '../assets/dresses/Porsche down shoulder_2.jpg';
import roundnk1 from '../assets/dresses/round_neck_1.webp';
import roundnk2 from '../assets/dresses/round_neck_2.png';
import sweatshirt1 from '../assets/dresses/sweatshirt_1.png';
import sweatshirt2 from '../assets/dresses/sweatshirt_2.png';
import { CartContext } from '../CartContext';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import swag from '../assets/dresses/swag.png'
import weekend1 from '../assets/dresses/weekend1.jpg'
import weekend2 from '../assets/dresses/weekend2.jpg'
import aura1 from '../assets/dresses/aura1.jpg'
import aura2 from '../assets/dresses/aura2.jpg'
import sweat1 from '../assets/dresses/sweat_women_1.jpg'
import sweat2 from '../assets/dresses/swat_women_2.jpg'
import couplestree from '../assets/dresses/couple_stree.jpg'
import anti from "../assets/dresses/anti_cool.jpg"

const Collection = () => {
  const [activeFilter, setActiveFilter] = useState('*');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useContext(CartContext);
  const [selectedSize, setSelectedSize] = useState("");

  const products = [
    {
      id: 1,
      category: 'best',
      image: Couples1,
      hoverImage: Couples2,
      name: 'Couples Hoodie',
      price: 1699,
      description: 'Stay stylish and cozy together in our premium couples hoodie – perfect for any season!'
    },
    {
      id: 2,
      category: 'feat',
      image: Gym1,
      hoverImage: Gym2,
      name: 'Gym Oversized Tshirt',
      price: 699,
      description: 'Unleash your power in our oversized gym t-shirt – built for comfort and performance.'
    },
    {
      id: 3,
      category: 'feat',
      image: porsche1,
      hoverImage: porsche2,
      name: 'Porsche Down Shoulder',
      price: 649,
      description: 'Drive your style forward with our sleek Porsche-inspired t-shirt – a true standout!'
    },
    {
      id: 4,
      category: 'best',
      image: polo1,
      hoverImage: polo2,
      name: 'Polo Tshirt',
      price: 649,
      description: 'Timeless, versatile, and effortlessly cool – our polo t-shirt is a wardrobe essential.'
    },
    {
      id: 5,
      category: 'new',
      image: luffy2,
      hoverImage: luffy,
      name: 'Luffy Anime Hoodie',
      price: 799,
      description: 'Channel your inner hero with our Luffy hoodie – anime vibes with a modern edge.'
    },
    {
      id: 6,
      category: 'new',
      image: roundnk1,
      hoverImage: roundnk2,
      name: 'Round Neck Tshirt',
      price: 449,
      description: 'Keep it simple, stylish, and comfy with our must-have round neck t-shirt.'
    },
    {
      id: 7,
      category: 'best',
      image: sweatshirt1,
      hoverImage: sweatshirt2,
      name: 'Sweatshirt',
      price: 699,
      description: 'Cozy meets chic in our classic sweatshirt – your go-to for laid-back days.'
    },
    {
      id: 8,
      category: 'best',
      image: Oversized1,
      hoverImage: Oversized2,
      name: 'Oversized',
      price: 649,
      description: 'Effortless style and ultimate comfort – our oversized t-shirt has it all.'
    },
    {
      id: 9,
      category: 'new',
      image: weekend1,
      hoverImage: weekend2,
      name: 'The Weekend (Streat wear Hoodie)',
      price: 899,
      description: 'Streetwear vibes meet weekend comfort – the perfect hoodie for every occasion.'
    },
    {
      id: 10,
      category: 'new',
      image: aura1,
      hoverImage: aura2,
      name: 'Aura (Oversized Street wear)',
      price: 599,
      description: 'Own your vibe with our Aura oversized streetwear – cool, casual, and iconic.'
    },
    {
      id: 11,
      category: 'best',
      image: sweat1,
      hoverImage: sweat2,
      name: 'Womens Sweatshirt',
      price: 899,
      description: 'Stay cozy and chic with our women’s sweatshirt – where comfort meets elegance.'
    },
    {
      id: 12,
      category: 'feat',
      image: couplestree,
      hoverImage: couplestree,
      name: 'Couples Streetwear',
      price: 1199,
      description: 'Match in style with our trendy couples streetwear – love looks good on you!'
    },
    {
      id: 13,
      category: 'new',
      image: anti,
      hoverImage: anti,
      name: 'Anti Social Streetwear',
      price: 699,
      description: 'Make a bold statement in our Anti Social streetwear – redefine cool your way.'
    }
  ];



  const filterButtons = [
    { label: 'All', filter: '*' },
    { label: 'Best Sellers', filter: 'best' },
    { label: 'Featured', filter: 'feat' },
    { label: 'New Arrival', filter: 'new' }
  ];

  const filteredProducts = activeFilter === '*'
    ? products
    : products.filter(product => product.category === activeFilter);

  const handleCardClick = (product) => {
    setSelectedProduct(product);
    setQuantity(1);
    setSelectedSize("");
  };

  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
  };

  const closeModal = () => {
    setSelectedProduct(null);
    setSelectedSize("");
  };

  const handleQuantityChange = (e) => {
    const value = Math.max(1, Number(e.target.value));
    setQuantity(value);
  };

  const incrementQuantity = () => {
    setQuantity(prev => prev + 1);
  };

  const decrementQuantity = () => {
    setQuantity(prev => (prev > 1 ? prev - 1 : 1));
  };

  const handleAddToCart = (product) => {
    const itemToAdd = { ...product, quantity, selectedSize };
    addToCart(itemToAdd);
    toast.success(`${product.name} added to your cart 😇 !`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    closeModal();
  };


  return (
    <div className="flex justify-center min-h-screen mt-10" id="collection">
      <ToastContainer />
      <section className="w-full max-w-6xl py-5">
        {/* Heading */}
        <div className="text-center mb-5 flex justify-center align-center">
          <motion.h2
            className="text-3xl font-semibold relative flex before:content-[''] before:absolute cursor-pointer before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-1 before:h-10 before:bg-pink-600 before:-ml-5 tracking-wider"
            initial={{ opacity: 0, x: 300 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <span className='mt-2'>New Collection</span>
            <img src={swag} alt="" className='h-12 w-12 ml-2' />
          </motion.h2>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center mb-5 mt-12 pt-1">
          {filterButtons.map((btn, index) => (
            <motion.button
              key={btn.filter}
              className={`
                m-2 px-8 py-3 text-sm font-medium rounded-full border transition-all duration-300
                ${activeFilter === btn.filter
                  ? 'bg-pink-600 text-white border-pink-600'
                  : 'bg-white text-gray-800 border-black hover:bg-gray-100'
                }
              `}
              onClick={() => setActiveFilter(btn.filter)}
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut", delay: 0.1 * index }}
            >
              {btn.label}
            </motion.button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 pt-8 lg:grid-cols-4 gap-6 px-6 pb-6">
          <AnimatePresence>
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                onClick={() => handleCardClick(product)}
                initial={{ opacity: 0, x: 300 }}
                whileInView={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
                transition={{
                  duration: 0.8,
                  ease: "easeInOut",
                }}
                className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl mb-4 max-w-xs mx-auto sm:max-w-none group transform hover:rotate-1 hover:scale-105 cursor-pointer"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-72 sm:h-80 object-cover transition-opacity duration-500 ease-in-out"
                    loading='lazy'
                  />
                  <img
                    src={product.hoverImage}
                    alt={product.name}
                    className="absolute top-0 left-0 w-full h-72 sm:h-80 object-cover opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100"
                    loading='lazy'
                  />
                  <span className="absolute top-2 right-2 bg-red-500 text-white w-10 h-10 flex items-center justify-center rounded-full text-xs font-medium">
                    Sale
                  </span>
                </div>

                <div className="p-4 text-center">
                  <h3 className="text-lg font-semibold mb-1 text-gray-800">
                    {product.name}
                  </h3>
                  <p className="text-lg text-primary font-bold">₹{product.price.toFixed(2)}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* Modal for Product Details */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md relative">
            {/* Close Button (Inside Modal) */}
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-800 hover:text-red-500 transform hover:rotate-180 transition duration-300"
            >
              ✕
            </button>

            {/* Modal Content: Image with Hover Effects */}
            <div className="relative overflow-hidden">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="w-full h-80 sm:h-80 object-cover transition-opacity duration-500 ease-in-out"
              />
              <img
                src={selectedProduct.hoverImage}
                alt={selectedProduct.name}
                className="absolute top-0 left-0 w-full h-80 sm:h-80 object-cover opacity-0 transition-opacity duration-500 ease-in-out hover:opacity-100"
              />
            </div>

            <h3 className="text-2xl font-bold mt-2 mb-2">{selectedProduct.name}</h3>
            <p className="text-lg text-gray-700 mb-4">{selectedProduct.description}</p>

            <div className='flex flex-row'>
              <p className="text-2xl text-primary font-bold mb-4">₹{selectedProduct.price.toFixed(2)}</p>
              <span className='mt-3 ml-1 text-xs text-gray-500'>+ courier charges</span>
            </div>

            {/* Quantity Selector and Add to Cart Button */}
            <div className="flex flex-col lg:flex-row items-center mb-4 lg:space-x-8 space-y-4 lg:space-y-0">
              {/* Quantity Section */}
              <div className="flex items-center">
                <p className="mr-2">Quantity</p>
                <button
                  onClick={decrementQuantity}
                  className="bg-black text-white px-4 py-0 rounded-l hover:bg-pink-600 transition duration-300"
                >
                  -
                </button>
                <input
                  type="number"
                  value={quantity}
                  onChange={handleQuantityChange}
                  className="w-12 text-center border-t border-b border-gray-300"
                  min="1"
                />
                <button
                  onClick={incrementQuantity}
                  className="bg-black text-white px-4 rounded-r hover:bg-pink-600 transition duration-300"
                >
                  +
                </button>
              </div>

              {/* Size Section */}
              <div className="flex items-center">
                <p className="mr-2">Size</p>
                <select
                  value={selectedSize}
                  onChange={handleSizeChange}
                  className="border border-gray-300 rounded px-2"
                >
                  <option value="" disabled>
                    Select Size
                  </option>
                  <option value="S">S</option>
                  <option value="M">M</option>
                  <option value="L">L</option>
                  <option value="XL">XL</option>
                  <option value="XXL">XXL</option>
                  <option value="XXXL">XXXL</option>
                </select>
              </div>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={() => handleAddToCart(selectedProduct)}
              className="w-full bg-pink-600 text-white py-2 rounded hover:bg-pink-600 shimmer-effect"
            >
              Add to Cart
            </button>

          </div>

        </div>
      )}
    </div>
  );
};

export default Collection;
