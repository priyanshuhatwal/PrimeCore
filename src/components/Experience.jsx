import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#0b0f1a",
        color: "#fff",
        border: "1px solid rgba(56,182,255,0.4)",
        boxShadow: "0 0 15px rgba(56,182,255,0.3)",
      }}
      contentArrowStyle={{ borderRight: "7px solid #0b0f1a" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
        <p
          className="text-[#38b6ff] text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center `}>
          Our Journey in Tech
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Powering the Next <span className="text-[#38b6ff]">Digital Era</span>
        </h2>
      </motion.div>

      <p className="text-center text-[#97a7c9] mt-3 text-[16px] max-w-3xl mx-auto">
        From product engineering to scalable cloud solutions — we’ve been
        building digital experiences that create real business impact.
      </p>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline lineColor="#38b6ff">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
