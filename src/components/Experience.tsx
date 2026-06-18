"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const experiences = [
  {
    title: "Data Science Research Intern",
    company: "Scripps Institution of Oceanography",
    location: "La Jolla, CA",
    period: "Sep 2024 – Present",
    bullets: [
      "Improved glacier calving detection from 10% to 93% accuracy using CNN+LSTM architectures (TensorFlow, PyTorch).",
      "Trained models on time-series satellite imagery across 100+ Sentinel-2 tiles of Greenland (110km × 110km each).",
      "Built scalable Python pipelines to preprocess optical and radar geospatial datasets across all of Greenland.",
      "Contributed to a seismology paper linking global seismic events to calving regions via statistical filtering.",
    ],
  },
  {
    title: "Machine Learning Engineer Intern",
    company: "Veevo Health",
    location: "Remote",
    period: "Jan 2026 – Mar 2026",
    bullets: [
      "Developed a deep learning model predicting coronary artery disease and plaque from medical imaging data.",
      "Produced 3D visualizations of coronary artery structures to aid team review and model interpretation.",
      "Researched CT, MRI, and other imaging modalities to inform preprocessing and model design decisions.",
    ],
  },
  {
    title: "Software Engineering & PM Intern",
    company: "Automatiq AI",
    location: "San Diego, CA",
    period: "Aug 2025 – Dec 2025",
    bullets: [
      "Led front-end design of a micro-SaaS product alongside 5+ engineers for a full platform launch.",
      "Built front-end features for an AI marketing platform generating strategy, content, and ads using multiple LLMs.",
      "Improved usability by refining UI/UX components for intuitiveness and accessibility.",
    ],
  },
  {
    title: "Computer Science Mentor",
    company: "UCSD Department of CSE",
    location: "La Jolla, CA",
    period: "Jul 2025 – Sep 2025",
    bullets: [
      "Taught 50+ UCSD students Python, data structures, algorithms, OOP, and machine learning.",
      "Supported ~30 full-stack ML & web development final projects, improving student success rates.",
      "Led lab hours, review sessions, and organized community events as Social Lead.",
    ],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
};

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="experience"
      className="py-28 lg:py-36"
    >
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={stagger}
        >
          <motion.p
            variants={fadeUp}
            className="text-xs uppercase tracking-[0.35em] text-moss-400 mb-5"
          >
            Work
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="font-serif text-5xl lg:text-6xl font-bold text-white mb-16 leading-tight"
          >
            Experience
          </motion.h2>

          <div className="relative">
            <div className="absolute left-0 top-2 bottom-2 w-px bg-white/25 hidden md:block" />

            <div className="space-y-8">
              {experiences.map((exp, i) => (
                <motion.div key={i} variants={fadeUp} className="md:pl-12 relative">
                  <div className="absolute left-[-5px] top-[26px] w-2.5 h-2.5 bg-moss-400 rounded-full hidden md:block" />

                  <div className="bg-white/10 rounded-xl p-6 lg:p-8 border border-white/20 hover:border-moss-400/50 transition-colors duration-300 backdrop-blur-md">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-5">
                      <div>
                        <h3 className="text-lg font-semibold text-white">{exp.title}</h3>
                        <p className="text-moss-400 text-sm mt-0.5">
                          {exp.company} · {exp.location}
                        </p>
                      </div>
                      <span className="text-white/50 text-xs tracking-wide whitespace-nowrap mt-1 sm:mt-0.5">
                        {exp.period}
                      </span>
                    </div>
                    <ul className="space-y-2">
                      {exp.bullets.map((bullet, j) => (
                        <li key={j} className="flex gap-3 text-white/80 text-sm leading-relaxed">
                          <span className="text-moss-500 mt-0.5 flex-shrink-0 text-base leading-none">›</span>
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

