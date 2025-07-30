import { motion, } from "framer-motion";
import { useEffect } from "react";
import { sections } from "../data/musicData.js";
import { AnimatedSection } from "../components/AnimatedSection.jsx";
import { summaries } from "../data/homeData.js";
import  TLDR  from "../components/TLDR.jsx";

export default function MusicPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  return (
    <motion.div initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -30 }} transition={{ duration: 0.5 }} className="bg-music min-h-screen pb-[1rem]">
      <div className="py-12 text-center">
        <h1 className="text-4xl font-bold text-blue-500">Music Production</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2 mx-2">Explore my passion for music and my music production journey.</p>
        <TLDR summary={summaries.find((s) => s.id === "music").summary} />
      </div>

      {sections.map((section) => (
        <AnimatedSection key={section.id} section={section} wMultiplier={6} />
      ))}
    </motion.div>
  );
};
