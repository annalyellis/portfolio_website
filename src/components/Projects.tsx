"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    title: "SheSteps",
    subtitle: "CalHacks 2025 · Oct 2025",
    badge: "Hackathon",
    description:
      "ML-powered women's running safety app. Built a scikit-learn pipeline assessing risk and optimizing routes across 930 sq. miles of real-time SF crime data. Flask REST API + React Native + TypeScript frontend.",
    tags: ["scikit-learn", "Flask", "React Native", "TypeScript", "Figma"],
    image: "/run.jpeg",
    link: "https://github.com/erikaleeey/calhacks_womens_safety",
    linkLabel: "View on GitHub →",
  },
  {
    title: "EMS AI Integration",
    subtitle: "Helport AI Competition · 2nd Place · $2,000",
    badge: "Award Winner",
    description:
      "AI assistant for EMTs providing real-time guidance, auto-documentation, and hospital communication. Won 2nd place and $2,000 from a panel of 10 judges. Included hospital board deployment discussions.",
    tags: ["LLMs", "Voice AI", "Product Design", "Healthcare"],
    image: "/ems.jpeg",
    link: "https://docs.google.com/presentation/d/1KLx9IQ5A3b0Jid6XVyKmLmgu5HE8vQzwYxOUiS8H1lM/edit?usp=sharing",
    linkLabel: "View Presentation →",
  },
  {
    title: "Environmental Sustainability App",
    subtitle: "UCSD Women in Computing · Sep–Nov 2024",
    badge: "Collaboration",
    description:
      "Climate change education web app built with 5 engineers in an agile environment. Interactive JavaScript quiz and responsive pages designed for cross-browser compatibility.",
    tags: ["JavaScript", "HTML/CSS", "Agile", "Climate Tech"],
    image: "/sustainability.jpeg",
    imagePosition: "center 70%",
    link: "https://github.com/Testen10/WICProj7_FA24",
    linkLabel: "View on GitHub →",
  },
  {
    title: "Flavors of Data",
    subtitle: "Recipe Analytics Project",
    badge: "Data Science",
    description:
      "End-to-end statistical analysis and ML project exploring patterns in 80,000+ recipes. Includes EDA, hypothesis testing, and predictive modeling to uncover what makes a recipe highly rated.",
    tags: ["scikit-learn", "pandas", "Python", "Hypothesis Testing", "EDA"],
    image: "/recipe.jpeg",
    link: "https://annalyellis.github.io/recipes_statistical_analysis/",
    linkLabel: "View Project →",
  },
  {
    title: "Are You Stable?",
    subtitle: "Interactive Data Visualization · Team Project",
    badge: "Data Viz",
    description:
      "Interactive visualization exploring how balance changes across a lifetime. Built collaboratively with a focus on storytelling through data.",
    tags: ["D3.js", "Data Visualization", "Storytelling", "JavaScript"],
    image: "/balance.jpeg",
    link: "https://annalyellis.github.io/are-you-stable/",
    linkLabel: "View Project →",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65 } },
};

const stagger = { visible: { transition: { staggerChildren: 0.12 } } };

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" className="py-24 lg:py-32">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={stagger}
        >
          <motion.p variants={fadeUp} className="text-xs uppercase tracking-[0.35em] text-moss-300 mb-5">
            Selected Work
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="font-serif text-5xl lg:text-6xl font-bold text-white mb-12"
          >
            Projects
          </motion.h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="bg-white/10 border border-white/20 rounded-xl flex flex-col hover:border-moss-400/50 hover:-translate-y-1 transition-all duration-200 group backdrop-blur-md overflow-hidden"
              >
                {/* Card image header */}
                <div className="relative h-36 flex-shrink-0">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    style={{ objectPosition: (project as { imagePosition?: string }).imagePosition ?? "center" }}
                  />
                  <div className="absolute inset-0 bg-black/30" />
                </div>

                {/* Card body */}
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="font-serif text-xl font-semibold text-white group-hover:text-moss-300 transition-colors">
                      {project.title}
                    </h3>
                    <span className="flex-shrink-0 px-2 py-0.5 bg-moss-500/20 text-moss-300 text-[10px] font-medium uppercase tracking-wider rounded border border-moss-400/30">
                      {project.badge}
                    </span>
                  </div>
                  <p className="text-moss-400 text-xs mb-3">{project.subtitle}</p>
                  <p className="text-white/75 text-sm leading-relaxed flex-1 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-2.5 py-0.5 bg-white/15 text-white/80 text-xs rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-moss-300 hover:text-moss-200 uppercase tracking-widest transition-colors mt-auto"
                    >
                      {project.linkLabel}
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
