import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { useNavigate } from "react-router-dom"; // 1. Import useNavigate

const serviceList = [
  {
    title: "Website Development",
    desc: "Lightning-fast, modern, responsive websites with premium UI/UX and animations.",
    icon: "/icons/webdev.png",
  },
  {
    title: "Full-Stack Development",
    desc: "Custom backend, APIs, dashboards, admin panels and enterprise systems.",
    icon: "/icons/fullstack.png",
  },
  {
    title: "Mobile App Development",
    desc: "High-performance Android & iOS apps using React Native & secure APIs.",
    icon: "/icons/mobile.png",
  },
  {
    title: "UI/UX & Brand Identity",
    desc: "Premium UI design, brand identity, wireframes and user-flow optimization.",
    icon: "/icons/uiux.png",
  },
  {
    title: "E‑Commerce Solutions",
    desc: "Stores, product management, checkout systems and secure payment integration.",
    icon: "/icons/store.png",
  },
  {
    title: "Automation & AI Integration",
    desc: "AI chatbots, workflow automation, predictive tools and custom AI models.",
    icon: "/icons/ai.png",
  },
  {
    title: "Social Media Management",
    desc: "Content creation, daily posting, reels editing, strategy & page growth.",
    icon: "/icons/social.png",
  },
  {
    title: "Performance Marketing",
    desc: "Google, Meta & YouTube ads — focused on ROI, conversions & brand reach.",
    icon: "/icons/ads.png",
  },
  {
    title: "Cloud Deployment & DevOps",
    desc: "AWS, Vercel, Docker, CI/CD, monitoring and scalability solutions.",
    icon: "/icons/cloud.png",
  },
];

const Services = () => {
  // 2. Initialize Navigate Hook
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // 3. Navigation Function
  const handleContactClick = () => {
    navigate("/contactpage"); // Make sure this matches your App.jsx route EXACTLY
    window.scrollTo(0, 0); // Scroll to top when page changes
  };

  return (
    <div className="w-full relative">
      <div className="absolute -top-20 -left-10 w-[250px] sm:w-[380px] h-[250px] sm:h-[380px] bg-blue-600/20 blur-[100px] sm:blur-[150px] rounded-full"></div>
      <div className="absolute -bottom-20 -right-10 w-[200px] sm:w-[300px] h-[200px] sm:h-[300px] bg-cyan-500/20 blur-[90px] sm:blur-[130px] rounded-full"></div>

      <motion.div
        variants={isMobile ? {} : textVariant()}
        initial={isMobile ? { opacity: 1, y: 0 } : "hidden"}
        animate={isMobile ? { opacity: 1, y: 0 } : "show"}
      >
        <p className="text-secondary text-[14px] sm:text-[16px] mb-2 uppercase tracking-wider">
          Our Services
        </p>
        <h2 className="text-white text-[30px] sm:text-[42px] font-bold leading-tight">
          Premium Solutions for{" "}
          <span className="text-[#38b6ff]">Modern Brands</span>
        </h2>
      </motion.div>

      <div className="mt-8 sm:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {serviceList.map((service, i) => (
          <motion.div
            key={i}
            variants={isMobile ? {} : fadeIn("up", "spring", i * 0.15, 0.8)}
            initial={isMobile ? { opacity: 1, y: 0 } : "hidden"}
            animate={isMobile ? { opacity: 1, y: 0 } : "show"}
            className="p-[2px] rounded-[20px] bg-gradient-to-br from-blue-500 to-cyan-400 shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            <div className="bg-[#0f0f1a] rounded-[18px] p-6 sm:p-8 h-full flex flex-col items-center text-center gap-4">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500/20 to-cyan-400/20 rounded-full flex items-center justify-center mb-1">
                <span className="text-[#38b6ff] text-2xl">★</span>
              </div>

              <h3 className="text-white text-[18px] sm:text-[20px] font-bold">
                {service.title}
              </h3>
              <p className="text-secondary text-[13px] sm:text-[14px] leading-[22px]">
                {service.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA Section */}
      <motion.div
        variants={isMobile ? {} : fadeIn("up", "spring", 0.25, 0.9)}
        initial={isMobile ? { opacity: 1, y: 0 } : "hidden"}
        animate={isMobile ? { opacity: 1, y: 0 } : "show"}
        className="mt-16 sm:mt-20 bg-gradient-to-br from-blue-600 to-cyan-500 p-6 sm:p-10 rounded-[20px] shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left"
      >
        <div>
          <h3 className="text-white text-[22px] sm:text-[26px] font-bold">
            Need a Custom Service?
          </h3>
          <p className="text-white/90 mt-2 max-w-xl text-sm sm:text-base">
            Let's build powerful digital experiences tailored exactly for your
            business.
          </p>
        </div>

        {/* 4. Use standard button with onClick handler */}
        <button
          onClick={handleContactClick}
          className="w-full sm:w-auto px-8 py-3 bg-white text-blue-600 font-bold rounded-[12px] shadow-lg hover:bg-gray-100 transition whitespace-nowrap cursor-pointer z-10"
        >
          Contact Us
        </button>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Services, "services");
