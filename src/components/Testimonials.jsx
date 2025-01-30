import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import grain from '../assets/dresses/grain.jpg';
import vidhi from '../assets/dresses/vidhi.png';
import uzma from '../assets/dresses/PHOTO-2024-12-11-23-06-37.jpg';
import ameen from '../assets/dresses/ameen.png';
import suhail from '../assets/dresses/suhail.png';
import bristi from "../assets/dresses/bristi.jpg"

const testimonials = [
  {
    name: "Vidhi",
    text: "This brand truly understands fashion! Every item exudes sophistication, blending comfort and trendiness flawlessly. A wardrobe essential!",
    avatar: vidhi,
  },
  {
    name: "Uzma",
    text: "A perfect blend of modern trends and timeless charm. The quality is outstanding, making each piece worth every penny!",
    avatar: uzma,
  },
  {
    name: "Abdul Ameen",
    text: "Broowww!!! Wonderful quality....I loved it.I'm using it for my gym. The cloth is so good and absorbes sweat easily and make feel comfortable wearing it!!I'm now planning to buy few to add on in my wardrobe!",
    avatar: ameen,
  },
  {
    name: "Suhail Ahamed",
    text: "Heyy ! I bought this gym oversized t-shirt. It was so good to use and wear, it really suits me a lot! I suggested my gym mates too. Hope you will grow more!",
    avatar: suhail,
  },
  {
    name: "Bristi Sasmal",
    text: "Exceptional craftsmanship and attention to detail! The products elevate my style while feeling luxurious and comfortable all day.",
    avatar: bristi,
  },
];

const Testimonials = () => {
  const [animationDuration, setAnimationDuration] = useState(20); // Default duration

  useEffect(() => {
    const updateDuration = () => {
      const screenWidth = window.innerWidth;
      const newDuration = screenWidth < 768 ? 3 : 20; // Try a shorter duration like 5 seconds for smaller screens
      console.log(`Screen Width: ${screenWidth}, Duration: ${newDuration}`);
      setAnimationDuration(newDuration);
    };

    updateDuration();
    window.addEventListener("resize", updateDuration);

    return () => {
      window.removeEventListener("resize", updateDuration);
    };
  }, []);

  return (
    <div className="container mx-auto px-4 relative mt-12 pt-2 md:mt-2" style={{paddingBottom:'5rem'}} id="testimonial">
      {/* Section Header */}
      <div className="text-center ">
      <motion.h3
                className="text-pink-600 text-2xl font-semibold cursor-pointer"
                initial={{ opacity: 0, x: -300 }}  // Starts from the left
                whileInView={{ opacity: 1, x: 0 }}  // Ends in the normal position
                transition={{ duration: 1, ease: "easeInOut" }}
            >
                Testimonials
            </motion.h3>
            <motion.h1
                className="text-pink-600 text-5xl font-bold mt-2 cursor-pointer"
                initial={{ opacity: 0, x: 300 }}  // Starts from the right
                whileInView={{ opacity: 1, x: 0 }}  // Ends in the normal position
                transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
            >
                Hear It From Them!
            </motion.h1>
      </div>

      {/* Horizontal Scroll Container */}
      <div className="mt-9 md:mt-8 overflow-hidden relative">
        {/* Left and Right Fading Effect */}
        <div className="absolute inset-y-0 left-0 w-7 bg-gradient-to-r from-white to-transparent pointer-events-none z-10"></div>
        <div className="absolute inset-y-0 right-0 w-7 bg-gradient-to-l from-white to-transparent pointer-events-none z-10"></div>

        {/* Scrolling Content */}
        <motion.div
          className="flex gap-6"
          animate={{ x: ["0%", "-150%"] }}
          transition={{
            repeat: Infinity,
            duration: animationDuration, // Dynamic duration based on screen size
            ease: "linear",
          }}
        >
          {testimonials.concat(testimonials).map((testimonial, index) => (
            <div
              key={index}
              className="flex-none rounded-2xl p-6 relative overflow-hidden w-80 before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:bg-cover before:bg-center before:bg-no-repeat before:z-[-1]"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.7)), url(${grain})`,
              }}
            >
              {/* Avatar and Name */}
              <div className="flex gap-4 items-center mb-4 relative z-10">
                <div className="h-14 w-14 rounded-full overflow-hidden">
                  <img
                    src={testimonial.avatar}
                    alt={`Avatar of ${testimonial.name}`}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-white font-semibold">{testimonial.name}</h4>
                </div>
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-300 text-sm font-semibold relative z-10">{testimonial.text}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonials;
