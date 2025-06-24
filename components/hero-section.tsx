"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ChevronDown, Github, Linkedin, Mail, Code2, Download, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

const titles = ["Full Stack Developer","DSA Expert", "AI Enthusiast", "Tech Explorer", "Problem Solver", "Innovation Driver"]

export default function HeroSection() {
  const [currentTitle, setCurrentTitle] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 100
    const currentFullText = titles[currentTitle]

    if (!isDeleting && displayText === currentFullText) {
      setTimeout(() => setIsDeleting(true), 2000)
    } else if (isDeleting && displayText === "") {
      setIsDeleting(false)
      setCurrentTitle((prev) => (prev + 1) % titles.length)
    } else {
      const timeout = setTimeout(() => {
        setDisplayText(
          isDeleting
            ? currentFullText.substring(0, displayText.length - 1)
            : currentFullText.substring(0, displayText.length + 1),
        )
      }, typeSpeed)

      return () => clearTimeout(timeout)
    }
  }, [displayText, isDeleting, currentTitle])

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative px-6">
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/20 rounded-full"
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 100 - 50, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
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

      <div className="max-w-4xl mx-auto text-center z-10">
        {/* Profile Image */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="w-40 h-40 mx-auto mb-8 relative"
        >
          <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-1">
            <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center text-4xl font-bold">
               <img
        src="/prof.jpg" // ← replace with actual image path
        alt="YD"
        className="w-full h-full object-cover rounded-full"
      />
            </div>
          </div>
          <motion.div
            animate={{
              rotate: 360,
              scale: [1, 1.1, 1],
            }}
            transition={{
              rotate: { duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
              scale: { duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
            }}
            className="absolute inset-0 rounded-full border-2 border-dashed border-blue-400/30"
          />
        </motion.div>

        {/* Location */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex items-center justify-center gap-2 text-gray-400 mb-6"
        >
          <MapPin className="w-4 h-4" />
          <span>Amravati, Maharashtra • Available for Opportunities</span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent"
        >
          Yash Nitin Dighade
        </motion.h1>

        {/* Animated Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="text-2xl md:text-3xl mb-8 h-12 flex items-center justify-center"
        >
          <span className="text-blue-400 font-semibold">
            {displayText}
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY }}
              className="text-purple-400"
            >
              |
            </motion.span>
          </span>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          Final year <span className="text-blue-400 font-semibold">B.Tech CSE</span> student from{" "}
          <span className="text-purple-400 font-semibold">PRMIT&R, Amravati</span>. Passionate about creating innovative
          digital solutions and exploring cutting-edge technologies.
        </motion.p>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
          className="flex justify-center gap-6 mb-12"
        >
          {[
            { icon: Github, href: "https://github.com/Hitman45-web", label: "GitHub" },
            { icon: Linkedin, href: "https://www.linkedin.com/in/yash-dighade/", label: "LinkedIn" },
            { icon: Code2, href: "https://leetcode.com/u/yashdighade45/", label: "LeetCode" },
            { icon: Mail, href: "mailto:yash.dighade2003@gmail.com", label: "Email" },
          ].map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              initial={{ opacity: 0, y: 50, rotate: -180 }}
              animate={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ delay: 1.1 + index * 0.1, type: "spring", stiffness: 200 }}
              whileHover={{ scale: 1.2, y: -5, rotate: 360 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:border-blue-400 transition-all duration-300 hover:shadow-lg hover:shadow-blue-400/25"
            >
              <social.icon size={20} />
            </motion.a>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
          >
            View My Work
          </Button>
          <a href="/YashDighade.pdf" download>
          <Button
            variant="outline"
            size="lg"
            className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white px-8 py-4 text-lg font-semibold transition-all duration-300"
          >
            <Download className="w-5 h-5 mr-2" />
            Download Resume
          </Button>
          </a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          onClick={scrollToAbout}
          className="text-gray-400 hover:text-white transition-colors duration-300"
        >
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}>
            <ChevronDown size={32} />
          </motion.div>
        </motion.button>
      </div>
    </section>
  )
}
