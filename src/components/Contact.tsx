"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const stagger = { visible: { transition: { staggerChildren: 0.15 } } };

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="contact"
      className="relative py-40 lg:py-52"
    >

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={stagger}
        >
          <motion.p
            variants={fadeUp}
            className="text-xs uppercase tracking-[0.35em] text-moss-300 mb-6"
          >
            Get In Touch
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
          >
            Let&apos;s build something that matters.
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-white/70 text-base md:text-lg max-w-xl mx-auto mb-12 leading-relaxed"
          >
            I&apos;m seeking fall internship and new grad opportunities in ML, data science, and
            software engineering. Always happy to connect.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-wrap gap-4 justify-center mb-14">
            <a
              href="mailto:anellis@ucsd.edu"
              className="px-8 py-3.5 bg-moss-500 hover:bg-moss-400 text-white text-sm font-medium tracking-wider uppercase transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-moss-500/30"
            >
              anellis@ucsd.edu
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              className="px-8 py-3.5 border border-white/50 hover:border-white text-white/80 hover:text-white text-sm font-medium tracking-wider uppercase transition-all duration-200 hover:-translate-y-0.5"
            >
              Resume →
            </a>
          </motion.div>

          <motion.div variants={fadeUp} className="flex gap-10 justify-center">
            <a
              href="https://linkedin.com/in/annaly-ellis/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/50 hover:text-moss-300 text-xs uppercase tracking-[0.25em] transition-colors"
            >
              LinkedIn ↗
            </a>
            <a
              href="https://github.com/annalyellis"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/50 hover:text-moss-300 text-xs uppercase tracking-[0.25em] transition-colors"
            >
              GitHub ↗
            </a>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-0 right-0 text-center">
        <p className="text-white/25 text-xs tracking-widest uppercase">
          © {new Date().getFullYear()} Annaly Ellis
        </p>
      </div>
    </section>
  );
}
