import React, { useState, useContext,useEffect } from "react";
import { CartContext } from "../CartContext";
import PaymentQR from "./PaymentQR";
import { Check } from "lucide-react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Truck, CreditCard, CheckCircle } from 'lucide-react';
import confetti from "canvas-confetti";

const indianStates = [
  'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa', 'Gujarat',
  'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka', 'Kerala', 'Madhya Pradesh',
  'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab',
  'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand',
  'West Bengal', 'Delhi' 
];

const indianCities = [
  { city: 'Chennai', state: 'Tamil Nadu' },
  { city: 'Coimbatore', state: 'Tamil Nadu' },
  { city: 'Madurai', state: 'Tamil Nadu' },
  { city: 'Tiruchirappalli', state: 'Tamil Nadu' },
  { city: 'Salem', state: 'Tamil Nadu' },
  { city: 'Erode', state: 'Tamil Nadu' },
  { city: 'Tirunelveli', state: 'Tamil Nadu' },
  { city: 'Thoothukudi', state: 'Tamil Nadu' },
  { city: 'Nagercoil', state: 'Tamil Nadu' },
  { city: 'Vellore', state: 'Tamil Nadu' },
  { city: 'Thanjavur', state: 'Tamil Nadu' },
  { city: 'Dindigul', state: 'Tamil Nadu' },
  { city: 'Cuddalore', state: 'Tamil Nadu' },
  { city: 'Kanchipuram', state: 'Tamil Nadu' },
  { city: 'Tiruvannamalai', state: 'Tamil Nadu' },
  { city: 'Kumbakonam', state: 'Tamil Nadu' },
  { city: 'Karur', state: 'Tamil Nadu' },
  { city: 'Namakkal', state: 'Tamil Nadu' },
  { city: 'Pudukkottai', state: 'Tamil Nadu' },
  { city: 'Virudhunagar', state: 'Tamil Nadu' },
  { city: 'Theni', state: 'Tamil Nadu' },
  { city: 'Perambalur', state: 'Tamil Nadu' },
  { city: 'Sivakasi', state: 'Tamil Nadu' },
  { city: 'Rajapalayam', state: 'Tamil Nadu' },
  { city: 'Hosur', state: 'Tamil Nadu' },
  { city: 'Dharmapuri', state: 'Tamil Nadu' },
  { city: 'Arakkonam', state: 'Tamil Nadu' },
  { city: 'Arani', state: 'Tamil Nadu' },
  { city: 'Nagapattinam', state: 'Tamil Nadu' },
  { city: 'Pollachi', state: 'Tamil Nadu' },
  { city: 'Palani', state: 'Tamil Nadu' },
  { city: 'Ambur', state: 'Tamil Nadu' },
  { city: 'Chengalpattu', state: 'Tamil Nadu' },
  { city: 'Ranipet', state: 'Tamil Nadu' },
  { city: 'Gudiyatham', state: 'Tamil Nadu' },
  { city: 'Tiruppur', state: 'Tamil Nadu' },
  { city: 'Villupuram', state: 'Tamil Nadu' }
];


const Checkout = () => {
  const { cart } = useContext(CartContext);
  const [currentStep, setCurrentStep] = useState(1);
  const [paymentComplete, setPaymentComplete] = useState(false);
  const [filteredCities, setFilteredCities] = useState([]);
  const [showCityDropdown, setShowCityDropdown] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    landmark: "",
    city: "",
    state: "",
    zip: "",
    phone: "",
    email: "",
  });

  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);


  const calculateTotal = () =>
    cart.reduce((total, item) => total + (item.price || 0) * (item.quantity || 1), 0);

  const handleNavigateToStep = (step) => {
    if (step < currentStep || (step === 2 && isFormValid()) || (step === 3 && paymentComplete)) {
      setCurrentStep(step);
    }
  };

  const handleProceedToPayment = () => {
    setCurrentStep(2);
  };

  const handlePaymentSuccess = () => {
    setPaymentComplete(true);
    setCurrentStep(3);
  };

  useEffect(() => {
    if (currentStep === 3) {
      // Trigger confetti when the confirmation step is rendered
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
    }
  }, [currentStep]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCityInput = (e) => {
    const value = e.target.value;
    setFormData(prev => ({ ...prev, city: value }));

    if (value.length > 0) {
      const filtered = indianCities.filter(item =>
        item.city.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredCities(filtered);
      setShowCityDropdown(true);
    } else {
      setFilteredCities([]);
      setShowCityDropdown(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (phone.length !== 10) {
      toast.warning("Please check your mobile number again!");
    }
  };

  const handleCitySelect = (cityData) => {
    setFormData(prev => ({
      ...prev,
      city: cityData.city,
      state: cityData.state
    }));
    setShowCityDropdown(false);
  };

  const isFormValid = () => {
    return (
      formData.firstName &&
      formData.lastName &&
      formData.address &&
      formData.city &&
      formData.state &&
      formData.zip &&
      formData.phone &&
      formData.email
    );
  };

  const totalAmount = calculateTotal();

  return (
    <div className="mt-24 container mx-auto p-6">
      {/* Steps header */}
      <div className="flex justify-center items-center mb-8 px-2 w-full">
  <div className="flex items-center space-x-1 sm:space-x-2 md:space-x-4">
    {/* Shipping Step */}
    <div className="flex items-center cursor-pointer" onClick={() => handleNavigateToStep(1)}>
      <div
        className={`w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full transition-all duration-500 
          ${currentStep >= 1 ? "bg-black text-white" : "bg-gray-300 text-gray-500"}`}
      >
        <Truck className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
      </div>
      <span
        className={`ml-1 sm:ml-2 text-xs sm:text-sm md:text-base font-medium transition-colors duration-500 
          ${currentStep >= 1 ? "text-black" : "text-gray-500"}`}
      >
        Shipping
      </span>
    </div>

    {/* Animated Line */}
    <div className="relative h-px w-6 sm:w-8 md:w-12">
      <div className="absolute inset-0 bg-gray-300"></div>
      <div
        className={`absolute inset-0 bg-black transition-all duration-700 ease-in-out origin-left 
          ${currentStep >= 2 ? "scale-x-100" : "scale-x-0"}`}
      ></div>
    </div>

    {/* Payment Step */}
    <div className="flex items-center cursor-pointer" onClick={() => handleNavigateToStep(2)}>
      <div
        className={`w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full 
          transition-all duration-500 delay-700
          ${currentStep >= 2 ? "bg-black text-white" : "bg-gray-300 text-gray-500"}`}
      >
        <CreditCard className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
      </div>
      <span
        className={`ml-1 sm:ml-2 text-xs sm:text-sm md:text-base transition-colors duration-500 
          ${currentStep >= 2 ? "text-black font-medium" : "text-gray-500"}`}
      >
        Payment
      </span>
    </div>

    {/* Second Animated Line */}
    <div className="relative h-px w-6 sm:w-8 md:w-12">
      <div className="absolute inset-0 bg-gray-300"></div>
      <div
        className={`absolute inset-0 bg-black transition-all duration-700 ease-in-out origin-left 
          ${currentStep >= 3 ? "scale-x-100" : "scale-x-0"}`}
      ></div>
    </div>

    {/* Confirmation Step */}
    <div className="flex items-center cursor-pointer" onClick={() => handleNavigateToStep(3)}>
      <div
        className={`w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full 
          transition-all duration-500 delay-700
          ${currentStep >= 3 ? "bg-black text-white" : "bg-gray-300 text-gray-500"}`}
      >
        <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
      </div>
      <span
        className={`ml-1 sm:ml-2 text-xs sm:text-sm md:text-base transition-colors duration-500 
          ${currentStep >= 3 ? "text-black font-medium" : "text-gray-500"}`}
      >
        Confirmation
      </span>
    </div>
  </div>
</div>


      <div className="flex flex-col lg:flex-row gap-6">
        <div className="lg:w-3/4 bg-white p-6 rounded-lg shadow">
          {currentStep === 1 && (
            <>
              <h2 className="text-xl font-bold mb-4">Shipping Address</h2>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block focus:bg-black focus:text-white text-sm font-medium text-gray-700">First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="mt-1  block w-full border border-gray-300 rounded-md p-2"
                      placeholder="Enter first name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                      placeholder="Enter last name"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Address</label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                    placeholder="Enter street address"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Landmark (Optional)</label>
                  <input
                    type="text"
                    name="landmark"
                    value={formData.landmark}
                    onChange={handleInputChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                    placeholder="Enter any landmark"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={(e) => {
                        const { value } = e.target;
                        if (/^\d{0,10}$/.test(value)) {
                          handleInputChange(e);
                        }
                      }}
                      className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                      placeholder="Enter Your whatsapp phone number"
                      required
                      inputMode="numeric"
                      pattern="\d*"
                      maxLength="10"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                      placeholder="Enter email address"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="relative">
                    <label className="block text-sm font-medium text-gray-700">City</label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleCityInput}
                      className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                      placeholder="Enter or select city"
                      required
                    />
                    {showCityDropdown && filteredCities.length > 0 && (
                      <div className="absolute z-10 w-full bg-white border border-gray-300 rounded-md mt-1 max-h-48 overflow-y-auto shadow-lg">
                        {filteredCities.map((cityData, index) => (
                          <div
                            key={index}
                            className="p-2 hover:bg-gray-100 cursor-pointer"
                            onClick={() => handleCitySelect(cityData)}
                          >
                            {cityData.city}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">State</label>
                    <select
                      name="state"
                      value={formData.state}
                      onChange={handleInputChange}
                      className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                      required
                    >
                      <option value="">Select State</option>
                      {indianStates.map(state => (
                        <option key={state} value={state}>{state}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">ZIP Code</label>
                    <input
                      type="text"
                      name="zip"
                      value={formData.zip}
                      onChange={(e) => {
                        const { value } = e.target;
                        if (/^\d{0,6}$/.test(value)) {
                          handleInputChange(e);
                        }
                      }}
                      className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                      placeholder="ZIP Code"
                      required
                    />
                  </div>
                </div>

                <div className="mt-6">
                  <button
                    onClick={handleProceedToPayment}
                    disabled={!isFormValid()}
                    className={`w-full py-3 rounded-md transition-colors duration-300 shimmer-effect ${isFormValid()
                        ? "bg-black text-white hover:bg-gray-800"
                        : "bg-gray-300 text-gray-500 cursor-not-allowed"
                      }`}
                  >
                    Proceed to Payment
                  </button>
                </div>
              </form>
            </>
          )}

          {currentStep === 2 && (
            <PaymentQR
              amount={totalAmount}
              onPaymentSuccess={handlePaymentSuccess}
               formData={formData}  // Pass formData
    cart={cart}
            />
          )}

          {currentStep === 3 && (
            <div className="text-center space-y-6">
              <div className="flex justify-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                  <Check className="w-8 h-8 text-green-600" />
                </div>
              </div>
              <h2 className="text-2xl font-bold text-green-600">Order Confirmed!</h2>
              <div className="space-y-2 text-gray-600">
                <p>Thank you for your order, {formData.firstName}!</p>
                <p>Your items will be shipped to:</p>
                <div className="max-w-sm mx-auto text-left p-4 bg-gray-50 rounded">
                  <p>{formData.firstName} {formData.lastName}</p>
                  <p>{formData.address}</p>
                  {formData.landmark && <p>{formData.landmark}</p>}
                  <p>{formData.city}, {formData.state} {formData.zip}</p>
                </div>
                <p className="mt-4">You will receive a confirmation message shortly ✅.</p>
              </div>
            </div>
          )}
        </div>

        <div className="lg:w-1/4 min-w-[320px]">
          <div className="bg-white p-6 rounded-lg shadow-xl">
            <h2 className="text-xl font-bold mb-4">Order Summary</h2>
            <hr className="border-t border-gray-300 mb-4" />
            {cart.length === 0 ? (
              <p className="text-gray-500">Your cart is empty!</p>
            ) : (
              <ul className="space-y-4">
                {cart.map((item, index) => (
                  <li
                    key={`${item.id}-${item.selectedSize}`}
                    className={index !== cart.length - 1 ? "border-b border-gray-300 pb-4" : ""}
                  >
                    <div className="flex gap-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 object-cover flex-shrink-0"
                      />
                      <div className="flex-grow min-w-0">
                        <h4 className="text-base font-medium break-words">{item.name}</h4>
                        <p className="text-sm text-gray-600">Size: {item.selectedSize}</p>
                        <p className="text-sm text-gray-600 break-words">
                          Quantity: {item.quantity} x ₹{item.price.toFixed(2)}
                        </p>
                        <p className="text-sm font-bold">
                          Total: ₹{(item.price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
            <hr className="border-t border-gray-300 my-4" />
            <div className="flex justify-between items-center">
              <p className="text-lg font-semibold">Grand Total</p>
              <p className="text-lg font-bold">₹{totalAmount.toFixed(2)}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;