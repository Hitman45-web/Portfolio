"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Code, Database, Globe, Smartphone, Brain, Cloud } from "lucide-react"

const skillCategories = [
  {
    title: "Frontend",
    icon: Globe,
    color: "from-blue-500 to-cyan-500",
    skills: [
      { name: "React", level: 90 },
      { name: "Next.js", level: 85 },
     {name:"HTML", level: 95 },
      { name: "CSS", level: 90 },
      {name:"Bootstrap", level: 80 },
      { name: "Tailwind CSS", level: 95 },
      { name: "JavaScript", level: 90 },
    ],
  },
  {
    title: "Backend",
    icon: Database,
    color: "from-green-500 to-emerald-500",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Python", level: 80 },
      { name: "Express.js", level: 85 },
      { name: "MongoDB", level: 75 },
      { name: "PostgreSQL", level: 70 },
    ],
  },
  // {
  //   title: "Mobile",
  //   icon: Smartphone,
  //   color: "from-purple-500 to-pink-500",
  //   skills: [
  //     { name: "React Native", level: 75 },
  //     { name: "Flutter", level: 65 },
  //     { name: "Expo", level: 80 },
  //     { name: "Firebase", level: 70 },
  //   ],
  // },
  {
    title: "AI/ML",
    icon: Brain,
    color: "from-orange-500 to-red-500",
    skills: [
      { name: "TensorFlow", level: 70 },
      { name: "PyTorch", level: 65 },
      { name: "Scikit-learn", level: 75 },
      { name:"Machine Learning", level: 80 },
      { name: "OpenAI API", level: 80 },
    ],
  },
  {
    title: "DevOps",
    icon: Cloud,
    color: "from-indigo-500 to-blue-500",
    skills: [
      { name: "Docker", level: 75 },
      { name: "AWS", level: 70 },
      { name: "Vercel", level: 90 },
      { name: "Git", level: 95 },
    ],
  },
  {
    title: "Tools",
    icon: Code,
    color: "from-yellow-500 to-orange-500",
    skills: [
      { name: "VS Code", level: 95 },
      { name: "Figma", level: 80 },
      { name: "Postman", level: 85 },
      { name: "Linux", level: 75 },
      { name: "GitHub", level: 98 },
      
    ],
  },
]

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState(0)

  return (
    <section id="skills" className="py-20 px-6 bg-gray-900/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency levels
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {skillCategories.map((category, index) => (
            <motion.button
              key={category.title}
              onClick={() => setActiveCategory(index)}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              animate={{ y: [0, -1, 0] }}
              transition={{
                y: { duration: 2 + index * 0.2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
              }}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === index
                  ? `bg-gradient-to-r ${category.color} text-white shadow-lg shadow-blue-500/25`
                  : "bg-gray-800 text-gray-400 hover:text-white border border-gray-700 hover:border-blue-500/50"
              }`}
            >
              <motion.div animate={{ rotate: activeCategory === index ? 360 : 0 }} transition={{ duration: 0.5 }}>
                <category.icon size={20} />
              </motion.div>
              {category.title}
            </motion.button>
          ))}
        </div>

        {/* Skills Display */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700"
        >
          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories[activeCategory].skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="space-y-2"
              >
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-white">{skill.name}</span>
                  <span className="text-gray-400">{skill.level}%</span>
                </div>
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1.5, delay: index * 0.1, ease: "easeOut" }}
                  className={`h-2 rounded-full bg-gradient-to-r ${skillCategories[activeCategory].color} relative overflow-hidden`}
                >
                  <motion.div
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tech Stack Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-center mb-8 text-white">Tech Stack</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "React",
              "Next.js",
              // "TypeScript",
              "JavaScript",
              "Node.js",
              "Python",
              "MongoDB",
              "Express.js",
              "MySQL",
              "PostgreSQL",
              
              "AWS",
              "Docker",
              // "TensorFlow",
              // "React Native",
              "Tailwind CSS",
            ].map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="px-4 py-2 bg-gradient-to-r from-gray-800 to-gray-700 rounded-full text-sm font-medium text-gray-300 border border-gray-600 hover:border-blue-500 transition-all duration-300"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
