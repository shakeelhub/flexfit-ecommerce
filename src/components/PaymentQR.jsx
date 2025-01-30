import React, { useState } from "react";
import { Loader2, Upload, AlertCircle } from "lucide-react";
import emailjs from '@emailjs/browser';

const PaymentGPay = ({
  amount,
  upiId = "shaikmytheen19@okaxis",
  storeName = "Flexfit",
  onPaymentSuccess, 
  formData, 
  cart  
}) => {
  const [status, setStatus] = useState("initial"); 
  const [paymentImage, setPaymentImage] = useState(null);
  const [error, setError] = useState("");

  const gpayUrl = `tez://upi/pay?pa=${upiId}&pn=${storeName}&am=${amount}&cu=INR`;
  const intentUrl = `intent://pay?pa=${upiId}&pn=${storeName}&am=${amount}&cu=INR#Intent;scheme=upi;package=com.google.android.apps.nbu.paisa.user;end`;

  const handlePayment = () => {
    setStatus("paying");
    setError("");
    window.location.href = gpayUrl;
    setTimeout(() => {
      window.location.href = intentUrl;
    }, 1000);
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        setError("Image size should be less than 5MB");
        return;
      }
      setPaymentImage(file);
      setError("");
    }
  };


  const handleSubmit = async () => {
    if (!paymentImage) {
      setError("Please upload payment screenshot");
      return;
    }

    setStatus("uploading");
    setError("");

    try {
      // Convert cart items to a formatted string
      const cartDetails = cart.map(item => 
        `Product: ${item.name}, Size: ${item.selectedSize}, Quantity: ${item.quantity}, Price: ₹${item.price}`
      ).join('\n');

      // Prepare email template parameters
      const templateParams = {
        to_email: 'trendvault.zofficial@gmail.com',
        from_name: `${formData.firstName} ${formData.lastName}`,
        from_email: formData.email,
        phone: formData.phone,
        address: `${formData.address}${formData.landmark ? `, ${formData.landmark}` : ''}, ${formData.city}, ${formData.state}, ${formData.zip}`,
        order_details: cartDetails,
        total_amount: amount,
        message: `New order received from ${formData.firstName} ${formData.lastName}`,
      };

      // Send email using EmailJS
      await emailjs.send(
        'service_bvu7ttf',
        'template_6nx8fui',
        templateParams,
        'LiOBJZog2uoRR5h4g'
      );

      // Simulate upload delay
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setStatus("initial");

      if (onPaymentSuccess) {
        onPaymentSuccess();
      }
    } catch (err) {
      setStatus("error");
      setError("Failed to process order. Please try again.");
      console.error("Email sending failed:", err);
    }
  };

  return (
    <div className="p-4 text-center">
      <h2 className="text-xl font-bold mb-4">Pay with Google Pay</h2>

      <div className="space-y-6">
        <div className="text-sm text-gray-500 mb-4">
          <p>Amount: ₹{amount}</p>
          <p>UPI ID: {upiId}</p>
        </div>

        {status === "initial" && (
          <button
            onClick={handlePayment}
            className="w-full bg-black shimmer-effect text-white px-8 py-3 rounded-md hover:bg-gray-800 transition-colors"
          >
            Open Google Pay
          </button>
        )}

        {status === "paying" && (
          <div className="space-y-4">
            <div className="flex items-center justify-center space-x-2 text-gray-600">
              <Loader2 className="w-5 h-5 animate-spin" />
              <span>Waiting for payment...</span>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="text-sm font-medium text-gray-700 mb-4">
                After completing payment:
              </h3>

              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                  id="payment-proof"
                />
                <label
                  htmlFor="payment-proof"
                  className="flex flex-col items-center cursor-pointer"
                >
                  <Upload className="w-8 h-8 text-gray-400 mb-2" />
                  <span className="text-sm text-gray-500">
                    {paymentImage ? paymentImage.name : "Upload payment screenshot"}
                  </span>
                </label>
              </div>

              {error && (
                <div className="flex items-center text-red-600 text-sm mt-2">
                  <AlertCircle className="w-4 h-4 mr-1" />
                  {error}
                </div>
              )}

              <button
                onClick={handleSubmit}
                disabled={!paymentImage || status === "uploading"}
                className="w-full mt-4 py-2 rounded transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed bg-green-600 hover:bg-green-700 text-white"
              >
                {status === "uploading" ? (
                  <span className="flex items-center justify-center">
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Verifying...
                  </span>
                ) : (
                  "Proceed with Order"
                )}
              </button>
            </div>
          </div>
        )}

        {status === "error" && (
          <div className="space-y-4">
            <p className="text-red-600">{error}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PaymentGPay;