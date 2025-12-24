import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { Link } from "react-router-dom";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Mobile Detection Logic (Animation Fix)
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappNumber = "918949093837";

    const text =
      "------------------------------\n" +
      "PRIMECORE - NEW INQUIRY\n" +
      "------------------------------\n\n" +
      "Client Name:\n" +
      form.name +
      "\n\n" +
      "Email:\n" +
      form.email +
      "\n\n" +
      "Message:\n" +
      form.message +
      "\n\n" +
      "------------------------------\n" +
      "Source: Website Contact Page\n" +
      "------------------------------";

    const url =
      "https://wa.me/" + whatsappNumber + "?text=" + encodeURIComponent(text);

    window.open(url, "_blank");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="w-full relative overflow-hidden">
      {/* Background Glow - Adjusted sizes for mobile to prevent overflow */}
      <div className="absolute -top-20 -left-20 w-[200px] sm:w-[350px] h-[200px] sm:h-[350px] bg-blue-600/20 rounded-full blur-[100px] sm:blur-[140px]" />
      <div className="absolute -bottom-20 -right-16 w-[200px] sm:w-[300px] h-[200px] sm:h-[300px] bg-cyan-400/20 rounded-full blur-[100px] sm:blur-[130px]" />

      {/* Header */}
      <motion.div
        variants={isMobile ? {} : textVariant()}
        initial={isMobile ? { opacity: 1, y: 0 } : "hidden"}
        animate={isMobile ? { opacity: 1, y: 0 } : "show"}
      >
        <p className="text-secondary text-[14px] sm:text-[16px] mb-2 uppercase tracking-wider">
          Contact Us
        </p>
        <h2 className="text-white text-[32px] sm:text-[42px] font-bold leading-tight">
          Get in Touch with <span className="text-[#38b6ff]">PrimeCore</span>
        </h2>
      </motion.div>

      {/* Content */}
      <div className="mt-8 sm:mt-14 grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
        {/* LEFT – DETAILS */}
        <motion.div
          variants={isMobile ? {} : fadeIn("right", "spring", 0.2, 0.75)}
          initial={isMobile ? { opacity: 1, x: 0 } : "hidden"}
          animate={isMobile ? { opacity: 1, x: 0 } : "show"}
          className="bg-[#12121f] p-6 sm:p-8 rounded-[20px] border border-white/10 shadow-xl backdrop-blur-xl h-full"
        >
          <h3 className="text-white text-[22px] sm:text-[26px] font-semibold mb-6">
            Contact Information
          </h3>

          <div className="space-y-6 text-secondary">
            <div>
              <p className="text-[14px] sm:text-[15px] text-gray-400">Email</p>
              <p className="text-white text-[16px] sm:text-[17px] font-medium break-all">
                primecoretechworks@gmail.com
              </p>
            </div>

            <div>
              <p className="text-[14px] sm:text-[15px] text-gray-400">Phone</p>
              <p className="text-white text-[16px] sm:text-[17px] font-medium">
                +91 89490 93837
              </p>
            </div>

            <div>
              <p className="text-[14px] sm:text-[15px] text-gray-400">
                Address
              </p>
              <p className="text-white text-[16px] sm:text-[17px] font-medium leading-[26px]">
                PrimeCore <br />
                Jhunjhunu, Rajasthan, India
              </p>
            </div>

            <div>
              <p className="text-[14px] sm:text-[15px] text-gray-400">Social</p>
              <a
                href="https://www.instagram.com/primecore_it"
                target="_blank"
                rel="noreferrer"
                className="text-[#38b6ff] hover:underline font-medium"
              >
                Instagram
              </a>
            </div>
          </div>
        </motion.div>

        {/* RIGHT – FORM */}
        <motion.form
          onSubmit={handleSubmit}
          variants={isMobile ? {} : fadeIn("left", "spring", 0.2, 0.75)}
          initial={isMobile ? { opacity: 1, x: 0 } : "hidden"}
          animate={isMobile ? { opacity: 1, x: 0 } : "show"}
          className="bg-[#12121f] p-6 sm:p-8 rounded-[20px] border border-white/10 shadow-xl flex flex-col gap-4 sm:gap-6 backdrop-blur-xl"
        >
          <h3 className="text-white text-[22px] sm:text-[26px] font-semibold mb-2">
            Send a Message
          </h3>

          <div className="flex flex-col gap-4">
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              // text-base prevents auto-zoom on iOS
              className="bg-[#0f0f1a] text-white text-base p-3 sm:p-4 rounded-[12px] border border-white/10 focus:border-[#38b6ff] outline-none placeholder:text-white/30"
            />

            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="bg-[#0f0f1a] text-white text-base p-3 sm:p-4 rounded-[12px] border border-white/10 focus:border-[#38b6ff] outline-none placeholder:text-white/30"
            />

            <textarea
              rows="5"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Tell us about your project..."
              required
              className="bg-[#0f0f1a] text-white text-base p-3 sm:p-4 rounded-[12px] border border-white/10 focus:border-[#38b6ff] outline-none placeholder:text-white/30 resize-none"
            />
          </div>

          <button
            type="submit"
            className="mt-2 bg-gradient-to-r from-blue-500 to-cyan-400 py-3 sm:py-4 rounded-[12px] text-white font-bold shadow-lg hover:opacity-90 transition active:scale-[0.98]"
          >
            Send on WhatsApp
          </button>
        </motion.form>
      </div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
