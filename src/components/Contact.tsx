"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const stagger = { visible: { transition: { staggerChildren: 0.15 } } };

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" className="relative py-28 lg:py-36">
      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={stagger}
          className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center"
        >
          {/* Photo */}
          <motion.div variants={fadeUp} className="flex justify-center md:justify-start order-2 md:order-1">
            <div className="relative w-64 lg:w-80">
              <div className="absolute top-4 left-[-12px] w-full h-full border-2 border-moss-400/50 z-0" />
              <div className="relative z-10 shadow-2xl overflow-hidden rounded-sm">
                <Image
                  src="/headshot2.jpeg"
                  alt="Annaly Ellis outdoors"
                  width={320}
                  height={400}
                  className="object-cover w-full"
                  style={{ objectPosition: "center top" }}
                />
              </div>
            </div>
          </motion.div>

          {/* Text */}
          <div className="order-1 md:order-2">
            <motion.p variants={fadeUp} className="text-xs uppercase tracking-[0.35em] text-moss-300 mb-6">
              Get In Touch
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            >
              Let&apos;s build something that matters.
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-white/70 text-base leading-relaxed mb-10"
            >
              I&apos;m open to fall 2026 internships and full-time roles after graduating spring 2027 in ML,
              data science, and software engineering. Always happy to connect.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-4 mb-10">
              <a
                href="mailto:anellis@ucsd.edu"
                className="px-8 py-3.5 bg-moss-500 hover:bg-moss-400 text-white text-sm font-medium tracking-wider uppercase transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-moss-500/30"
              >
                anellis@ucsd.edu
              </a>
              <a
                href="mailto:anellis@ucsd.edu?subject=Resume%20Request"
                className="px-8 py-3.5 border border-white/50 hover:border-white text-white/80 hover:text-white text-sm font-medium tracking-wider uppercase transition-all duration-200 hover:-translate-y-0.5"
              >
                Resume →
              </a>
            </motion.div>

            <motion.div variants={fadeUp} className="flex gap-8">
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
          </div>
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
