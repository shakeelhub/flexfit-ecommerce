import React, { useMemo } from 'react';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import i1 from '../assets/dresses/1-optimized copy.webp';
import i2 from '../assets/dresses/2-optimized.webp';
import i3 from '../assets/dresses/3-optimized.webp';
import i4 from '../assets/dresses/4-optimized.webp';
import i5 from '../assets/dresses/5.webp';

const AboutUs = () => {
    const rotationClasses = useMemo(() => ['rotate-[-3deg]', 'rotate-[3deg]', 'rotate-[-5deg]', 'rotate-[3deg]', 'rotate-[7deg]'], []);
    const imageData = useMemo(() => [
        { src: i1, alt: "Couples Hoodie" },
        { src: i2, alt: "Gym Oversized T-Shirt" },
        { src:i3, alt: "Luffy Anime Hoodie" },
        { src: i4, alt: "Oversized T-Shirt" },
        { src: i5, alt: "Polo T-Shirt" },
    ], []);

    return (
        <div className="flex flex-col items-center min-h-screen py-10 bg-gray-50" id="aboutus">
            {/* Header Section */}
            <header className="text-center">
                <motion.h1
                    className="text-pink-600 text-2xl font-semibold cursor-pointer"
                    initial={{ opacity: 0, x: 300 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                    About Us
                </motion.h1>
                <motion.h2
                    className="text-pink-600 text-5xl font-bold mt-2 cursor-pointer"
                    initial={{ opacity: 0, x: -300 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
                >
                    Get to Know Us
                </motion.h2>
            </header>

            {/* Scrollable Image Section */}
            <section className="mt-10 w-full overflow-x-auto">
                <div className="flex justify-center gap-6 px-6 min-w-max">
                    {imageData.map((item, index) => (
                        <motion.div
                            key={index}
                            className={clsx(
                                "relative w-40 h-60 hover:scale-105 transition-transform duration-300",
                                rotationClasses[index % rotationClasses.length]
                            )}
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                                transition: { duration: 0.8, delay: 0.1 * index },
                            }}
                            viewport={{ once: true }}
                        >
                            <img
                                src={item.src}
                                alt={item.alt}
                                loading="lazy"
                                className="w-full h-full object-cover rounded-lg shadow-lg"
                            />
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Content Section */}
            <section className="mt-10 w-11/12 lg:w-3/4 text-center">
                <p className="text-gray-600 leading-8 tracking-wide">
                    FlexFit is constructed with handy clothes, design, and dyes. The clothes fit so well and they look
                    amazing on a curvy figure. Also, FlexFIg works on customers' customization orders with no minimum order
                    quantity, offering more varieties of colors and patterns. Sizes are available from S-XXXL, with
                    hygienic packing using hand gloves and a variety of gifts included in the product packaging.
                    <br />
                    <br />
                   FlexFIg always works based on the customer's taste. We have calm tele-callers who can clear
                    customers' doubts about t-shirts! We have built a reputation for being the customer's choice since
                    2024 ✨.
                </p>
            </section>
        </div>
    );
};

export default AboutUs;
