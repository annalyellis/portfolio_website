"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-svh flex items-center"
    >
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-28 pb-16 grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Text */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: -14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xs uppercase tracking-[0.45em] text-moss-300 mb-5"
          >
            Data Scientist · ML Engineer · AI Researcher · Software Engineer
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="font-serif text-6xl md:text-7xl lg:text-8xl font-bold leading-none tracking-tight text-white mb-7"
          >
            Annaly Ellis
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-white/75 text-sm md:text-base leading-relaxed max-w-md mb-10 space-y-3"
          >
            <p>
              My name is Annaly and I&apos;m a rising senior at UC San Diego studying Data Science
              and specializing in Machine Learning and Artificial Intelligence.
              I&apos;m drawn to problems where data and engineering can drive real-world impact:
              monitoring climate change, improving healthcare outcomes, and keeping people and our
              planet safe.
            </p>
            <p>
              I enjoy working in fast-paced, high-growth environments. This has lead me to work in 
              multiple domains, including several AI startups and academic research at the Institute 
              of Geophysics and Planetary Physics at Scripps Institution of Oceanography.
            </p>
            <p>
              Though I go to school in San Diego, I grew up about as far north from San Diego you
              can get in the continental US. I was born and raised in Anacortes, WA - a town in
              the San Juan Islands, the most northwestern part of Washington State. Outside of school
              and work I spend as much time as possible outside. I like to surf, climb, run, hike, and
              ski (I&apos;m on the UCSD ski team!).
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.95 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              className="px-8 py-3 bg-moss-500 hover:bg-moss-400 text-white text-sm font-medium tracking-wider uppercase transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-moss-500/25"
            >
              See My Work
            </a>
            <a
              href="mailto:anellis@ucsd.edu?subject=Resume%20Request"
              className="px-8 py-3 border border-white/50 hover:border-white text-white/80 hover:text-white text-sm font-medium tracking-wider uppercase transition-all duration-200 hover:-translate-y-0.5"
            >
              Resume →
            </a>
          </motion.div>
        </div>

        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex justify-center"
        >
          <div className="relative w-72 md:w-80 lg:w-96">
            <div className="absolute top-4 right-[-12px] w-full h-full border-2 border-moss-400/50 z-0" />
            <div className="relative z-10 shadow-2xl overflow-hidden">
              <Image
                src="/headshot.jpeg"
                alt="Annaly Ellis"
                width={320}
                height={420}
                className="object-cover object-top w-full"
                priority
              />
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-px h-10 bg-gradient-to-b from-white/40 to-transparent" />
      </motion.div>
    </section>
  );
}
