import React, { useState, useEffect, useCallback, useMemo, useRef } from "react";
import confetti from "canvas-confetti";
import HeroImg from "../assets/dresses/hero-optimized-optimized (1).webp";
import shopping from "../assets/shopping.svg";
import heroo from "../assets/dresses/hero2_11zon.webp";

const TextSet = React.memo(({ set, isActive, scrollToSection }) => (
  <div
    className={`${isActive ? "animate-slide-in" : "absolute opacity-0"} transition-opacity duration-1000`}
  >
    <p className="text-xl text-white tracking-wider -mb-4 sm:text-lg md:text-2xl">
      {set.subtext}
    </p>
    <h1 className="text-5xl md:text-6xl text-white font-bold mt-4 tracking-wider">
      {set.heading}
    </h1>
    <button
      onClick={scrollToSection}
      className={`mt-4 xs:mt-6 px-5 py-3 xs:px-6 xs:py-3 ${set.buttonColor} text-white rounded-md tracking-widest duration-300 transition ease-in-out text-sm xs:text-base`}
    >
      {set.buttonText}
    </button>
  </div>
));

const HeroSection = () => {
  const [currentSet, setCurrentSet] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    tshirtColor: "",
    textColor: "",
    customText: "",
    size: "",
    quantity: "",
  });

  const fireworksRef = useRef(null);

  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }, []);

  const sendWhatsAppMessage = useCallback(
    (e) => {
      e.preventDefault();
      const { tshirtColor, textColor, customText, size, quantity } = formData;
      const phoneNumber = "+919445174614"; 
      const message = `
        T-Shirt Order Details:
        - T-Shirt Color: ${tshirtColor}
        - Text Color: ${textColor}
        - Custom Text: ${customText}
        - Size: ${size}
        - Quantity: ${quantity}
      `;
      const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
      window.open(url, "_blank");
    },
    [formData]
  );

  useEffect(() => {
    // Add canvas-confetti logic here
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSet((prevSet) => (prevSet + 1) % textSets.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (!fireworksRef.current) {
      const fireworks = new Fireworks({
        target: fireworksRef.current,
        width: window.innerWidth,
        height: window.innerHeight,
        options: {
          rocketsPoint: 50,
          hue: {
            min: 0,
            max: 360,
          },
        },
      });

      fireworks.start();
      const interval = setInterval(() => fireworks.explode(), 3000); // Fireworks every 3 seconds

      return () => {
        fireworks.stop();
        clearInterval(interval);
      };
    }
  }, []);

  const textSets = useMemo(
    () => [
      {
        heading: "Exclusive Collection",
        subtext: "Experience Style Like Never Before",
        buttonText: "Shop Now",
        buttonColor: "bg-pink-500 hover:bg-pink-700",
      },
      {
        heading: "New Arrivals",
        subtext: "Discover the Future of Fashion",
        buttonText: "Explore Now",
        buttonColor: "bg-fuchsia-500 hover:bg-fuchsia-700",
      },
      {
        heading: "Limited Edition",
        subtext: "Unveiling Trends You'll Love",
        buttonText: "Check It Out",
        buttonColor: "bg-rose-500 hover:bg-rose-600",
      },
    ],
    []
  );

  const scrollToSection = useCallback(() => {
    const section = document.getElementById("collection");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  const openModal = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  return (
    <>
      <div className="relative w-full h-screen mt-12 pt-3 bg-green-700">
        <div ref={fireworksRef}></div>
        <img
          src={heroo}
          alt="Responsive Hero"
          className="w-full h-screen object-cover "
        />
        <div className="flex flex-col items-center justify-center text-center bg-black bg-opacity-30 absolute inset-0">
          {textSets.map((set, index) => (
            <TextSet
              key={index}
              set={set}
              isActive={currentSet === index}
              scrollToSection={scrollToSection}
            />
          ))}
        </div>

        <div
          className="cursor-pointer absolute bottom-2 md:bottom-3 -right-5 md:right-5 transform -translate-x-1/2 -translate-y-1/2 z-5 flex items-center"
          onClick={openModal}
        >
          <div className="relative w-24 h-24 bg-[#ddb892] shadow-lg flex flex-col items-center justify-center rounded-xl">
            <div
              className="absolute w-24 h-24 border-2 border-gray-300 -z-10"
              style={{ animation: "spin 5s linear infinite" }}
            ></div>
            <img src={shopping} alt="Shopping" className="w-14 h-14 mb-1 -ml-2" />
            <p className="text-sm font-bold text-black-700">Customize ?</p>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg w-4/5 sm:w-3/5 lg:w-2/5 shadow-lg relative">
            <button
              className="absolute top-3 right-3 text-2xl font-bold text-gray-500 hover:text-red-500 transform hover:rotate-180 transition duration-300"
              onClick={closeModal}
            >
              x
            </button>
            <h2 className="text-2xl font-bold mb-4 flex text-center justify-center cursor-pointer">
              Personalize Your T-Shirt 👕
            </h2>
            <form onSubmit={sendWhatsAppMessage}>
              {Object.keys(formData).map((field) => (
                <div className="mb-4" key={field}>
                  <label className="block text-sm font-medium mb-1">
                    {field.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase())}
                  </label>
                  <input
                    type="text"
                    name={field}
                    value={formData[field]}
                    onChange={handleInputChange}
                    placeholder={`Enter ${field}`}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    required
                  />
                </div>
              ))}
              <button
                className="button2 w-full flex items-center justify-center gap-2"
                onClick={sendWhatsAppMessage}
              >
                <span>WhatsApp</span>
              </button>

              <p className="text-gray-400 text-sm flex items-center justify-center text-center mt-2">
                If any images need to be sent to us, please click Submit and send us via WhatsApp.
              </p>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default React.memo(HeroSection);
