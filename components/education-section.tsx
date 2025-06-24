"use client"

import React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { GraduationCap, Calendar, MapPin, Award, BookOpen, Trophy, Star, ChevronRight } from "lucide-react"

const educationData = [
  {
    id: 1,
    degree: "Bachelor of Engineering",
    field: "Computer Science & Engineering",
    institution: "Prof. Ram Meghe Institute of Technology and Research",
    location: "Amravati, Maharashtra",
    duration: "2022 - 2026",
    cgpa: "8.43",
    status: "Final Year",
    description:
      "Specializing in Full-Stack Development, Artificial Intelligence, and Machine Learning with hands-on experience in modern technologies.",
    highlights: [
      // "Consistent Academic Excellence (8.+ CGPA)",
      // "Active participation in coding competitions",
      // "Led multiple technical projects",
      // "Member of Computer Science Society",
    ],
    coursework: [
      "Data Structures & Algorithms",
      "Database Management Systems",
      "Machine Learning",
      "Web Technologies",
      "Software Engineering",
      "Computer Networks",
    ],
    projects: ["AI-Powered Task Manager", "E-Commerce Platform", "Weather Prediction ML Model"],
    color: "from-blue-500 to-purple-600",
    icon: GraduationCap,
  },
  {
    id: 2,
    degree: "Higher Secondary Certificate",
    field: "Science (PCM)",
    institution: "Shri Shivaji Multipurpose College",
    location: "Amravati, Maharashtra",
    duration: "2020 - 2022",
    cgpa: "85.2%",
    status: "Completed",
    description:
      "Focused on Physics, Chemistry, and Mathematics with additional computer science subjects that sparked my interest in programming.",
    highlights: [
      // "Top 10% in the batch",
      // "Mathematics Olympiad participant",
      // "Science exhibition winner",
      // "Computer programming club member",
    ],
    coursework: ["Advanced Mathematics", "Physics", "Chemistry", "Computer Science Basics", "English"],
    projects: ["Scientific Calculator (C++)", "Basic Website Design"],
    color: "from-green-500 to-teal-600",
    icon: BookOpen,
  },
  {
    id: 3,
    degree: "Secondary School Certificate",
    field: "SSC (10th Grade)",
    institution: "Good Shepherd English School",
    location: "Wardha, Maharashtra",
    duration: "2019 - 2020",
    cgpa: "93.20%",
    status: "Completed",
    description: "Strong foundation in core subjects with early exposure to computer science and logical thinking.",
    highlights: [
      "School topper in Mathematics",
      "Inter-school quiz competition winner",
      "Student council member",
      "Perfect attendance award",
    ],
    coursework: ["Mathematics", "Science", "Social Studies", "English", "Computer Applications"],
    projects: ["School Management System (Basic)"],
    color: "from-orange-500 to-red-600",
    icon: Award,
  },
]

export default function EducationSection() {
  const [activeEducation, setActiveEducation] = useState(0)
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  return (
    <section id="education" className="py-20 px-6 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
            animate={{
              y: [0, -50, 0],
              x: [0, Math.sin(i) * 30, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: Math.random() * 4 + 3,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            className="inline-block p-4 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full mb-6"
          >
            <GraduationCap className="w-12 h-12 text-blue-400" />
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Educational Journey
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto"
          >
            My academic path and the knowledge that shaped my passion for technology
          </motion.p>
        </motion.div>

        {/* Timeline Layout */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 rounded-full opacity-30" />

          {/* Education Cards */}
          <div className="space-y-16">
            {educationData.map((edu, index) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
                onHoverStart={() => setHoveredCard(index)}
                onHoverEnd={() => setHoveredCard(null)}
              >
                {/* Content Card */}
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  className={`w-5/12 ${index % 2 === 0 ? "mr-auto" : "ml-auto"}`}
                >
                  <div
                    className={`bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-blue-500/50 transition-all duration-500 group cursor-pointer ${
                      hoveredCard === index ? "shadow-2xl shadow-blue-500/20" : ""
                    }`}
                    onClick={() => setActiveEducation(index)}
                  >
                    {/* Header */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center gap-4">
                        <motion.div
                          whileHover={{ rotate: 360, scale: 1.1 }}
                          transition={{ duration: 0.5 }}
                          className={`w-16 h-16 rounded-full bg-gradient-to-r ${edu.color} flex items-center justify-center group-hover:shadow-lg transition-all duration-300`}
                        >
                          <edu.icon className="w-8 h-8 text-white" />
                        </motion.div>
                        <div>
                          <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                            {edu.degree}
                          </h3>
                          <p className="text-blue-400 font-semibold">{edu.field}</p>
                        </div>
                      </div>
                      <motion.div
                        animate={{ rotate: hoveredCard === index ? 90 : 0 }}
                        className="text-gray-400 group-hover:text-blue-400 transition-colors"
                      >
                        <ChevronRight size={20} />
                      </motion.div>
                    </div>

                    {/* Institution Info */}
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center gap-2 text-gray-300">
                        <BookOpen size={16} className="text-purple-400" />
                        <span className="font-semibold">{edu.institution}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-400">
                        <MapPin size={16} className="text-green-400" />
                        <span>{edu.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-400">
                        <Calendar size={16} className="text-orange-400" />
                        <span>{edu.duration}</span>
                      </div>
                    </div>

                    {/* CGPA/Percentage */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-2">
                        <Star className="w-5 h-5 text-yellow-400" />
                        <span className="text-white font-semibold">
                          {edu.cgpa.includes("%") ? "Percentage" : "CGPA"}: {edu.cgpa}
                        </span>
                      </div>
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-semibold ${
                          edu.status === "Final Year"
                            ? "bg-blue-600/20 text-blue-400"
                            : "bg-green-600/20 text-green-400"
                        }`}
                      >
                        {edu.status}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 mb-6 leading-relaxed">{edu.description}</p>

                    {/* Quick Highlights */}
                    <div className="space-y-2">
                      <h4 className="text-white font-semibold mb-3">Key Highlights</h4>
                      {edu.highlights.slice(0, 2).map((highlight, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.1 }}
                          className="flex items-center gap-2 text-gray-400"
                        >
                          <div className="w-2 h-2 bg-blue-400 rounded-full" />
                          <span className="text-sm">{highlight}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* Timeline Node */}
                <motion.div whileHover={{ scale: 1.5 }} className="absolute left-1/2 transform -translate-x-1/2 z-10">
                  <div
                    className={`w-6 h-6 rounded-full bg-gradient-to-r ${edu.color} border-4 border-gray-900 shadow-lg`}
                  />
                  <motion.div
                    animate={{
                      scale: hoveredCard === index ? [1, 1.5, 1] : 1,
                      opacity: hoveredCard === index ? [0.5, 1, 0.5] : 0.5,
                    }}
                    transition={{ duration: 2, repeat: hoveredCard === index ? Number.POSITIVE_INFINITY : 0 }}
                    className={`absolute inset-0 w-6 h-6 rounded-full bg-gradient-to-r ${edu.color} opacity-50`}
                  />
                </motion.div>

                {/* Year Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 + 0.5 }}
                  className={`w-5/12 flex ${index % 2 === 0 ? "justify-start pl-8" : "justify-end pr-8"}`}
                >
                  <div className="bg-gray-800/80 backdrop-blur-sm rounded-lg px-4 py-2 border border-gray-700">
                    <span className="text-gray-300 font-semibold">{edu.duration.split(" - ")[1] || edu.duration}</span>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Detailed View Modal */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700"
        >
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left Side - Current Education Details */}
            <div>
              <motion.h3
                key={activeEducation}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-2xl font-bold text-white mb-6 flex items-center gap-3"
              >
                <div
                  className={`w-8 h-8 rounded-full bg-gradient-to-r ${educationData[activeEducation].color} flex items-center justify-center`}
                >
                  {React.createElement(educationData[activeEducation].icon, { className: "w-4 h-4 text-white" })}
                </div>
                {educationData[activeEducation].degree}
              </motion.h3>

              <div className="space-y-4 mb-6">
                <h4 className="text-lg font-semibold text-blue-400">All Highlights</h4>
                {educationData[activeEducation].highlights.map((highlight, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-start gap-3 text-gray-300"
                  >
                    <Trophy className="w-4 h-4 text-yellow-400 mt-1 flex-shrink-0" />
                    <span>{highlight}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right Side - Coursework & Projects */}
            <div className="space-y-6">
              {/* Coursework */}
              <div>
                <h4 className="text-lg font-semibold text-purple-400 mb-4">Key Coursework</h4>
                <div className="grid grid-cols-2 gap-2">
                  {educationData[activeEducation].coursework.map((course, idx) => (
                    <motion.div
                      key={course}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: idx * 0.05 }}
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-2 bg-gray-700/50 rounded-lg text-sm text-gray-300 hover:text-white hover:bg-gray-700 transition-all duration-200 cursor-default"
                    >
                      {course}
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Projects */}
              {educationData[activeEducation].projects && (
                <div>
                  <h4 className="text-lg font-semibold text-green-400 mb-4">Notable Projects</h4>
                  <div className="space-y-2">
                    {educationData[activeEducation].projects.map((project, idx) => (
                      <motion.div
                        key={project}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        whileHover={{ x: 5 }}
                        className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors cursor-pointer"
                      >
                        <ChevronRight size={16} className="text-green-400" />
                        <span>{project}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Education Selector */}
          <div className="flex justify-center mt-8 gap-4">
            {educationData.map((_, idx) => (
              <motion.button
                key={idx}
                onClick={() => setActiveEducation(idx)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  activeEducation === idx
                    ? `bg-gradient-to-r ${educationData[idx].color} shadow-lg`
                    : "bg-gray-600 hover:bg-gray-500"
                }`}
              />
            ))}
          </div>
        </motion.div>

        {/* Academic Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { label: "Current CGPA", value: "8.9", color: "text-blue-400", icon: Star },
            { label: "Years of Study", value: "3+", color: "text-green-400", icon: Calendar },
            { label: "Major Projects", value: "15+", color: "text-purple-400", icon: Trophy },
            { label: "Academic Awards", value: "5+", color: "text-orange-400", icon: Award },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-blue-500/50 transition-all duration-300 text-center group"
            >
              <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }} className="inline-block mb-3">
                <stat.icon className={`w-8 h-8 ${stat.color} group-hover:scale-110 transition-transform`} />
              </motion.div>
              <div className={`text-3xl font-bold mb-2 ${stat.color}`}>{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
