"use client"

import { motion } from "framer-motion"
import { Heart, Github, Linkedin, Mail, Code2 } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Code2, href: "#", label: "LeetCode" },
    { icon: Mail, href: "mailto:yashdighaade@example.com", label: "Email" },
  ]

  return (
    <footer className="py-12 px-6 bg-gray-900/80 border-t border-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo and Copyright */}
          <div className="text-center md:text-left">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2"
            >
              YD.dev
            </motion.div>
            <p className="text-gray-400 flex items-center gap-2">
              Made with <Heart className="w-4 h-4 text-red-500" fill="currentColor" /> by Yash Nitin Dighade
            </p>
            <p className="text-gray-500 text-sm mt-1">© {currentYear} All rights reserved.</p>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.2, y: -5 }}
                className="w-10 h-10 bg-gray-800 border border-gray-700 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:border-blue-500 transition-all duration-300"
              >
                <social.icon size={18} />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Bottom Text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-8 pt-8 border-t border-gray-800"
        >
          <p className="text-gray-500 text-sm">Built with Next.js, TypeScript, Tailwind CSS, and Framer Motion</p>
        </motion.div>
      </div>
    </footer>
  )
}
