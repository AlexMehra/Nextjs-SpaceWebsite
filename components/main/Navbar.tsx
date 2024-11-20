'use client'
import Image from "next/image";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { faTwitter, faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the dropdown menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav id="nav" className="w-full h-[75px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex items-center justify-between m-auto px-[10px]">
        <a href="#Home" className="h-auto w-auto flex items-center ">
          <Image
            src="/Car.png"
            alt="logo"
            width={50}
            height={50}
            className="cursor-pointer hover:animate-slowspin"
          />

          <motion.div
            variants={slideInFromTop}
            className="Welcome-box py-[15px] px-[4px] border border-[#7042f88b] opacity-[.8]"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              <span className="font-bold ml-[10px] text-white">
                WebDev Akki 😺
              </span>
            </span>
          </motion.div>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex w-[500px] h-full items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <a href="#Home" className="cursor-pointer hover:text-lg">Home</a>
            <a href="#about-me" className="cursor-pointer hover:text-lg">About me</a>
            <a href="#skills" className="cursor-pointer hover:text-lg">Skills</a>
            <a href="#projects" className="cursor-pointer hover:text-lg">Projects</a>
            <a href="#footer" className="cursor-pointer hover:text-lg">Contact</a>
          </div>
        </div>

        {/* Social Media Links (always visible) */}
        <div className="hidden md:flex flex-row gap-5">
          <a href="https://github.com/AlexMehra" target="_blank" rel="noopener noreferrer" aria-label="Github" className="hover:text-white text-slate-500">
            <FontAwesomeIcon icon={faGithub} size="lg" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-blue-800 text-blue-300">
            <FontAwesomeIcon icon={faTwitter} size="lg" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-pink-800 text-pink-300">
            <FontAwesomeIcon icon={faInstagram} size="lg" />
          </a>
          <a href="https://www.linkedin.com/in/abhinav-singh-mehra-7a1025217/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-blue-700 text-blue-300">
            <FontAwesomeIcon icon={faLinkedin} size="lg" />
          </a>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} aria-label="Toggle menu" className="text-gray-300 focus:outline-none">
            <FontAwesomeIcon icon={isOpen ? faTimes : faBars} size="lg" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="md:hidden flex flex-col items-center bg-gray-800 text-gray-300 py-5 w-full"
        >
          <a href="#Home" className="cursor-pointer py-2 hover:text-lg">Home</a>
          <a href="#about-me" className="py-2" onClick={toggleMenu}>About me</a>
          <a href="#skills" className="py-2" onClick={toggleMenu}>Skills</a>
          <a href="#projects" className="py-2" onClick={toggleMenu}>Projects</a>
          <a href="#footer" className="py-2" onClick={toggleMenu}>Contacts</a>
          <div className="flex flex-row gap-5 mt-4">
            <a href="https://github.com/AlexMehra" target="_blank" rel="noopener noreferrer" aria-label="Github" className="hover:text-white text-slate-500">
              <FontAwesomeIcon icon={faGithub} size="lg" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-blue-800 text-blue-300">
              <FontAwesomeIcon icon={faTwitter} size="lg" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-pink-800 text-pink-300">
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </a>
            <a href="https://www.linkedin.com/in/abhinav-singh-mehra-7a1025217/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-blue-700 text-blue-300">
              <FontAwesomeIcon icon={faLinkedin} size="lg" />
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
