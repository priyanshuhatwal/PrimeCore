import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
    route: "/aboutpage",
  },
  {
    id: "projects",
    title: "Projects",
    route: "/projectpage",
  },
  {
    id: "services",
    title: "Services",
    route: "/servicepage",
  },
  {
    id: "contact",
    title: "Contact Us",
    route: "/contactpage",
  },
];

const services = [
  {
    title: "Web Development",
    icon: web,
  },
  {
    title: "App Development",
    icon: mobile,
  },
  {
    title: "Software Development",
    icon: backend,
  },
  {
    title: "UI/UX Design",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Full‑Stack Engineer",
    company_name: "PrimeCore",
    icon: starbucks,
    iconBg: "#383E56",
    date: "2023 - Present",
    points: [
      "Building scalable and high‑performance web & mobile applications for clients across industries.",
      "Leading end‑to‑end development – requirement understanding, UI/UX mapping, development, testing & deployment.",
      "Integrating APIs and third‑party services with modern security and data flow handling.",
      "Delivering optimized digital experiences focused on conversions, speed, and user engagement.",
    ],
  },
  {
    title: "Product Frontend Engineer",
    company_name: "PrimeCore",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "2022 - 2023",
    points: [
      "Developed dynamic user interfaces using React.js, Tailwind, and component‑driven architecture.",
      "Transformed UI/UX designs into functional, responsive, and high‑quality front‑end experiences.",
      "Optimized performance, accessibility, and cross‑browser compatibility for multiple products.",
      "Built reusable UI components to support scalable product development.",
    ],
  },
  {
    title: "Application Developer Intern",
    company_name: "PrimeCore",
    icon: shopify,
    iconBg: "#383E56",
    date: "2021 - 2022",
    points: [
      "Assisted in building websites & internal dashboards using modern frameworks.",
      "Learned API integration, responsiveness handling & debugging techniques.",
      "Collaborated with designers for UI improvements and user‑journey enhancements.",
      "Practiced Git workflow and participated in basic code reviews.",
    ],
  },
  {
    title: "Technical Solutions Associate",
    company_name: "PrimeCore",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "2020 - 2021",
    points: [
      "Contributed to development of core web modules under senior guidance.",
      "Implemented UI elements, improved responsiveness & fixed UI-related issues.",
      "Gained hands-on experience with JavaScript, APIs & reusable components.",
      "Collaborated with team for testing, documentation & feature enhancements.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
