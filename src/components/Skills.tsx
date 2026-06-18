"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const skillCategories = [
  {
    name: "Machine Learning",
    skills: ["TensorFlow", "PyTorch", "scikit-learn", "vLLM", "CNN / LSTM", "Deep Learning"],
  },
  {
    name: "Languages",
    skills: ["Python", "JavaScript", "R", "SQL", "Java", "MATLAB"],
  },
  {
    name: "Frontend & Full Stack",
    skills: ["React", "TypeScript", "React Native", "Flask", "HTML / CSS"],
  },
  {
    name: "Data & Visualization",
    skills: ["pandas", "NumPy", "Matplotlib", "Plotly", "seaborn", "PostgreSQL"],
  },
  {
    name: "Cloud & Tools",
    skills: ["AWS (EC2)", "Google Cloud", "Git", "Figma", "CVAT", "RStudio"],
  },
];

const coursework = [
  "Deep Learning",
  "Probabilistic ML",
  "Recommender Systems",
  "Data Structures & Algorithms",
  "Systems for Scalable Analytics",
  "Data Visualization",
  "Data Management",
  "Product Management",
  "Mathematical Statistics",
  "Linear Algebra",
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
    <section
      id="skills"
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
            className="text-xs uppercase tracking-[0.35em] text-moss-300 mb-5"
          >
            Technical
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="font-serif text-5xl lg:text-6xl font-bold text-white mb-14 leading-tight"
          >
            Skills
          </motion.h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
            {skillCategories.map((cat, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 hover:shadow-md hover:border-moss-200 transition-all duration-200"
              >
                <h3 className="text-slate-800 font-semibold text-sm uppercase tracking-wider mb-4">
                  {cat.name}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-moss-50 text-moss-700 text-sm rounded-full border border-moss-100"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={fadeUp}
            className="bg-white rounded-xl p-6 shadow-sm border border-slate-100"
          >
            <h3 className="text-slate-800 font-semibold text-sm uppercase tracking-wider mb-4">
              Relevant Coursework
            </h3>
            <div className="flex flex-wrap gap-2">
              {coursework.map((course) => (
                <span
                  key={course}
                  className="px-3 py-1 bg-slate-50 text-slate-600 text-sm rounded-full border border-slate-200"
                >
                  {course}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
