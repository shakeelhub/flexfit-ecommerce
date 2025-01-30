import React, { useState } from "react";
import { motion } from 'framer-motion';
import contact from '../assets/dresses/contact_us.webp'

const Contact = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        contact: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const whatsappMessage = `Dear Team,\n\nI am ${formData.firstName} ${formData.lastName}.\n\nYou can reach me at ${formData.contact}.\n\nHere is my message: \"${formData.message}\".\n\nI look forward to your response✨. Thank you!`;
        const whatsappURL = `https://wa.me/919445174614?text=${encodeURIComponent(whatsappMessage)}`;
        window.open(whatsappURL, "_blank");
    };

    return (
        <>
            <header className="text-center mt-10 sm:mt-8" id="contact">
                <motion.h1
                    className="text-pink-600 text-2xl font-semibold cursor-pointer"
                    initial={{ opacity: 0, x: 300 }}  // Starts from the right
                    whileInView={{ opacity: 1, x: 0 }}  // Ends in the normal position
                    transition={{ duration: 1, ease: "easeInOut" }}
                    viewport={{ once: false }}  // Trigger animation multiple times as you scroll
                >
                    Contact Us
                </motion.h1>
                <motion.h2
                    className="text-pink-600 text-5xl font-bold mt-2 cursor-pointer"
                    initial={{ opacity: 0, x: -300 }}  // Starts from the left
                    whileInView={{ opacity: 1, x: 0 }}  // Ends in the normal position
                    transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
                    viewport={{ once: false }}  // Trigger animation multiple times as you scroll
                >
                    We’re Just a Message Away!
                </motion.h2>
            </header>

            <div className="container mx-auto px-4 py-12 flex flex-col md:flex-row items-center gap-8">

                <div className="md:w-1/2">
                    <motion.img
                        src={contact}
                        alt="Contact Us Hero"
                        className="w-full rounded-lg shadow-lg object-cover "
                        style={{"height":"46rem"}}
                        initial={{ opacity: 0 }} 
                        whileInView={{ opacity: 1 }}  
                        transition={{ duration: 1, ease: "easeInOut" }} 
                        viewport={{ once: false }}  
                    />
                </div>

                <div className="md:w-1/2 bg-white w-full sm:w-3/4 mx-auto rounded-lg shadow-lg p-8">
                    <h3 className="text-3xl font-bold text-pink-600 mb-6 text-center cursor-none">
                        Get In Touch
                    </h3>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* First Name */}
                        <motion.div
                            className="w-full"
                            initial={{ x: -100, opacity: 0 }}  // Start from left
                            whileInView={{ x: 0, opacity: 1 }} // Move to its original position
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            viewport={{ once: false }}  // Trigger animation multiple times on scroll
                        >
                            <label className="block text-base font-medium text-pink-600 mb-1 tracking-wider">First Name</label>
                            <input
                                placeholder="First name, go ahead !"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                className="input w-full"
                                type="text"
                                required
                            />
                        </motion.div>

                        {/* Last Name */}
                        <motion.div
                            className="w-full"
                            initial={{ x: 100, opacity: 0 }}  // Start from right
                            whileInView={{ x: 0, opacity: 1 }} // Move to its original position
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            viewport={{ once: false }}  // Trigger animation multiple times on scroll
                        >
                            <label className="block text-base font-medium text-pink-600 mb-1 tracking-wider">Last Name</label>
                            <input
                                placeholder="Last name, go ahead!"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                className="input w-full"
                                type="text"
                                required
                            />
                        </motion.div>

                        {/* Contact */}
                        <motion.div
                            className="w-full"
                            initial={{ x: -100, opacity: 0 }}  // Start from left
                            whileInView={{ x: 0, opacity: 1 }} // Move to its original position
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            viewport={{ once: false }}  // Trigger animation multiple times on scroll
                        >
                            <label className="block text-base font-medium text-pink-600 mb-1 tracking-wider">Contact</label>
                            <input
                                placeholder="How can we reach you?"
                                name="contact"
                                value={formData.contact}
                                onChange={handleChange}
                                className="input w-full"
                                type="tel"
                                required
                            />
                        </motion.div>

                        {/* Message */}
                        <motion.div
                            className="w-full"
                            initial={{ x: 100, opacity: 0 }}  // Start from right
                            whileInView={{ x: 0, opacity: 1 }} // Move to its original position
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            viewport={{ once: false }}  // Trigger animation multiple times on scroll
                        >
                            <label className="block text-base font-medium text-pink-600 mb-1 tracking-wider">Message</label>
                            <textarea
                                placeholder="Got something to say? Drop here!"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                className="input w-full"
                                rows="4"
                                required
                            ></textarea>
                        </motion.div>

                        {/* Submit Button */}
                        <motion.button
                            type="submit"
                            className="w-full bg-pink-500 text-white font-bold py-1.5 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 hover:bg-pink-600 transition duration-300 shimmer-effect"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            viewport={{ once: false }}  // Trigger animation multiple times on scroll
                        >
                            Submit
                        </motion.button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Contact;
