import React from 'react';
import { 
  MapPin, 
  Phone, 
  Mail,
} from 'lucide-react'; // Icons ke liye
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaYoutube } from 'react-icons/fa';

// Images import as per your request
import logo from '../assets/transparent_logo.png';
import SaylaniLogo from '../assets/saylani_logo.webp';

const Footer = () => {
  const footerLinks = [
    {
      title: "Quick Links",
      links: ["Home", "Chat Us", "Enroll Now", "Download ID Card", "Check Results"],
    },
    {
      title: "Our Courses",
      links: ["Flutter App development with AI", "IT Professional", "Ai & Chatbot", "Python Programming", "CCTV Camera Installation"],
    },
    {
      title: "Resources",
      links: ["Courses", "Campuses", "Contact Us", "Privacy Policy", "Terms of Service"],
    },
  ];

  const socialIcons = [
    <FaFacebook size={20} />, 
    <FaTwitter size={20} />, 
    <FaLinkedin size={20} />, 
    <FaInstagram size={20} />, 
    <FaYoutube size={20} />
  ];

  return (
    <footer className="bg-[#1a1a1a] text-gray-400 py-12 px-6 md:px-16 mt-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        
        {/* Column 1: Logos & Info */}
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <img src={logo} alt="SMIT Logo" className="h-12 object-contain" />
            <img src={SaylaniLogo} alt="Saylani Logo" className="h-10 object-contain" />
          </div>
          <p className="text-sm leading-relaxed">
            Empowering Pakistan's youth with world-class IT education and training programs to build a brighter digital future.
          </p>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <MapPin className="text-[#0b73b7] shrink-0" size={18} />
              <span className="text-sm">A-25, Bahadurabad Chowrangi, Karachi, Pakistan</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="text-[#6da800] shrink-0" size={18} />
              <span className="text-sm">+92 21 111 729 526</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="text-[#0b73b7] shrink-0" size={18} />
              <span className="text-sm">saylanimass@gmail.com</span>
            </div>
          </div>
          {/* Social Icons */}
          <div className="flex gap-4 pt-4">
            {socialIcons.map((icon, index) => (
              <a
                key={index}
                href="#"
                className="rounded-full p-2 text-gray-400 transition-all duration-300 hover:text-white hover:bg-linear-to-r hover:from-[#1F7FA3] hover:via-[#4FA69A] hover:to-[#8BC34A] hover:shadow-lg"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* Dynamic Columns for Links */}
        {footerLinks.map((section, idx) => (
          <div key={idx}>
            <h3 className="text-white text-lg font-bold mb-1">{section.title}</h3>
            {/* Gradient Underline */}
            <div className="h-1 w-12 mb-6 bg-linear-to-r from-[#1F7FA3] via-[#4FA69A] to-[#8BC34A]"></div>
            <ul className="space-y-4">
              {section.links.map((link, i) => (
                <li key={i}>
                  <a href="#" className="hover:underline text-sm transition-colors cursor-pointer">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-xs space-y-4 md:space-y-0">
        <p>© 2013 - 2026 <span className="text-white font-bold">Saylani Mass IT Training.</span> All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;