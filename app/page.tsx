import Hero from "@/components/main/Hero";
import Aboutme from "@/components/main/Aboutme";
import Skills from "@/components/main/Skills";
import Footer from "@/components/main/Footer";
import dynamic from "next/dynamic";
const Encryption = dynamic(() => import("@/components/main/Encryption"));
const Projects = dynamic(() => import("@/components/main/Projects"));


export default function Home() {
  return (
    <main className="min-h-screen w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <Aboutme />
        <Skills />
        <Encryption />
        <Projects />
        <Footer />
      </div>
    </main>
  );
}