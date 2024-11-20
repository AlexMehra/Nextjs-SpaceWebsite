"use client";

import {
  Backend_skill,
  Frontend_skill,
  Full_stack,
  Skill_data,
} from "@/constants";
import React from "react";
import SkillDataProvider from "../sub/SkillData";
import SkillText from "../sub/SkillText";

const Skills = () => {
  const skillCategories = [
    { title: "Skill Data", skills: Skill_data },
    { title: "Frontend Skills", skills: Frontend_skill },
    { title: "Backend Skills", skills: Backend_skill },
    { title: "Full Stack Skills", skills: Full_stack },
  ];

  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden pb-80 py-20"
    >
      <SkillText />

      {skillCategories.map((category, index) => (
        <div key={index} className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
          {category.skills.map((image, index) => (
            <SkillDataProvider
              key={index}
              src={image.Image}
              width={image.width}
              height={image.height}
              index={index} alt={""}            />
          ))}
        </div>
      ))}

      <div className="w-full h-full absolute">
        <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
          <video
            className="w-full h-full object-cover"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
            src="/cards-video.webm"
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
