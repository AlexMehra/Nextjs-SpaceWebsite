"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  slideInFromTop,
} from "@/utils/motion";
import Image from "next/image";
import ContactModal from "./ContactModal";

const HeroContent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col-reverse md:flex-row items-center justify-center px-8 md:px-20 mt-20 md:mt-40 w-full z-[20] space-y-8 md:space-y-0"
    >
      {/* Left Content */}
      <motion.div
        variants={slideInFromTop}
        className="w-full md:w-1/2 flex flex-col gap-5 justify-center text-center md:text-start"
      >
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-3 px-2 border border-[#7042f88b] opacity-80"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            Dev Portfolio
          </span>
        </motion.div>

        <motion.h1
          variants={slideInFromTop}
          className="text-4xl md:text-6xl font-bold text-white max-w-[90%] md:max-w-[600px] w-auto"
        >
          Best{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            Project
          </span>{" "}
          portfolio experience
        </motion.h1>

        <motion.p
          variants={slideInFromTop}
          className="text-base md:text-lg text-gray-400 my-5 max-w-[90%] md:max-w-[600px]"
        >
          I&apos;m a Full Stack Software Engineer with experience in Website,
          Mobile, and Software development. Check out my projects and skills.
        </motion.p>

        <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
          <motion.a
            variants={slideInFromTop}
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open Resume"
            className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px] px-7 transition-all hover:bg-purple-700"
          >
            Resume
          </motion.a>

          <motion.button
            variants={slideInFromTop}
            onClick={openModal}
            aria-label="Open Contact Form"
            className="py-2 button-secondary text-center text-black bg-slate-400 hover:bg-slate-50 cursor-pointer rounded-lg max-w-[200px] px-7 transition-all"
          >
            Hire Me
          </motion.button>
        </div>
      </motion.div>

      {/* Right Image */}
      <motion.div
        variants={slideInFromTop}
        className="w-full md:w-1/2 flex justify-center items-center"
      >
        <Image
          src="/mainIconsdark.svg"
          alt="work icons"
          height={350}
          width={350}
          className="w-[80%] md:w-auto h-auto"
        />
      </motion.div>

      <ContactModal isOpen={isModalOpen} onClose={closeModal} />
    </motion.div>
  );
};

export default HeroContent;
