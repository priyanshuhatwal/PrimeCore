import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

/*
  PrimeCore About - Polished Upgrade
  Upgrades included:
  - Modal upgraded to tabbed details (Overview / Deliverables / Timeline & Pricing)
  - Per-service deep content object (more realistic scope examples)
  - Inline lightweight contact form in modal (no backend) + email:mailto fallback
  - Accessibility: Esc to close, focus trap, aria attributes, reduced-motion support
  - Improved responsive and visual polish: subtle separators, consistent spacing
  - No images (inline SVG only). Cards use subtle hover scale (no tilt)
*/

const Icon = ({ name }) => {
  const size = 20;
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

const ServiceCard = ({ i, s, onOpen }) => (
  <motion.div
    variants={fadeIn("right", "spring", i * 0.06, 0.8)}
    className="w-full p-[2px] rounded-[14px] bg-gradient-to-br from-[#0ea5e9] to-[#06b6d4] shadow-2xl h-full"
  >
    <div className="bg-[#071023] rounded-[12px] p-5 h-full flex flex-col justify-between gap-4 transition-transform duration-200 hover:-translate-y-1">
      <div className="flex items-start gap-3">
        <div className="w-12 h-12 bg-white/6 rounded-lg flex items-center justify-center text-blue-300">
          <Icon name={s.icon} />
        </div>
        <div className="flex-1">
          <h4 className="text-white text-[16px] font-semibold">{s.title}</h4>
          <p className="text-secondary text-[13px] mt-1">{s.short}</p>
          <div className="mt-2 flex gap-2 flex-wrap">
            {s.tags?.slice(0, 3).map((t, idx) => (
              <span
                key={idx}
                className="text-[12px] px-2 py-1 bg-white/5 rounded text-white/90"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between gap-3">
        <button
          onClick={() => onOpen(s.key)}
          className="px-3 py-2 rounded-md bg-white/6 border border-white/8 text-sm text-white/90 hover:bg-white/8 transition"
          aria-label={`Open details for ${s.title}`}
        >
          Learn more
        </button>
        <a
          href="/contactpage"
          className="text-sm px-3 py-2 bg-white text-blue-700 rounded-md font-semibold shadow hover:opacity-95"
        >
          Start project
        </a>
      </div>
    </div>
  </motion.div>
);

// Modal with tabs and focus management
const Modal = ({ open, onClose, service }) => {
  const [tab, setTab] = useState("overview");
  const dialogRef = useRef(null);

  // focus trap and initial focus
  useEffect(() => {
    if (!open) return;
    const prev = document.activeElement;
    const focusable =
      dialogRef.current?.querySelectorAll(
        "button, [href], input, textarea, select"
      ) || [];
    const first = focusable[0];
    first?.focus();

    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "Tab") {
        // simple focus trap
        const nodes = Array.from(focusable);
        if (nodes.length === 0) return;
        const idx = nodes.indexOf(document.activeElement);
        if (e.shiftKey && idx === 0) {
          e.preventDefault();
          nodes[nodes.length - 1].focus();
        } else if (!e.shiftKey && idx === nodes.length - 1) {
          e.preventDefault();
          nodes[0].focus();
        }
      }
    };

    document.addEventListener("keydown", onKey);
    return () => {
      prev?.focus();
      document.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [open]);

  if (!open || !service) return null;

  // Reduced motion support
  const motionProps =
    window?.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ? {}
      : {
          initial: { scale: 0.96, opacity: 0 },
          animate: { scale: 1, opacity: 1 },
          transition: { duration: 0.18 },
        };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        aria-hidden="true"
      />

      <motion.div
        {...motionProps}
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-label={`${service.title} details`}
        className="relative max-w-4xl w-full mx-4 bg-[#071023] rounded-lg p-6 border border-white/8 shadow-2xl"
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-white/70 px-2 py-1 rounded hover:bg-white/6"
        >
          ✕
        </button>

        <div className="md:flex md:items-start md:gap-6">
          <div className="flex-shrink-0">
            <div className="w-14 h-14 bg-gradient-to-br from-blue-400 to-cyan-300 rounded-lg flex items-center justify-center text-black font-bold">
              {service.initials}
            </div>
          </div>

          <div className="mt-2 md:mt-0 md:flex-1">
            <h3 className="text-white text-[18px] font-semibold">
              {service.title}
            </h3>
            <p className="text-secondary mt-2">{service.short}</p>

            <div className="mt-4">
              <nav className="flex gap-2" aria-label="Service tabs">
                {[
                  { key: "overview", label: "Overview" },
                  { key: "deliverables", label: "Deliverables" },
                  { key: "timeline", label: "Timeline & Pricing" },
                  { key: "contact", label: "Contact" },
                ].map((t) => (
                  <button
                    key={t.key}
                    onClick={() => setTab(t.key)}
                    className={`px-3 py-1 rounded ${
                      tab === t.key
                        ? "bg-white text-blue-700"
                        : "text-white/80 bg-white/5"
                    }`}
                  >
                    {t.label}
                  </button>
                ))}
              </nav>

              <div className="mt-4 text-secondary text-[14px]">
                {tab === "overview" && (
                  <div>
                    <p className="mb-3">{service.details.overview}</p>
                    <ul className="list-disc ml-5 space-y-1">
                      {service.details.features.map((f, idx) => (
                        <li key={idx}>{f}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {tab === "deliverables" && (
                  <div>
                    <h4 className="text-white font-semibold mb-2">
                      What we deliver
                    </h4>
                    <ul className="list-decimal ml-5 space-y-1">
                      {service.details.deliverables.map((d, idx) => (
                        <li key={idx}>{d}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {tab === "timeline" && (
                  <div>
                    <h4 className="text-white font-semibold mb-2">
                      Timeline & indicative pricing
                    </h4>
                    <p className="mb-2">{service.details.timeline_text}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-3">
                      {service.details.pricing.map((p, idx) => (
                        <div key={idx} className="p-3 bg-white/5 rounded">
                          <p className="text-white font-semibold">{p.tier}</p>
                          <p className="text-secondary mt-1">{p.price}</p>
                          <p className="text-[13px] mt-1">{p.note}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {tab === "contact" && (
                  <div>
                    <h4 className="text-white font-semibold mb-2">
                      Request a discovery
                    </h4>
                    <ContactForm
                      prefillSubject={`${service.title} — Discovery`}
                      onSuccess={() => alert("Thanks! We'll reach out soon.")}
                    />
                  </div>
                )}
              </div>

              <div className="mt-6 flex gap-3 justify-end">
                <a
                  href={`mailto:hello@primecore.com?subject=${encodeURIComponent(
                    service.title + " enquiry"
                  )}`}
                  className="px-4 py-2 bg-white text-blue-700 rounded font-semibold"
                >
                  Email us
                </a>
                <button
                  onClick={onClose}
                  className="px-4 py-2 border border-white/10 rounded text-white"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const ContactForm = ({
  prefillSubject = "Project inquiry",
  onSuccess = () => {},
}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    setLoading(true);
    // No backend — use mailto fallback and show success toast
    const body = encodeURIComponent(
      `Name: ${name}%0AEmail: ${email}%0A%0A${message}`
    );
    const mailto = `mailto:hello@primecore.com?subject=${encodeURIComponent(
      prefillSubject
    )}&body=${body}`;
    window.location.href = mailto;
    setTimeout(() => {
      setLoading(false);
      onSuccess();
    }, 500);
  };

  return (
    <form onSubmit={submit} className="space-y-3">
      <input
        required
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Your name"
        className="w-full px-3 py-2 rounded bg-white/5 text-white outline-none"
      />
      <input
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        type="email"
        className="w-full px-3 py-2 rounded bg-white/5 text-white outline-none"
      />
      <textarea
        required
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Short message / goals"
        rows={4}
        className="w-full px-3 py-2 rounded bg-white/5 text-white outline-none"
      />
      <div className="flex gap-2">
        <button
          type="submit"
          disabled={loading}
          className="px-4 py-2 bg-white text-blue-700 rounded font-semibold"
        >
          Send request
        </button>
        <button
          type="button"
          onClick={() => {
            setName("");
            setEmail("");
            setMessage("");
          }}
          className="px-4 py-2 border border-white/10 rounded text-white"
        >
          Reset
        </button>
      </div>
    </form>
  );
};

const About = () => {
  // detailed per-service content keyed by 'key'
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
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>About PrimeCore</p>
        <h2 className={styles.sectionHeadText}>
          Building Future-Ready{" "}
          <span className="text-[#38b6ff]">Digital Experiences</span>
        </h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        PrimeCore is a product-first engineering studio focused on strategy,
        design and engineering. We ship high-quality digital products and
        support them with growth and operations.
      </motion.p>

      <div className="mt-6 flex gap-3 flex-wrap">
        {[
          "Product Strategy",
          "Design Systems",
          "Scalable Architecture",
          "Growth & Ads",
        ].map((c, i) => (
          <motion.span
            key={i}
            variants={fadeIn("up", "spring", i * 0.05, 0.7)}
            className="px-3 py-1 bg-white/6 rounded-md text-sm text-white"
          >
            {c}
          </motion.span>
        ))}
      </div>

      <div className="mt-10">
        <h3 className="text-white text-[26px] font-bold mb-2">What we do</h3>
        <p className="text-secondary max-w-3xl leading-[26px]">
          Click any card to open a focused detail panel (tabbed) — no layout
          shifts, accessible and responsive.
        </p>

        <div className="mt-6 grid items-stretch grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {initialCards.map((s, i) => (
            <ServiceCard key={s.key} i={i} s={s} onOpen={openService} />
          ))}
        </div>
      </div>

      <div className="mt-12">
        <h3 className="text-white text-[26px] font-bold mb-3">Meet the team</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              name: "Priyanshu Hatwal",
              role: "Founder — Product & Engineering",
              initials: "PH",
            },
            {
              name: "Anjali Sharma",
              role: "Design Lead — UI/UX",
              initials: "AS",
            },
            {
              name: "Rohit Verma",
              role: "Tech Lead — Backend",
              initials: "RV",
            },
            { name: "Maya Kapoor", role: "Growth & Marketing", initials: "MK" },
          ].map((m, i) => (
            <motion.div
              key={i}
              variants={fadeIn("up", "spring", i * 0.06, 0.8)}
              className="p-4 bg-[#071023] rounded-[12px] border border-white/6 flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-cyan-300 flex items-center justify-center text-black font-bold">
                {m.initials}
              </div>
              <div>
                <p className="text-white font-semibold">{m.name}</p>
                <p className="text-secondary text-sm">{m.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
        {[
          { value: "60+", label: "Projects Delivered" },
          { value: "40+", label: "Happy Clients" },
          { value: "99%", label: "Uptime & SLA" },
        ].map((s, i) => (
          <motion.div
            variants={fadeIn("up", "spring", i * 0.06, 0.8)}
            key={i}
            className="p-6 rounded-[12px] bg-gradient-to-r from-[#0ea5e9] to-[#06b6d4] text-white shadow"
          >
            <p className="text-[26px] font-extrabold">{s.value}</p>
            <p className="text-[13px] mt-1">{s.label}</p>
          </motion.div>
        ))}
      </div>

      <Modal open={modalOpen} onClose={closeModal} service={activeService} />
    </>
  );
};

export default SectionWrapper(About, "about");
