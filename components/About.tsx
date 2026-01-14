"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FaCode, FaLaptopCode, FaRocket } from "react-icons/fa";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const features = [
    {
      icon: FaCode,
      title: "Clean Code",
      description: "Writing maintainable and scalable code with best practices",
    },
    {
      icon: FaLaptopCode,
      title: "Responsive Design",
      description: "Creating beautiful interfaces that work on all devices",
    },
    {
      icon: FaRocket,
      title: "Performance",
      description: "Building fast and optimized web applications",
    },
  ];

  return (
    <section
      id="about"
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
            About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Get to know more about who I am and what I do
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              I&apos;m a passionate developer who loves building things
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              With <span className="font-semibold text-blue-600 dark:text-blue-400">4+ years of experience</span> in web development, 
              I specialize in creating modern, responsive, and user-friendly applications. 
              I&apos;m constantly learning new technologies and improving my skills to stay
              up-to-date with industry trends.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Currently, I work at <span className="font-semibold text-blue-600 dark:text-blue-400">Amplitude Ventures</span>, 
              a tech company based in Norway, where I contribute to building innovative 
              solutions and collaborate with talented teams on cutting-edge projects.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              I believe in writing clean, maintainable code and following best
              practices. My goal is to create solutions that not only meet the
              requirements but exceed expectations.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              When I&apos;m not coding, you can find me exploring new technologies,
              contributing to open-source projects, or sharing knowledge with the
              developer community.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.2 * index }}
                className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <feature.icon className="text-blue-600 dark:text-blue-400 text-3xl mb-3" />
                <h4 className="text-xl font-semibold mb-2">{feature.title}</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

