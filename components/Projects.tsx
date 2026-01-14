"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const projects = [
    {
      title: "WARM Music",
      description:
        "WARM (World Airplay Radio Monitor) is a real-time radio airplay monitoring platform that uses audio fingerprinting technology to track when and where songs are played on radio stations around the world. It provides artists, labels, and managers with transparent, data-driven insights into global radio exposure.",
      technologies: ["Next.js", "React", "Audio Fingerprinting", "Real-time Data"],
      github: "https://github.com/dawitbelayalemneh/warm-music",
      demo: "https://www.warmmusic.net/",
      image: "/warm-music.png",
    },
    {
      title: "Blizbi Joy Finder",
      description:
        "A web application designed to help users discover and explore upcoming events in their area. Find concerts, festivals, workshops, and more with an intuitive and user-friendly interface.",
      technologies: ["React", "JavaScript", "Event APIs", "Responsive Design"],
      github: "https://github.com/dawitbelayalemneh/blizbi",
      demo: "https://blizbi.no/",
      image: "/blizbi.png",
    },
    {
      title: "Tana Car Rental",
      description:
        "Developed a user-friendly website for Tana Car Rental using Next.js and Tailwind CSS. The website features car listings, booking functionality, and customer management, providing a seamless online experience for users.",
      technologies: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
      github: "https://github.com/dawitbelayalemneh/tana-car-rental",
      demo: "https://tancarrental.vercel.app/",
      image: "/tana-car-rental.png",
    },
    {
      title: "Amen Computer Store",
      description:
        "Next.js + Tailwind CSS powered e-commerce website for computer sales. Featuring a robust product catalog, secure checkout, and a modern user interface.",
      technologies: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
      github: "https://github.com/dawitbelayalemneh/amen-computer-store",
      demo: "https://amen-computer-store.vercel.app/",
      image: "/amen-computer.png",
    },
    {
      title: "Tomato Restaurant",
      description:
        "Developed a React-powered website for Tomato Restaurant, featuring a visually engaging menu with categories like Salads, Pastas, and Desserts, enhancing online visibility and customer engagement.",
      technologies: ["React", "JavaScript", "CSS", "Responsive Design"],
      github: "https://github.com/dawitbelayalemneh/tomato-restaurant",
      demo: "https://tomatorestaurant.vercel.app/",
      image: "/tomato-restaurant.png",
    },
    {
      title: "D Shop",
      description:
        "D-Shop is your one-stop online destination for a diverse range of products. Explore our extensive catalog, enjoy secure shopping, and experience the convenience of online shopping.",
      technologies: ["React", "JavaScript", "E-commerce", "CSS"],
      github: "https://github.com/dawitbelayalemneh/d-shop",
      demo: "https://dshopecommerce.vercel.app/",
      image: "/d-shop.png",
    },
  ];

  return (
    <section
      id="projects"
      ref={ref}
      className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 group"
            >
              <div className="relative h-48 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-gray-700 dark:to-gray-600 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-semibold"
                  >
                    <FaExternalLinkAlt /> Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

