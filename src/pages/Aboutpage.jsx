import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom"; // Import Link for redirection

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

/*
  UPDATES:
  1. All Contact Links now redirect to '/contactpage'.
  2. Replaced <a> tags with <Link> for SPA navigation.
  3. Removed inline ContactForm to centralize leads on the Contact Page.
*/

const Icon = ({ name }) => {
  const size = 24;
  const common = {
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    fill: "none",
  };
  switch (name) {
    case "web":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          {...common}
        >
          <path d="M3 12h18" />
          <path d="M3 6h18" opacity="0.6" />
          <path d="M3 18h18" opacity="0.6" />
        </svg>
      );
    case "cloud":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          {...common}
        >
          <path d="M20 17.58A4 4 0 0016 12H8.26A3.5 3.5 0 104.5 16.5" />
        </svg>
      );
    case "mobile":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          {...common}
        >
          <rect x="7" y="2" width="10" height="20" rx="2" />
          <path d="M11 18h2" />
        </svg>
      );
    case "ai":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          {...common}
        >
          <circle cx="12" cy="12" r="3" />
          <path d="M12 3v2" />
          <path d="M12 19v2" />
        </svg>
      );
    default:
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          {...common}
        >
          <circle cx="12" cy="12" r="9" strokeWidth="1.2" />
        </svg>
      );
  }
};

const ServiceCard = ({ i, s, onOpen, isMobile }) => {
  const motionProps = isMobile
    ? {
        animate: { opacity: 1, x: 0, y: 0 },
        initial: { opacity: 1, x: 0, y: 0 },
        transition: { duration: 0 },
      }
    : { variants: fadeIn("up", "spring", i * 0.1, 0.75) };

  return (
    <motion.div
      {...motionProps}
      className="w-full p-[1px] rounded-[14px] bg-gradient-to-br from-[#0ea5e9] to-[#06b6d4] shadow-xl"
    >
      <div className="bg-[#071023] rounded-[13px] p-5 h-full flex flex-col justify-between min-h-[280px]">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 flex-shrink-0 bg-white/10 rounded-lg flex items-center justify-center text-blue-300">
            <Icon name={s.icon} />
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="text-white text-[18px] font-bold leading-tight">
              {s.title}
            </h4>
            <p className="text-secondary text-[13px] mt-2 line-clamp-3 leading-snug">
              {s.short}
            </p>

            <div className="mt-3 flex flex-wrap gap-2">
              {s.tags?.slice(0, 3).map((t, idx) => (
                <span
                  key={idx}
                  className="text-[11px] px-2 py-1 bg-white/5 rounded text-white/80 whitespace-nowrap"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-5 flex items-center justify-between gap-3 pt-4 border-t border-white/5">
          <button
            onClick={() => onOpen(s.key)}
            className="flex-1 py-2 rounded-lg bg-white/5 border border-white/10 text-sm text-white/90 active:bg-white/10 transition"
          >
            Learn more
          </button>

          {/* UPDATED: Start project button now links to /contactpage */}
          <Link
            to="/contactpage"
            className="flex-1 text-center py-2 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-lg text-sm font-semibold shadow hover:opacity-90"
          >
            Start project
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

const Modal = ({ open, onClose, service }) => {
  const [tab, setTab] = useState("overview");

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      setTab("overview");
    } else {
      document.body.style.overflow = "auto";
    }
    return () => (document.body.style.overflow = "auto");
  }, [open]);

  if (!service) return null;

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />

          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            className="relative w-full max-w-4xl bg-[#071023] rounded-xl border border-white/10 shadow-2xl overflow-hidden flex flex-col max-h-[85vh] sm:max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="absolute top-0 right-0 z-10 p-3">
              <button
                onClick={onClose}
                className="w-8 h-8 flex items-center justify-center bg-black/40 rounded-full text-white/70 hover:bg-white/10 hover:text-white backdrop-blur-md"
              >
                ✕
              </button>
            </div>

            <div className="overflow-y-auto p-5 sm:p-8 custom-scrollbar">
              <div className="flex flex-col md:flex-row gap-5 md:gap-8">
                <div className="flex-shrink-0 flex items-start gap-4 md:block">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center text-black font-bold text-xl shadow-lg">
                    {service.initials}
                  </div>
                  <div className="md:mt-4 md:hidden">
                    <h3 className="text-white text-xl font-bold leading-tight">
                      {service.title}
                    </h3>
                    <p className="text-secondary text-sm mt-1">
                      {service.short}
                    </p>
                  </div>
                </div>

                <div className="flex-1">
                  <div className="hidden md:block mb-4">
                    <h3 className="text-white text-2xl font-bold">
                      {service.title}
                    </h3>
                    <p className="text-secondary mt-1">{service.short}</p>
                  </div>

                  <nav className="flex flex-wrap gap-2 mb-6 border-b border-white/10 pb-4 sticky top-0 bg-[#071023] z-10 pt-2">
                    {[
                      { key: "overview", label: "Overview" },
                      { key: "deliverables", label: "Deliverables" },
                      { key: "timeline", label: "Timeline & Pricing" },
                      { key: "contact", label: "Contact" },
                    ].map((t) => (
                      <button
                        key={t.key}
                        onClick={() => setTab(t.key)}
                        className={`px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all ${
                          tab === t.key
                            ? "bg-white text-blue-900 shadow-md scale-105"
                            : "text-white/60 bg-white/5 hover:bg-white/10"
                        }`}
                      >
                        {t.label}
                      </button>
                    ))}
                  </nav>

                  <div className="min-h-[200px]">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={tab}
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        transition={{ duration: 0.2 }}
                      >
                        {tab === "overview" && (
                          <div className="space-y-4">
                            <p className="text-gray-300 leading-relaxed">
                              {service.details.overview}
                            </p>
                            <div className="bg-white/5 p-4 rounded-lg">
                              <h5 className="text-white font-semibold mb-2 text-sm uppercase text-blue-400">
                                Features
                              </h5>
                              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                {service.details.features.map((f, idx) => (
                                  <li
                                    key={idx}
                                    className="flex items-center gap-2 text-sm text-gray-300"
                                  >
                                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                                    {f}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        )}

                        {tab === "deliverables" && (
                          <div className="space-y-4">
                            <div className="bg-gradient-to-r from-green-500/10 to-transparent p-4 rounded-lg border-l-4 border-green-500">
                              <h4 className="text-white font-semibold mb-3">
                                What we deliver
                              </h4>
                              <ul className="space-y-3">
                                {service.details.deliverables.map((d, idx) => (
                                  <li
                                    key={idx}
                                    className="flex items-start gap-3 text-sm text-gray-300"
                                  >
                                    <span className="bg-green-500/20 text-green-400 p-1 rounded">
                                      ✓
                                    </span>
                                    {d}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        )}

                        {tab === "timeline" && (
                          <div className="space-y-4">
                            <p className="text-gray-300 italic border-l-2 border-yellow-500 pl-4">
                              {service.details.timeline_text}
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4">
                              {service.details.pricing.map((p, idx) => (
                                <div
                                  key={idx}
                                  className="p-4 bg-white/5 rounded-lg border border-white/5"
                                >
                                  <p className="text-blue-300 font-bold text-sm uppercase">
                                    {p.tier}
                                  </p>
                                  <p className="text-white font-bold text-lg mt-1">
                                    {p.price}
                                  </p>
                                  <p className="text-xs text-gray-400 mt-2">
                                    {p.note}
                                  </p>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* UPDATED: Contact Tab now directs to /contactpage */}
                        {tab === "contact" && (
                          <div className="bg-blue-600/10 p-6 rounded-lg border border-blue-500/20 text-center">
                            <h4 className="text-white font-semibold mb-2 text-xl">
                              Ready to start?
                            </h4>
                            <p className="text-gray-300 mb-6 text-sm">
                              Fill out our detailed inquiry form on the contact
                              page to get started with {service.title}.
                            </p>
                            <Link
                              to="/contactpage"
                              className="inline-block w-full sm:w-auto px-8 py-3 bg-white text-blue-600 font-bold rounded-lg shadow-lg hover:bg-gray-100 transition"
                            >
                              Go to Contact Page
                            </Link>
                          </div>
                        )}
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 flex flex-col-reverse sm:flex-row gap-3 justify-end">
                <button
                  onClick={onClose}
                  className="px-6 py-2.5 rounded-lg border border-white/10 text-white/70 hover:bg-white/5 font-medium text-sm transition"
                >
                  Close
                </button>

                {/* UPDATED: Footer Email button now links to /contactpage */}
                <Link
                  to="/contactpage"
                  className="px-6 py-2.5 bg-white text-blue-900 rounded-lg font-bold text-sm shadow-lg text-center transition hover:bg-gray-100"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

const About = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Services Data (Unchanged)
  const servicesMap = {
    web: {
      key: "web",
      title: "Custom Website Development",
      short: "Fast, accessible & SEO-friendly websites using React/Next.js.",
      initials: "WD",
      icon: "web",
      tags: ["SSR/SSG", "Performance", "Accessibility"],
      details: {
        overview:
          "We build production-grade websites with strong SEO foundations and accessibility. Focus is on performance, maintainability and content-driven growth.",
        features: [
          "SEO-first architecture",
          "Content modeling & headless CMS",
          "Core Web Vitals optimization",
        ],
        deliverables: [
          "Design system / component library",
          "Pages & templates",
          "CMS integration & training",
        ],
        timeline_text:
          "Typical timeline for an MVP site: 3-6 weeks. Complex platforms vary.",
        pricing: [
          {
            tier: "Starter",
            price: "₹40k - ₹80k",
            note: "Landing + basic pages",
          },
          {
            tier: "Growth",
            price: "₹80k - ₹2.5L",
            note: "Custom templates + CMS",
          },
          { tier: "Enterprise", price: "Custom", note: "SLA + integrations" },
        ],
      },
    },
    api: {
      key: "api",
      title: "Full-Stack & API Engineering",
      short: "Scalable backends, secure APIs and microservices.",
      initials: "AP",
      icon: "cloud",
      tags: ["Node.js", "Postgres", "APIs"],
      details: {
        overview:
          "Reliable server-side engineering with observability, auth and predictable deployments.",
        features: [
          "REST / GraphQL APIs",
          "Auth & role-based access",
          "Monitoring & logging",
        ],
        deliverables: [
          "API spec & tests",
          "Deployment pipelines",
          "Runbooks & docs",
        ],
        timeline_text: "API projects: 2-8 weeks depending on integrations.",
        pricing: [
          {
            tier: "API Basic",
            price: "₹60k - ₹1.5L",
            note: "Simple CRUD + auth",
          },
          {
            tier: "API Pro",
            price: "₹1.5L - ₹4L",
            note: "3rd party integrations",
          },
          { tier: "Custom", price: "Custom", note: "Enterprise-grade" },
        ],
      },
    },
    mobile: {
      key: "mobile",
      title: "Mobile Apps (React Native)",
      short: "Cross-platform apps with fast releases and OTA updates.",
      initials: "MA",
      icon: "mobile",
      tags: ["React Native", "Play Store", "App Store"],
      details: {
        overview:
          "Ship native-feeling apps with a single codebase, analytics and CI-driven release pipelines.",
        features: [
          "Push notifications",
          "In-app purchases",
          "Analytics & crash reporting",
        ],
        deliverables: [
          "Prototype & MVP",
          "Store submission setup",
          "Release playbook",
        ],
        timeline_text: "MVP apps: 6-12 weeks typical.",
        pricing: [
          { tier: "MVP", price: "₹2L - ₹5L", note: "Core flows + analytics" },
          { tier: "Scale", price: "₹5L+", note: "Advanced features & ops" },
        ],
      },
    },
    ai: {
      key: "ai",
      title: "AI & Automation",
      short: "Smart automations, chatbots and ML-backed features.",
      initials: "AI",
      icon: "ai",
      tags: ["NLP", "Automation", "Embeddings"],
      details: {
        overview:
          "Add intelligent features like semantic search, automated replies and recommendation systems to reduce manual work.",
        features: [
          "Conversational assistants",
          "Vector search",
          "Process automation",
        ],
        deliverables: [
          "Proof of concept",
          "Integration & monitoring",
          "Model cards & docs",
        ],
        timeline_text: "POCs: 2-6 weeks. Production features: 6+ weeks.",
        pricing: [
          { tier: "POC", price: "₹50k - ₹2L", note: "Pilot integration" },
          { tier: "Prod", price: "₹2L+", note: "Scale & monitoring" },
        ],
      },
    },
    cloud: {
      key: "cloud",
      title: "Cloud & DevOps",
      short: "Docker, CI/CD, infra as code and production monitoring.",
      initials: "CD",
      icon: "cloud",
      tags: ["Docker", "K8s", "CI/CD"],
      details: {
        overview:
          "Design cost-effective, reliable cloud setups with IaC, automated releases and health checks.",
        features: ["IaC (Terraform)", "Containerization", "SLOs & alerts"],
        deliverables: ["Infrastructure repo", "CI/CD pipelines", "Runbooks"],
        timeline_text: "Audits: 1-2 weeks. Full infra setup: 2-6 weeks.",
        pricing: [
          {
            tier: "Audit",
            price: "₹30k - ₹90k",
            note: "Security & cost review",
          },
          { tier: "Setup", price: "₹1L+", note: "IaC + CI/CD" },
        ],
      },
    },
    growth: {
      key: "growth",
      title: "Social & Growth",
      short: "End-to-end social strategy: organic, paid & creator-led growth.",
      initials: "SG",
      icon: "web",
      tags: ["SMM", "Ads", "Creators"],
      details: {
        overview:
          "Creative production + data-driven paid funnels to expand reach and conversions.",
        features: [
          "Content calendar",
          "Ad funnel setup",
          "Creator partnerships",
        ],
        deliverables: [
          "Creative assets",
          "Ad strategy & reporting",
          "Monthly growth plan",
        ],
        timeline_text: "Ongoing engagement; initial strategy in 1-2 weeks.",
        pricing: [
          {
            tier: "Starter",
            price: "₹15k/mo",
            note: "Basic posting & monitoring",
          },
          { tier: "Growth", price: "₹40k/mo", note: "Ads + creatives" },
        ],
      },
    },
  };

  const teamMembers = [
    {
      name: "Priyanshu Hatwal",
      role: "Founder & Product Lead",
      initials: "PH",
      bio: "Driving the technical vision and architecture for scalable digital products.",
      skills: ["Product Strategy", "System Design", "Leadership"],
    },
    {
      name: "Aatish Singh",
      role: "Content & Strategy Lead",
      initials: "AS",
      bio: "Crafting compelling narratives and video strategies that drive engagement.",
      skills: ["Video Editing", "Content Strategy", "Storytelling"],
    },
    {
      name: "Aadil Ansari",
      role: "Frontend Engineering Lead",
      initials: "AA",
      bio: "Building high-performance, accessible, and pixel-perfect user interfaces.",
      skills: ["React/Next.js", "UI/UX", "Performance"],
    },
    {
      name: "Mohit Singh",
      role: "Visual & Marketing Specialist",
      initials: "MS",
      bio: "Blending aesthetics with marketing insights to create impactful brand visuals.",
      skills: ["Visual Design", "Branding", "Field Marketing"],
    },
  ];

  const keys = Object.keys(servicesMap);
  const initialCards = keys.map((k) => servicesMap[k]);
  const [modalOpen, setModalOpen] = useState(false);
  const [activeService, setActiveService] = useState(null);

  const openService = (key) => {
    setActiveService(servicesMap[key]);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setTimeout(() => setActiveService(null), 180);
  };

  return (
    <>
      <motion.div
        variants={isMobile ? {} : textVariant()}
        initial={isMobile ? { opacity: 1, y: 0 } : "hidden"}
        animate={isMobile ? { opacity: 1, y: 0 } : "show"}
      >
        <p className={styles.sectionSubText}>About PrimeCore</p>
        <h2
          className={`${styles.sectionHeadText} text-[30px] sm:text-[50px] leading-tight`}
        >
          Building Future-Ready <br className="sm:block hidden" />
          <span className="text-[#38b6ff]">Digital Experiences</span>
        </h2>
      </motion.div>

      <motion.p
        variants={isMobile ? {} : fadeIn("", "", 0.1, 1)}
        initial={isMobile ? { opacity: 1 } : "hidden"}
        animate={isMobile ? { opacity: 1 } : "show"}
        className="mt-4 text-secondary text-[15px] sm:text-[17px] max-w-3xl leading-[24px] sm:leading-[30px]"
      >
        PrimeCore is a product-first engineering studio focused on strategy,
        design and engineering. We ship high-quality digital products and
        support them with growth and operations.
      </motion.p>

      <div className="mt-6 flex flex-wrap gap-2 sm:gap-3">
        {[
          "Product Strategy",
          "Design Systems",
          "Scalable Architecture",
          "Growth & Ads",
        ].map((c, i) => (
          <motion.span
            key={i}
            variants={isMobile ? {} : fadeIn("up", "spring", i * 0.05, 0.7)}
            initial={isMobile ? { opacity: 1, y: 0 } : "hidden"}
            animate={isMobile ? { opacity: 1, y: 0 } : "show"}
            className="px-3 py-1.5 bg-white/6 rounded-md text-xs sm:text-sm text-white"
          >
            {c}
          </motion.span>
        ))}
      </div>

      <div className="mt-12">
        <h3 className="text-white text-[22px] sm:text-[26px] font-bold mb-3">
          What we do
        </h3>
        <p className="text-secondary max-w-3xl leading-[24px] mb-6 text-sm sm:text-base">
          Click any card to open a focused detail panel.
        </p>

        <div className="grid items-stretch grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {initialCards.map((s, i) => (
            <ServiceCard
              key={s.key}
              i={i}
              s={s}
              onOpen={openService}
              isMobile={isMobile}
            />
          ))}
        </div>
      </div>

      <div className="mt-16 sm:mt-24 pb-12">
        <motion.div
          variants={isMobile ? {} : textVariant()}
          initial={isMobile ? { opacity: 1, y: 0 } : "hidden"}
          animate={isMobile ? { opacity: 1, y: 0 } : "show"}
          className="mb-8"
        >
          <h3 className="text-white text-[28px] sm:text-[36px] font-bold">
            Meet the Minds
          </h3>
          <p className="text-secondary mt-2 max-w-2xl">
            A diverse team of engineers, designers, and strategists obsessed
            with quality.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {teamMembers.map((m, i) => (
            <motion.div
              key={i}
              variants={isMobile ? {} : fadeIn("up", "spring", i * 0.1, 0.8)}
              initial={isMobile ? { opacity: 1, y: 0 } : "hidden"}
              animate={isMobile ? { opacity: 1, y: 0 } : "show"}
              className="group relative p-[1px] rounded-[20px] bg-gradient-to-b from-white/10 to-transparent hover:from-[#38b6ff]/50 hover:to-cyan-400/50 transition-all duration-300"
            >
              <div className="bg-[#0b1121] p-6 sm:p-8 rounded-[19px] h-full flex flex-col sm:flex-row gap-6 items-start relative z-10">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-black font-bold text-xl sm:text-2xl shadow-lg flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                  {m.initials}
                </div>

                <div className="flex-1">
                  <h4 className="text-white text-xl font-bold group-hover:text-[#38b6ff] transition-colors">
                    {m.name}
                  </h4>
                  <p className="text-blue-200/80 text-sm font-medium mt-1 uppercase tracking-wide">
                    {m.role}
                  </p>

                  <p className="text-secondary text-sm mt-3 leading-relaxed">
                    {m.bio}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {m.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] px-2.5 py-1 rounded-full bg-white/5 text-white/70 border border-white/5 group-hover:border-white/10 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <Modal open={modalOpen} onClose={closeModal} service={activeService} />
    </>
  );
};

export default SectionWrapper(About, "about");
