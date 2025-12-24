import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // Import Link here
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant, slideIn } from "../utils/motion";

/* ================= PROJECT DATA ================= */

const featuredProject = {
  title: "Business Website & Lead System",
  subtitle: "Flagship Project • Production Ready",
  description:
    "A complete business website solution focused on performance, clean UI, and lead generation. The project includes a modern frontend, structured contact system, and WhatsApp-based lead delivery without any backend dependency.",
  features: [
    "Modern dark UI with animations",
    "WhatsApp lead integration",
    "Mobile-first responsive layout",
    "Clean code & scalable structure",
    "Optimized for speed and SEO",
  ],
  tech: ["React", "Tailwind CSS", "Framer Motion"],
};

const otherProjects = [
  {
    title: "Developer Portfolio Platform",
    description:
      "A personal portfolio platform featuring animated sections, project showcases, and interactive UI to create a strong first impression.",
    tech: ["React", "Three.js", "Framer Motion"],
  },
  {
    title: "High-Converting Landing Page",
    description:
      "A focused landing page designed to convert visitors into leads using clear messaging, CTA sections, and optimized layout.",
    tech: ["React", "Tailwind CSS"],
  },
  {
    title: "WhatsApp Contact System",
    description:
      "A reusable contact system that sends structured customer inquiries directly to WhatsApp with zero backend and full browser compatibility.",
    tech: ["JavaScript", "React"],
  },
  {
    title: "Admin Dashboard UI",
    description:
      "A modern dashboard interface for managing users, content, and analytics with clean layouts and smooth interactions.",
    tech: ["React", "Chart UI", "Tailwind CSS"],
  },
  {
    title: "SaaS Marketing Website",
    description:
      "A marketing website built for SaaS-style products with feature sections, pricing layout, and smooth scrolling experience.",
    tech: ["React", "Framer Motion"],
  },
];

/* ================= COMPONENT ================= */

const Projects = () => {
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

  return (
    <div className="w-full">
      {/* ================= HEADER ================= */}
      <motion.div
        variants={isMobile ? {} : textVariant()}
        initial={isMobile ? { opacity: 1, y: 0 } : "hidden"}
        animate={isMobile ? { opacity: 1, y: 0 } : "show"}
      >
        <p className={styles.sectionSubText}>Our Work</p>
        <h2 className={`${styles.sectionHeadText} text-[30px] sm:text-[50px]`}>
          Projects & Experience
        </h2>
      </motion.div>

      <motion.p
        variants={isMobile ? {} : fadeIn("up", "tween", 0.2, 1)}
        initial={isMobile ? { opacity: 1 } : "hidden"}
        animate={isMobile ? { opacity: 1 } : "show"}
        className="mt-4 text-secondary text-[15px] sm:text-[17px] max-w-4xl leading-relaxed"
      >
        These projects represent real-world web solutions built with modern
        technologies, clean code practices, and a strong focus on usability,
        performance, and business goals.
      </motion.p>

      {/* ================= STATS ================= */}
      <motion.div
        variants={isMobile ? {} : fadeIn("up", "spring", 0.3, 0.8)}
        initial={isMobile ? { opacity: 1, y: 0 } : "hidden"}
        animate={isMobile ? { opacity: 1, y: 0 } : "show"}
        className="mt-8 sm:mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6"
      >
        {[
          { label: "Projects Built", value: "12+" },
          { label: "Reusable Systems", value: "6+" },
          { label: "Core Technologies", value: "8+" },
          { label: "Client Satisfaction", value: "100%" },
        ].map((item, i) => (
          <div
            key={i}
            className="bg-black-100 border border-white/10 rounded-xl p-4 sm:p-6 text-center"
          >
            <p className="text-white text-xl sm:text-2xl font-bold">
              {item.value}
            </p>
            <p className="text-secondary text-xs sm:text-sm mt-1">
              {item.label}
            </p>
          </div>
        ))}
      </motion.div>

      {/* ================= FEATURED PROJECT ================= */}
      <motion.div
        // Disabled slideIn on mobile because it causes horizontal scroll issues
        variants={isMobile ? {} : slideIn("left", "tween", 0.2, 1)}
        initial={isMobile ? { opacity: 1, x: 0 } : "hidden"}
        animate={isMobile ? { opacity: 1, x: 0 } : "show"}
        className="mt-12 sm:mt-20 bg-black-100 border border-white/10 rounded-2xl p-6 sm:p-10"
      >
        <p className="text-[#38b6ff] text-xs sm:text-sm font-semibold tracking-wider">
          FEATURED PROJECT
        </p>

        <h3 className="text-white text-2xl sm:text-3xl font-bold mt-2 leading-tight">
          {featuredProject.title}
        </h3>

        <p className="text-secondary mt-1 text-sm sm:text-base">
          {featuredProject.subtitle}
        </p>

        <p className="mt-4 sm:mt-6 text-secondary max-w-3xl leading-relaxed text-sm sm:text-base">
          {featuredProject.description}
        </p>

        <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
          {featuredProject.features.map((item, i) => (
            <li
              key={i}
              className="text-white text-xs sm:text-sm bg-white/5 px-4 py-2 rounded-lg flex items-center gap-2"
            >
              <span className="w-1.5 h-1.5 bg-[#38b6ff] rounded-full"></span>
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap gap-2">
          {featuredProject.tech.map((tech, i) => (
            <span
              key={i}
              className="text-xs px-3 py-1 rounded-full bg-[#38b6ff] text-black font-bold"
            >
              {tech}
            </span>
          ))}
        </div>
      </motion.div>

      {/* ================= MORE PROJECTS ================= */}
      <div className="mt-16 sm:mt-20">
        <h3 className="text-white text-2xl font-bold mb-6 sm:mb-8">
          More Projects
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {otherProjects.map((project, index) => (
            <motion.div
              key={index}
              variants={
                isMobile ? {} : fadeIn("up", "spring", index * 0.15, 0.75)
              }
              initial={isMobile ? { opacity: 1, y: 0 } : "hidden"}
              animate={isMobile ? { opacity: 1, y: 0 } : "show"}
              className="bg-black-100 border border-white/10 rounded-xl p-6 hover:border-white/20 transition-colors"
            >
              <h4 className="text-white text-lg font-semibold">
                {project.title}
              </h4>

              <p className="text-secondary text-sm mt-3 leading-relaxed">
                {project.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-[11px] sm:text-xs px-3 py-1 rounded-full bg-white/5 text-white/80"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ================= CTA ================= */}
      <motion.div
        variants={isMobile ? {} : fadeIn("up", "tween", 0.3, 1)}
        initial={isMobile ? { opacity: 1, y: 0 } : "hidden"}
        animate={isMobile ? { opacity: 1, y: 0 } : "show"}
        className="mt-16 sm:mt-24 bg-gradient-to-r from-[#38b6ff]/20 to-cyan-400/10 border border-white/10 rounded-2xl p-6 sm:p-10 text-center"
      >
        <h3 className="text-white text-2xl sm:text-3xl font-bold">
          Ready to Build Something Powerful?
        </h3>

        <p className="text-secondary mt-3 max-w-2xl mx-auto text-sm sm:text-base">
          Let’s turn your idea into a high-quality digital product with clean
          design and solid performance.
        </p>

        {/* Replaced <a> with Link */}
        <Link
          to="/contactpage"
          className="inline-block mt-6 bg-[#38b6ff] text-black px-8 py-3 rounded-xl font-bold hover:opacity-90 transition shadow-lg shadow-blue-500/20"
        >
          Get in Touch
        </Link>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Projects, "projects");
