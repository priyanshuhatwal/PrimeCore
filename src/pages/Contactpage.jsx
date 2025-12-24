// PrimeCore — Professional Contact Page
// Focus: Clean UI + Clean WhatsApp Message (NO EMOJIS)

import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

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
    <div className="w-full relative">
      {/* Background Glow */}
      <div className="absolute -top-32 -left-20 w-[350px] h-[350px] bg-blue-600/20 rounded-full blur-[140px]" />
      <div className="absolute -bottom-20 -right-16 w-[300px] h-[300px] bg-cyan-400/20 rounded-full blur-[130px]" />

      {/* Header */}
      <motion.div variants={textVariant()}>
        <p className="text-secondary text-[16px] mb-2">Contact Us</p>
        <h2 className="text-white text-[42px] font-bold">
          Get in Touch with <span className="text-[#38b6ff]">PrimeCore</span>
        </h2>
      </motion.div>

      {/* Content */}
      <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* LEFT – DETAILS */}
        <motion.div
          variants={fadeIn("right", "spring", 0.2, 0.75)}
          className="bg-[#12121f] p-8 rounded-[20px] border border-white/10 shadow-xl backdrop-blur-xl"
        >
          <h3 className="text-white text-[26px] font-semibold mb-6">
            Contact Information
          </h3>

          <div className="space-y-6 text-secondary">
            <div>
              <p className="text-[15px]">Email</p>
              <p className="text-white text-[17px] font-medium">
                primecoretechworks@gmail.com
              </p>
            </div>

            <div>
              <p className="text-[15px]">Phone</p>
              <p className="text-white text-[17px] font-medium">
                +91 89490 93837
              </p>
            </div>

            <div>
              <p className="text-[15px]">Address</p>
              <p className="text-white text-[17px] font-medium leading-[26px]">
                PrimeCore <br />
                Jhunjhunu, Rajasthan, India
              </p>
            </div>

            <div>
              <p className="text-[15px]">Social</p>
              <a
                href="https://www.instagram.com/primecore_it"
                target="_blank"
                rel="noreferrer"
                className="text-[#38b6ff] hover:underline"
              >
                Instagram
              </a>
            </div>
          </div>
        </motion.div>

        {/* RIGHT – FORM */}
        <motion.form
          onSubmit={handleSubmit}
          variants={fadeIn("left", "spring", 0.2, 0.75)}
          className="bg-[#12121f] p-8 rounded-[20px] border border-white/10 shadow-xl flex flex-col gap-6 backdrop-blur-xl"
        >
          <h3 className="text-white text-[26px] font-semibold mb-2">
            Send a Message
          </h3>

          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="bg-[#0f0f1a] text-white p-3 rounded-[12px] border border-white/10 focus:border-[#38b6ff] outline-none"
          />

          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            className="bg-[#0f0f1a] text-white p-3 rounded-[12px] border border-white/10 focus:border-[#38b6ff] outline-none"
          />

          <textarea
            rows="5"
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Tell us about your project..."
            required
            className="bg-[#0f0f1a] text-white p-3 rounded-[12px] border border-white/10 focus:border-[#38b6ff] outline-none"
          />

          <button
            type="submit"
            className="mt-2 bg-gradient-to-r from-blue-500 to-cyan-400 py-3 rounded-[12px] text-white font-semibold shadow-lg hover:opacity-90 transition"
          >
            Send on WhatsApp
          </button>
        </motion.form>
      </div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
