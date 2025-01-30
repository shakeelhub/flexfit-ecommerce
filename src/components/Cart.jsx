import React, { useContext } from 'react';
import { CartContext } from '../CartContext';
import { Link } from 'react-router-dom';

const Cart = ({ isOpen, onClose }) => {
  const { cart, removeFromCart } = useContext(CartContext);
  
  const calculateTotal = () => 
    cart.reduce((total, item) => total + (item.price || 0) * (item.quantity || 1), 0);

  const handleRemoveItem = (id, selectedSize) => {
    alert("Your Item will be Removed if You click Ok");
    removeFromCart(id, selectedSize);
  };

  return (
    <div
      className={`fixed top-0 right-0 h-full bg-white shadow-lg z-50 transition-transform duration-500 ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      } sm:w-1/3 w-full`}
      style={{ maxWidth: '100vw' }}
    >
      <div className="p-4 flex flex-col h-full">
        <div className="flex justify-between items-center border-b pb-2 mb-4">
          <h2 className="text-xl font-bold">Your Cart <span className="pl-2">🛒</span></h2>
          <button
            onClick={onClose}
            className="text-black p-2 rounded hover:text-red-500 transform hover:rotate-180 transition duration-300"
          >
            ✕
          </button>
        </div>

        <div className="flex-grow overflow-y-auto">
          {cart.length === 0 ? (
            <div className="text-center text-gray-500 mt-10">
              <p className="text-lg">Your cart is empty!</p>
              <p className="text-sm">Start adding items to your cart.</p>
            </div>
          ) : (
            <ul className="space-y-4">
              {cart.map((item) => (
                <li key={`${item.id}-${item.selectedSize}`} className="flex justify-between items-center border-b pb-2">
                  <div className="flex items-center">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover mr-4"
                    />
                    <div>
                      <h4 className="text-lg font-medium">{item.name}</h4>
                      <p className="text-sm text-gray-600">Size: {item.selectedSize}</p>
                      <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                      <p className="text-sm text-gray-600">
                        Price: ₹{(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => handleRemoveItem(item.id, item.selectedSize)}
                    className="text-red-500 hover:text-red-700 transition-transform transform hover:scale-110 hover:rotate-12 focus:outline-none"
                    aria-label="Remove item"
                  >
                    x
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {cart.length > 0 && (
          <div className="mt-4">
            <div className="flex justify-between text-lg font-bold">
              <span>Total:</span>
              <span>₹{calculateTotal().toFixed(2)}</span>
            </div>
            <Link to='/checkout-page'>
            <button
              className="bg-black text-white shimmer-effect px-4 py-2 rounded mt-4 w-full hover:bg-gray-800 transition shimmer-effect"
            >
              Checkout Page
            </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;