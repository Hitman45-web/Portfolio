"use client"

import { motion } from "framer-motion"
import { Code, Lightbulb, Target, Users } from "lucide-react"

const highlights = [
  {
    icon: Code,
    title: "Clean Code",
    description: "Writing maintainable, scalable, and efficient code following best practices.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Always exploring new technologies and creative solutions to complex problems.",
  },
  {
    icon: Target,
    title: "Goal-Oriented",
    description: "Focused on delivering results and exceeding expectations in every project.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Strong team player with excellent communication and leadership skills.",
  },
]

export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Passionate developer with a love for creating innovative solutions
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image and Stats */}
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="relative">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="w-80 h-80 mx-auto bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center text-6xl font-bold border border-gray-700"
              >
                    <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden">
      <img
        src="/prof.jpg" // ← replace with actual image path
        alt="YD"
        className="w-full h-full object-cover"
      />
      </div>
              </motion.div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {[
                { value: "15+", label: "Projects" },
                { value: "8.43", label: "CGPA" },
                { value: "3+", label: "Years Coding" },
                { value: "2026", label: "Graduation" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center p-4 bg-gray-800/50 rounded-lg border border-gray-700"
                >
                  <div className="text-3xl font-bold text-blue-400 mb-2">{stat.value}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white">Hello! I'm Yash</h3>
              <p className="text-gray-300 leading-relaxed">
                I'm a final year Computer Science Engineering student at PRMIT&R, Amravati, with a passion for
                full-stack development and artificial intelligence. I love turning complex problems into simple,
                beautiful, and intuitive solutions.
              </p>
              <p className="text-gray-300 leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or
                learning about the latest trends in AI and machine learning. I believe in continuous learning and
                staying updated with the ever-evolving tech landscape.
              </p>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={highlight.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="p-4 bg-gray-800/30 rounded-lg border border-gray-700 hover:border-blue-500/50 transition-all duration-300"
                >
                  <highlight.icon className="w-8 h-8 text-blue-400 mb-3" />
                  <h4 className="font-semibold text-white mb-2">{highlight.title}</h4>
                  <p className="text-sm text-gray-400">{highlight.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
