import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../assets/transparent_logo.png';
import Button from '../Shared/Button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="sticky top-0 z-50 bg-[#f9f9f9] shadow-sm flex items-center justify-between px-10 py-4 border-b-4 border-gray-100">
      {/* Logo */}
      <div className="shrink-0">
        <img src={logo} alt="SMIT" className="h-12" />
      </div>

      {/* Nav Links - Desktop */}
      <div className="hidden md:flex items-center gap-8 text-gray-600 font-medium">
        <a href="#" className="hover:text-[#0779bf]">Home</a>
        <a href="#" className="hover:text-[#0779bf]">About</a>
        <a href="#" className=" hover:text-[#0779bf]">Courses</a>
        <a href="#" className="hover:text-[#0779bf]">Campuses</a>
        <a href="#" className="hover:text-[#0779bf]">Check Result</a>
      </div>

      {/* CTA Button - Desktop */}
      <div className="hidden md:block">
        <Button name="Enroll Now" />
      </div>

      {/* Hamburger Menu Button - Mobile */}
      <button
        onClick={toggleMenu}
        className={`md:hidden p-2 rounded-lg cursor-pointer transition ${isOpen ? 'bg-[#f9f9f9]' : 'hover:bg-[#f9f9f9]'}`}
      >
        {isOpen ? (
          <X size={24} className="text-gray-600" />
        ) : (
          <Menu size={24} className="text-gray-600" />
        )}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-20 left-0 right-0 bg-[#f9f9f9] border-b border-gray-100 md:hidden">
          <div className="flex flex-col items-start gap-4 px-10 py-6 text-gray-600 font-medium">
            <a href="#" className="hover:text-blue-600 w-full">Home</a>
            <a href="#" className="hover:text-blue-600 w-full">About</a>
            <a href="#" className="cursor-pointer hover:text-blue-600 w-full">Courses</a>
            <a href="#" className="hover:text-blue-600 w-full">Campuses</a>
            <a href="#" className="hover:text-blue-600 w-full">Check Result</a>
            <div className="w-full pt-4 border-t border-gray-100">
              <Button name="Enroll Now" />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
export default Navbar;