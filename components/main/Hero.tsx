import React from "react";
import HeroContent from "../sub/HeroContent";
// import Aboutme from "../main/Aboutme"

const Hero = () => {
  return (
    <div className="relative flex flex-col h-full w-full" id="Home">
      <video
        autoPlay
        muted
        loop
        className="rotate-180 absolute top-[-340px]  h-full w-full left-0 z-[1] object-cover "
      >
        <source src="/blackhole.webm" type="video/webm" />
      </video>
      <HeroContent />
      {/* <Aboutme/> */}
    </div>
  );
};

export default Hero;

