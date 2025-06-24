"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Award, Trophy, Star, Target, Code, Users } from "lucide-react"

const achievements = [
  {
    icon: Code,
    title: "Open Source Contributor",
    description: "100+ contributions to various projects",
    date: "2022-2025",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Star,
    title: "LeetCode Expert",
    description: "Solved 500+ problems, 1800+ rating",
    date: "2025",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Users,
    title: "Team Leadership",
    description: "Led 5+ successful project teams",
    date: "2022-2024",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Target,
    title: "Project Success",
    description: "15+ completed projects with 100% success rate",
    date: "2022-2025",
    color: "from-cyan-500 to-blue-500",
  },
]

const certifications = [
  {
    title: "AWS Cloud Foundations",
    issuer: "Amazon Web Services",
    date: "2024",
    image: "/aws_cloud.png?height=400&width=400",
  },
  {
    title: "Cisco Certified Network Associate (CCNA)",
    issuer: "Cisco",
    date: "2025",
    image: "/CCNA.png?height=100&width=100",
  },
  {
    title: "Intel Unnati Industrial Training Program",
    issuer: "Intel Corporation",
    date: "2024",
    image: "/Intel Certi.png?height=100&width=100",
  },
  {
    title: "AI-ML Vitual Internship",
    issuer: "AICTE",
    date: "2024",
    image: "/aimlverti.png?height=100&width=100",
  },
]

export default function AchievementsSection() {
  const [selectedCert, setSelectedCert] = useState(null)

  return (
    <section id="achievements" className="py-20 px-6 bg-gray-900/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Achievements & Certifications
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Recognition and milestones in my journey as a developer
          </p>
        </motion.div>

        {/* Achievements Grid */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Achievements</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700 hover:border-blue-500/50 transition-all duration-300 group"
              >
                <div
                  className={`w-16 h-16 rounded-full bg-gradient-to-r ${achievement.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <achievement.icon className="w-8 h-8 text-white" />
                </div>

                <h4 className="text-xl font-bold text-white mb-2">{achievement.title}</h4>
                <p className="text-gray-400 mb-3">{achievement.description}</p>
                <span className="text-sm text-blue-400 font-semibold">{achievement.date}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Certifications</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700 hover:border-purple-500/50 transition-all duration-300 text-center group cursor-pointer"
                onClick={() => setSelectedCert(cert)}
              >
                <div className="w-32 h-32 mx-auto mb-4 bg-gray-700 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <img src={cert.image || "/placeholder.svg"} alt={cert.title} className="w-28 h-28 object-contain" />
                </div>

                <h4 className="font-bold text-white mb-2 text-sm">{cert.title}</h4>
                <p className="text-gray-400 text-sm mb-2">{cert.issuer}</p>
                <span className="text-xs text-purple-400 font-semibold">{cert.date}</span>
              </motion.div>
            ))}
          </div>

          {/* Popup Preview Modal */}
          <AnimatePresence>
            {selectedCert && (
              <motion.div
                className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedCert(null)}
              >
                <motion.div
                  className="bg-white rounded-lg p-4 max-w-3xl w-full mx-4"
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0.8 }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <img
                    src={selectedCert.image}
                    alt={selectedCert.title}
                    className="w-full h-auto rounded-lg object-contain"
                  />
                  <div className="text-center mt-4">
                    <h4 className="text-lg font-semibold text-gray-800">{selectedCert.title}</h4>
                    <p className="text-sm text-gray-600">{selectedCert.issuer}</p>
                    <p className="text-xs text-gray-500">{selectedCert.date}</p>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-2xl p-8 border border-blue-500/20"
        >
          {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "15+", label: "Projects Completed", color: "text-blue-400" },
              { value: "8.9", label: "CGPA", color: "text-green-400" },
              { value: "500+", label: "LeetCode Problems", color: "text-orange-400" },
              { value: "3+", label: "Years Experience", color: "text-purple-400" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className={`text-4xl font-bold mb-2 ${stat.color}`}>{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div> */}
        </motion.div>
      </div>
    </section>
  )
}
