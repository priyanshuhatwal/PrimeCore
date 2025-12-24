import { motion } from "framer-motion";
import { useState, useEffect } from "react";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const words = ["innovation", "scalability", "performance"];

const Hero = () => {
  const [typedText, setTypedText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];

    const typingSpeed = isDeleting ? 80 : 120;

    const timeout = setTimeout(() => {
      const updatedText = isDeleting
        ? currentWord.slice(0, charIndex - 1)
        : currentWord.slice(0, charIndex + 1);

      setTypedText(updatedText);
      setCharIndex(isDeleting ? charIndex - 1 : charIndex + 1);

      if (!isDeleting && updatedText === currentWord) {
        setTimeout(() => setIsDeleting(true), 800);
      } else if (isDeleting && updatedText === "") {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, wordIndex]);

  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#38b6ff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            <span className="text-stroke-blue">Welcome to</span>{" "}
            <span className="text-[#38b6ff]">
              Prime<span className="text-white">Core</span>
            </span>
          </h1>

          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Engineering future-ready software solutions,
            <br className="sm:block hidden" />
            delivering{" "}
            <span className="text-[#38b6ff] font-bold">
              {typedText}
              <span className="text-white">|</span>
            </span>
          </p>
        </div>
      </div>

      <ComputersCanvas />

    </section>
  );
};



export default Hero;
