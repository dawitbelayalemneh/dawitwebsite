"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  FaReact,
  FaPython,
  FaGitAlt,
  FaAws,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiVite,
  SiFigma,
  SiFirebase,
  SiSupabase,
  SiJavascript,
} from "react-icons/si";

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const skills = [
    { name: "React", icon: FaReact, color: "text-blue-500" },
    { name: "Next.js", icon: SiNextdotjs, color: "text-black dark:text-white" },
    { name: "JavaScript", icon: SiJavascript, color: "text-yellow-500" },
    { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
    { name: "HTML5", icon: FaHtml5, color: "text-orange-600" },
    { name: "CSS", icon: FaCss3Alt, color: "text-blue-500" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-500" },
    { name: "Python", icon: FaPython, color: "text-blue-400" },
    { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
    { name: "Firebase", icon: SiFirebase, color: "text-orange-500" },
    { name: "Supabase", icon: SiSupabase, color: "text-green-600" },
    { name: "Git", icon: FaGitAlt, color: "text-orange-600" },
    { name: "AWS", icon: FaAws, color: "text-orange-500" },
    { name: "Vite", icon: SiVite, color: "text-purple-500" },
    { name: "Figma", icon: SiFigma, color: "text-purple-600" },
  ];

  return (
    <section
      id="skills"
      ref={ref}
      className="py-20 bg-white dark:bg-gray-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={
                isInView
                  ? { opacity: 1, scale: 1 }
                  : { opacity: 0, scale: 0.8 }
              }
              transition={{
                duration: 0.4,
                delay: index * 0.05,
              }}
              className="flex flex-col items-center p-6 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-lg hover:shadow-xl transition-all duration-300 group hover:scale-105"
            >
              <skill.icon
                className={`text-5xl mb-3 ${skill.color} group-hover:scale-110 transition-transform duration-300`}
              />
              <span className="text-sm font-semibold text-gray-700 dark:text-gray-300 text-center">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            I&apos;m always eager to learn new technologies and expand my skill set.
            Currently exploring AI/ML integration, Web3, and advanced cloud
            architecture patterns.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

