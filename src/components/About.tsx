"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.14 } },
};

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="py-24 lg:py-32 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={stagger}
        >
          <motion.p
            variants={fadeUp}
            className="text-xs uppercase tracking-[0.35em] text-moss-600 mb-8"
          >
            About Me
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="space-y-5 text-slate-600 text-base lg:text-lg leading-relaxed"
          >
            <p>
              I&apos;m a third-year Data Science student at UC San Diego, specializing in Machine
              Learning &amp; AI. I&apos;m drawn to problems where data can drive real-world impact
              — monitoring climate change, improving healthcare outcomes, and keeping people safe.
            </p>
            <p>
              I&apos;ve had the chance to work across a few domains: building geospatial deep learning
              pipelines for glacier research at Scripps Oceanography, developing medical imaging models
              at Veevo Health, and shipping front-end features for AI-powered products at Automatiq AI.
              I love the full stack of a problem — from data wrangling and model design to deployment
              and product.
            </p>
            <p>
              I grew up on Fidalgo Island in Anacortes, Washington — a small island in the Pacific
              Northwest ringed by mountains, forests, and water. Being outside is a big part of who
              I am: skiing, hiking, climbing, surfing, running, swimming, camping. San Diego has made
              it easy to keep that going year-round, and those instincts for endurance and
              problem-solving in the field have a funny way of showing up in my work.
            </p>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-2.5">
            {[
              "Fidalgo Island, WA",
              "UCSD Ski Team",
              "Scripps Oceanography",
              "Climate ML",
              "Healthcare AI",
            ].map((tag) => (
              <span
                key={tag}
                className="px-4 py-1.5 rounded-full text-sm font-medium bg-moss-50 text-moss-700 border border-moss-200"
              >
                {tag}
              </span>
            ))}
          </motion.div>

          <motion.div variants={fadeUp} className="mt-8 flex gap-5">
            <a
              href="https://linkedin.com/in/annaly-ellis/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-slate-500 hover:text-moss-600 uppercase tracking-widest transition-colors"
            >
              LinkedIn ↗
            </a>
            <a
              href="https://github.com/annalyellis"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-slate-500 hover:text-moss-600 uppercase tracking-widest transition-colors"
            >
              GitHub ↗
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
