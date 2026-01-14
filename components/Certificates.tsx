"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FaCertificate, FaAward, FaExternalLinkAlt } from "react-icons/fa";

export default function Certificates() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const certificates = [
    {
      title: "React Developer Certificate",
      issuer: "Udemy",
      date: "November 14, 2024",
      description: "Comprehensive certificate validating expertise in React development, including modern React concepts, hooks, state management, and building dynamic user interfaces.",
      credentialId: "UC-822e20c3-76e9-4936-85a1-30a6b4f9d792",
      link: "https://www.udemy.com/certificate/UC-822e20c3-76e9-4936-85a1-30a6b4f9d792/",
      skills: ["React", "JavaScript", "Web Development", "Component Design"],
    },
    {
      title: "Python Developer Certificate",
      issuer: "Udemy",
      date: "March 8, 2023",
      description: "Comprehensive certificate demonstrating proficiency in Python programming, including object-oriented programming, data structures, algorithms, and building practical applications.",
      credentialId: "UC-7f66cbc8-a53c-442b-9855-287d3510c83d",
      link: "https://www.udemy.com/certificate/UC-7f66cbc8-a53c-442b-9855-287d3510c83d/",
      skills: ["Python", "OOP", "Data Structures", "Algorithms"],
    },
  ];

  return (
    <section
      id="certificates"
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
            My <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Certificates</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Professional certifications and credentials I&apos;ve earned
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.credentialId}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
            >
              {/* Certificate Header */}
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <FaCertificate className="text-3xl" />
                    <div>
                      <h3 className="text-xl font-bold">{cert.title}</h3>
                      <p className="text-blue-100 text-sm mt-1">{cert.issuer}</p>
                    </div>
                  </div>
                  <FaAward className="text-2xl opacity-50" />
                </div>
              </div>

              {/* Certificate Body */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    Issued: {cert.date}
                  </span>
                  {cert.credentialId && (
                    <span className="text-xs text-gray-500 dark:text-gray-500 font-mono">
                      ID: {cert.credentialId}
                    </span>
                  )}
                </div>

                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {cert.description}
                </p>

                {/* Skills */}
                <div className="mb-4">
                  <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Skills Covered:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="bg-white dark:bg-gray-900 text-blue-600 dark:text-blue-400 text-xs px-3 py-1 rounded-full border border-blue-200 dark:border-blue-800"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Verify Link */}
                {cert.link && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-purple-600 dark:hover:text-purple-400 font-semibold transition-colors duration-300 group-hover:gap-3"
                  >
                    <FaExternalLinkAlt />
                    Verify Certificate
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            I&apos;m committed to continuous learning and professional development.
            These certifications represent my dedication to staying current with
            industry best practices and emerging technologies.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

