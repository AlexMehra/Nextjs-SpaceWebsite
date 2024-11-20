"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { slideInFromLeft, slideInFromRight } from '@/utils/motion';

const SkillText = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center">
      <motion.div
        variants={slideInFromLeft(0.5)}
        className="text-3xl md:text-4xl font-medium mt-2 text-center mb-4 text-white"
      >
        Making apps with modern technologies
      </motion.div>
      <motion.div
        variants={slideInFromRight(0.5)}
        className="text-xl md:text-2xl cursive text-center text-gray-200 mb-10 mt-2"
      >
        Never miss a task, deadline, or idea
      </motion.div>
    </div>
  );
};

export default SkillText;
