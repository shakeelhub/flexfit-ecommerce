import React from "react";
import { motion } from "framer-motion";
import tshirt from "../assets/tshirt.webp";
import VoltageButton from "./Button";

const Banner = () => {
  const textVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.div
      className="flex items-center justify-between rounded-lg shadow-lg p-4 md:p-8 overflow-hidden animate-gradient-animation"
      style={{
        backgroundImage:
          "linear-gradient(270deg, #3b82f6, #9333ea, #f43f5e, #3b82f6)",
        backgroundSize: "400% 400%",
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.5 }} // Trigger animation on every scroll
      transition={{ staggerChildren: 0.3 }}
    >
      {/* Left Content */}
      <motion.div
        className="text-white flex-1 mr-4"
        variants={textVariants}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <h2 className="text-lg md:text-3xl font-bold mb-1 md:mb-2 tracking-wider">
        Bulk Orders in Mind 💥 ?
        </h2>
        <p className="text-sm md:text-base mb-3"> Here we are.Whatsapp us Here !</p>
        <a
          href="https://wa.me/919445174614"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block"
        >
          <VoltageButton />
        </a>
      </motion.div>

      {/* Right Image */}
      <motion.div
        className="w-28 h-28 md:w-48 md:h-48 flex-shrink-0"
        variants={imageVariants}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <img
          src={tshirt}
          alt="T-Shirts"
          className="w-full h-full object-cover rounded-lg"
        />
      </motion.div>
    </motion.div>
  );
};

export default Banner;
