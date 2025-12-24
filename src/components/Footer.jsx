import {
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative w-full bg-[#02050a] pt-20 pb-10">
      {/* Gradient Top Border */}
      <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#38b6ff] via-[#00e0ff] to-[#38b6ff]" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="space-y-4">
          <h2 className="text-4xl font-extrabold text-white tracking-wide">
            Prime<span className="text-[#38b6ff]">Core</span>
          </h2>
          <p className="text-gray-400 text-[15px] leading-7">
            Crafting modern web & app experiences designed to scale, engage, and
            elevate your brand to new heights.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-4 text-[18px] border-l-4 border-[#38b6ff] pl-3">
            Explore
          </h3>
          <ul className="space-y-3 text-gray-400 text-[15px]">
            {["About Us", "Services", "Projects", "Career", "Contact"].map(
              (item) => (
                <li
                  key={item}
                  className="hover:text-[#38b6ff] cursor-pointer transition-all hover:translate-x-1"
                >
                  {item}
                </li>
              )
            )}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-white font-semibold mb-4 text-[18px] border-l-4 border-[#38b6ff] pl-3">
            Services
          </h3>
          <ul className="space-y-3 text-gray-400 text-[15px]">
            {[
              "Web Development",
              "App Development",
              "Branding",
              "Digital Marketing",
              "Tech Solutions",
            ].map((service) => (
              <li
                key={service}
                className="hover:text-[#38b6ff] cursor-pointer transition-all hover:translate-x-1"
              >
                {service}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="space-y-4">
          <h3 className="text-white font-semibold mb-4 text-[18px] border-l-4 border-[#38b6ff] pl-3">
            Contact
          </h3>
          <ul className="space-y-3 text-gray-400 text-[15px]">
            <li className="flex items-center gap-3 hover:text-[#38b6ff] transition-all">
              <FaMapMarkerAlt /> Jhunjhunu, Rajasthan, India
            </li>
            <li className="flex items-center gap-3 hover:text-[#38b6ff] transition-all">
              <FaPhoneAlt /> +91 89490 93837
            </li>
            <li className="flex items-center gap-3 hover:text-[#38b6ff] transition-all">
              <FaEnvelope /> primecoretechworks@gmail.com
            </li>
          </ul>

          {/* Socials */}
          <div className="flex gap-5 text-2xl mt-6">
            <a className="text-gray-400 hover:text-[#38b6ff] transition-all cursor-pointer hover:scale-110">
              <FaInstagram />
            </a>
            <a className="text-gray-400 hover:text-[#38b6ff] transition-all cursor-pointer hover:scale-110">
              <FaLinkedin />
            </a>
            <a className="text-gray-400 hover:text-[#38b6ff] transition-all cursor-pointer hover:scale-110">
              <FaGithub />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-14 pt-6 text-center border-t border-[#1a2533] text-gray-500 text-sm">
        <p>© {new Date().getFullYear()} PrimeCore — All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
