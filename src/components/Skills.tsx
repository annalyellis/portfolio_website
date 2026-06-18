"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const skillCategories = [
  {
    name: "Machine Learning",
    skills: ["TensorFlow", "PyTorch", "scikit-learn", "vLLM", "XGBoost", "LightGBM", "Keras"],
  },
  {
    name: "Frontend & Full Stack",
    skills: ["React", "Next.js", "TypeScript", "Flask", "HTML / CSS"],
  },
  {
    name: "Data & Visualization",
    skills: ["Pandas", "NumPy", "Matplotlib", "Plotly", "Seaborn", "PostgreSQL"],
  },
  {
    name: "Cloud & Tools",
    skills: ["AWS", "Lambda", "Google Cloud", "Git", "Figma", "CVAT", "RStudio"],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="py-28 lg:py-36">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={stagger}
        >
          <motion.p variants={fadeUp} className="text-xs uppercase tracking-[0.35em] text-moss-300 mb-5">
            Technical
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="font-serif text-5xl lg:text-6xl font-bold text-white mb-14 leading-tight"
          >
            Skills
          </motion.h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {skillCategories.map((cat, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="bg-white/10 backdrop-blur-md rounded-xl p-5 border border-white/20 hover:border-moss-400/50 transition-all duration-200"
              >
                <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
                  {cat.name}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-moss-500/20 text-moss-300 text-sm rounded-full border border-moss-400/30"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}

          </div>
        </motion.div>
      </div>
    </section>
  );
}
