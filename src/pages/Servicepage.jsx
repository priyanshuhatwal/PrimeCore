// PrimeCore — Premium Animated Services Page
// Fully responsive, animated, modern SaaS-level design

import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

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
  return (
    <div className="w-full relative">
      {/* Background Glow */}
      <div className="absolute -top-28 -left-16 w-[380px] h-[380px] bg-blue-600/20 blur-[150px] rounded-full"></div>
      <div className="absolute -bottom-20 -right-12 w-[300px] h-[300px] bg-cyan-500/20 blur-[130px] rounded-full"></div>

      {/* Header */}
      <motion.div variants={textVariant()}>
        <p className="text-secondary text-[16px] mb-2">Our Services</p>
        <h2 className="text-white text-[42px] font-bold">
          Premium Solutions for{" "}
          <span className="text-[#38b6ff]">Modern Brands</span>
        </h2>
      </motion.div>

      {/* Services Grid */}
      <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {serviceList.map((service, i) => (
          <motion.div
            variants={fadeIn("up", "spring", i * 0.15, 0.8)}
            className="p-[3px] rounded-[20px] bg-gradient-to-br from-blue-500 to-cyan-400 shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            <div className="bg-[#0f0f1a] rounded-[20px] p-8 h-full flex flex-col items-center text-center gap-4">
              <div className="text-[#38b6ff] text-4xl">★</div>

              <h3 className="text-white text-[20px] font-bold">
                {service.title}
              </h3>
              <p className="text-secondary text-[14px] leading-[22px]">
                {service.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA Section */}
      <motion.div
        variants={fadeIn("up", "spring", 0.25, 0.9)}
        className="mt-20 bg-gradient-to-br from-blue-500 to-cyan-400 p-10 rounded-[20px] shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6"
      >
        <div>
          <h3 className="text-white text-[26px] font-bold">
            Need a Custom Service?
          </h3>
          <p className="text-white/90 mt-2 max-w-xl">
            Let's build powerful digital experiences tailored exactly for your
            business.
          </p>
        </div>

        <a
          href="/contactpage"
          className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-[12px] shadow hover:opacity-90 transition"
        >
          Contact Us
        </a>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Services, "services");
