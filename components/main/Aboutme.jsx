'use client'
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion';

const Aboutme = () => {
  return (
    <div id="about-me" className="flex flex-col items-center py-20 space-y-10">
      {/* Header section */}
      <div className="z-[5]">
        <motion.h1
          variants={slideInFromTop}
          initial="hidden"
          animate="visible"
          className="text-[50px] font-semibold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500"
        >
          About me
        </motion.h1>
      </div>

      {/* Content section */}
      <div className="flex flex-row items-center justify-center space-x-10 w-full">
        {/* GIF Section */}
        <motion.div
          variants={slideInFromLeft(0.8)}
          initial="hidden"
          animate="visible"
          className="w-1/3">
          <Image
            src="/Dancing Cat Shaking Body GIF _ GIFDB_com.gif"
            alt="Dancing Cat GIF"
            className="rounded-full"
            width={500} // Specify the width
            height={500} // Specify the height
            priority // Use this to preload critical images for better LCP
            unoptimized
          />
        </motion.div>

        {/* Text Section */}
        <motion.div
          variants={slideInFromRight(0.8)}
          initial="hidden"
          animate="visible"
          className="text-lg text-gray-400 w-1/2"
        >
          <h1 className="text-2xl font-semibold mb-2">Let me introduce myself.</h1>
          <p>
            I am Abhinav Singh Mehra, a dynamic Computer Science Engineering student from Uttarakhand. With a strong passion
            for technology, I thrive on constant learning and aspire to be a skilled full-stack web developer. Join me on
            this exhilarating journey as we explore new opportunities and shape the future of computer science together.
            Lets make innovation happen!
          </p>
        </motion.div>
      </div>

      {/* Button Section */}
      <motion.div
        variants={slideInFromLeft(1)}
        initial="hidden"
        animate="visible"
        className="py-2 text-center"
      >
        <a
          href="#about-me"
          className="button-primary text-white cursor-pointer rounded-lg px-6 py-2"
        >
          Learn More About Me!
        </a>

      </motion.div>
    </div>
  );
};

export default Aboutme;
