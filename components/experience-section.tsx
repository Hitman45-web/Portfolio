"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Briefcase,
  Calendar,
  MapPin,
  ExternalLink,
  ChevronRight,
  Building,
  Users,
  Target,
  Code,
  Award,
  Download,
  X,
  CheckCircle,
  FileText,
  Star,
  Zap,
} from "lucide-react"
import { Button } from "@/components/ui/button"

const experienceData = [
  {
    id: 1,
    title: "Intern",
    company: "Intel Unnati Industrial Training Program",
    location: "Bengaluru,Karnataka",
    duration: "May 2024 - July 2024",
    type: "Internship",
    status: "Completed",
    description:
      "Participated in the Intel® Unnati Industrial Training – 2024, focusing on data analytics and knowledge representation using structured datasets. The internship emphasized hands-on implementation of data science pipelines and insight generation through machine learning and visualization techniques.",
    responsibilities: [
      "Analyzed structured datasets to uncover patterns and trends.",
      "Performed data preprocessing including cleaning, transformation, and encoding.",
      "Conducted exploratory data analysis (EDA) to visualize and interpret data distributions.",
      "Applied machine learning models like clustering (K-Means, DBSCAN) and regression (Linear Regression, Random Forest).",
      "Generated automated, human-readable insights using statistical and NLG techniques.",
      "Collaborated with peers to develop an end-to-end data analysis pipeline.",
      
    ],
    technologies: ["Python", "Pandas", "Scikit-Learn", "Seaborn", "PCA", "Clustering", "Regression", "Apache Spark"],
    achievements: [
      "Successfully built a project pipeline capable of extracting actionable insights from complex datasets.",

"Developed visual and textual reporting mechanisms for data storytelling.",

  "Gained proficiency in key data science tools and methods aligned with industry standards.",

"Received positive evaluation for teamwork, analytical depth, and effective communication of insights.",


    ],
    companyWebsite: "https://techcorp.com",
    companyLogo: "/intel logo.png?height=60&width=60",
    color: "from-blue-500 via-cyan-500 to-teal-500",
    icon: Code,
    certificate: {
      image: "/Intel Certi.png?height=500&width=700",
      title: "Full Stack Development Excellence Certificate",
      issueDate: "August 15, 2024",
      // credentialId: "TC-2024-FS-001",
      verificationUrl: "https://verify.techcorp.com/TC-2024-FS-001",
      grade: "A+",
      skills: ["React.js", "Node.js", "MongoDB", "TypeScript", "AWS", "Docker"],
      mentor: "Dr.Roshan Karwa",
      projects: [
        "Knowledge Representation and Insights Generation from structured Datasets",
      ],
     
      
    },
    rating: 4.9,
    testimonial: {
      text: "Yash demonstrated exceptional technical skills and leadership qualities. His ability to learn quickly and mentor others made him an invaluable team member.",
      author: "Dr. Roshan Karwa",
      position: "Intern",
      avatar: "/placeholder.svg?height=50&width=50",
    },
  },
  {
    id: 2,
    title: "C++ Programmer",
    company: "CodSoft",
    location: "Remote",
    duration: "March 2024 - April 2024",
    type: "Part-time",
    status: "Completed",
    description:
      "Developed Basic C++ projects at a Beginner Level",
    responsibilities: [
      "Optitmizing Code"
    ],
    technologies: ["C++", "VS code"],
    achievements: [
     "Successfully completed all the Projects with the given timeline and in Optimized Way"
    ],
    companyWebsite: "https://startuphub.com",
    companyLogo: "/placeholder.svg?height=60&width=60",
    color: "from-green-500 via-emerald-500 to-cyan-500",
    icon: Building,
    certificate: {
      image: "/codsoft certi.png?height=500&width=700",
      title: "Frontend Development Mastery Certificate",
      issueDate: "May 20, 2024",
      credentialId: "SH-2024-FE-007",
      verificationUrl: "https://verify.startuphub.com/SH-2024-FE-007",
      grade: "A",
      skills: ["React.js", "Redux", "Material-UI", "JavaScript", "Testing", "Accessibility"],
      mentor: "Priya Sharma - UI/UX Lead",
      projects: [
        "Financial Dashboard with Real-time Charts",
        "Mobile Banking Interface",
        "Investment Portfolio Tracker",
      ],
      hours: "320 hours",
      description:
        "Intensive frontend development program focusing on modern React patterns, state management, and user experience optimization.",
    },
    rating: 4.8,
    testimonial: {
      text: "Yash's attention to detail and commitment to user experience excellence made our fintech platform stand out. His code quality is exceptional.",
      author: "Priya Sharma",
      position: "UI/UX Lead",
      avatar: "/placeholder.svg?height=50&width=50",
    },
  },
]

export default function ExperienceSection() {
  const [activeExperience, setActiveExperience] = useState(0)
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const [selectedCertificate, setSelectedCertificate] = useState<(typeof experienceData)[0] | null>(null)
  const [showTestimonial, setShowTestimonial] = useState<number | null>(null)

  return (
    <section id="experience" className="py-20 px-6 relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0">
        {/* Animated Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

        {/* Floating Particles */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
            animate={{
              y: [0, -100, 0],
              x: [0, Math.sin(i) * 50, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [0.5, 1.5, 0.5],
            }}
            transition={{
              duration: Math.random() * 8 + 6,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 5,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}

        {/* Gradient Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            className="inline-block p-6 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 rounded-full mb-8 relative"
          >
            <Briefcase className="w-16 h-16 text-blue-400" />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              className="absolute inset-0 rounded-full border-2 border-dashed border-blue-400/30"
            />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
          >
            Professional Experience
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            My journey through innovative companies and the impactful projects that shaped my expertise
          </motion.p>
        </motion.div>

        {/* Experience Cards */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {experienceData.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 100, rotateX: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.3 }}
              whileHover={{
                y: -15,
                rotateX: 5,
                rotateY: 5,
                scale: 1.02,
                transition: { duration: 0.3 },
              }}
              onHoverStart={() => setHoveredCard(index)}
              onHoverEnd={() => setHoveredCard(null)}
              style={{ transformStyle: "preserve-3d" }}
              className="group relative"
            >
              {/* Main Card */}
              <div
                className={`bg-gray-800/40 backdrop-blur-xl rounded-3xl p-8 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-700 relative overflow-hidden ${
                  hoveredCard === index ? "shadow-2xl shadow-blue-500/20" : ""
                }`}
              >
                {/* Animated Background Gradient */}
                <motion.div
                  animate={{
                    opacity: hoveredCard === index ? 0.1 : 0,
                    scale: hoveredCard === index ? 1 : 0.8,
                  }}
                  className={`absolute inset-0 bg-gradient-to-br ${exp.color} rounded-3xl`}
                />

                {/* Header */}
                <div className="relative z-10 mb-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-6">
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                        className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${exp.color} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300`}
                      >
                        <exp.icon className="w-10 h-10 text-white" />
                      </motion.div>
                      <div>
                        <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors mb-2">
                          {exp.title}
                        </h3>
                        <div className="flex items-center gap-3 mb-2">
                          <img
                            src={exp.companyLogo || "/placeholder.svg"}
                            alt={exp.company}
                            className="w-8 h-8 rounded-lg"
                          />
                          <p className="text-lg font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                            {exp.company}
                          </p>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-gray-400">
                          <div className="flex items-center gap-1">
                            <MapPin size={14} className="text-green-400" />
                            <span>{exp.location}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar size={14} className="text-orange-400" />
                            <span>{exp.duration}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <motion.div
                      animate={{ rotate: hoveredCard === index ? 90 : 0 }}
                      className="text-gray-400 group-hover:text-blue-400 transition-colors"
                    >
                      <ChevronRight size={24} />
                    </motion.div>
                  </div>

                  {/* Status and Type */}
                  <div className="flex items-center gap-3 mb-6">
                    <span
                      className={`px-4 py-2 rounded-full text-sm font-semibold ${
                        exp.status === "Current"
                          ? "bg-green-600/20 text-green-400 border border-green-500/30"
                          : "bg-gray-600/20 text-gray-400 border border-gray-500/30"
                      }`}
                    >
                      {exp.status}
                    </span>
                    <span className="px-4 py-2 bg-blue-600/20 text-blue-400 text-sm rounded-full border border-blue-500/30">
                      {exp.type}
                    </span>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-yellow-400 font-semibold">{exp.rating}</span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="relative z-10 mb-8">
                  <p className="text-gray-300 leading-relaxed mb-6">{exp.description}</p>

                  {/* Key Achievements Preview */}
                  <div className="space-y-3">
                    <h4 className="text-white font-semibold flex items-center gap-2">
                      <Zap className="w-4 h-4 text-yellow-400" />
                      Key Achievements
                    </h4>
                    {exp.achievements.slice(0, 3).map((achievement, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-start gap-3 text-gray-400"
                      >
                        <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-sm">{achievement}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="relative z-10 mb-8">
                  <h4 className="text-white font-semibold mb-4">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, idx) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.05 }}
                        whileHover={{ scale: 1.1, y: -2 }}
                        className="px-3 py-1 bg-gray-700/50 text-gray-300 text-sm rounded-lg border border-gray-600/50 hover:border-blue-500/50 transition-all duration-200"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="relative z-10 flex gap-4">
                  <Button
                    onClick={() => setSelectedCertificate(exp)}
                    className={`flex-1 bg-gradient-to-r ${exp.color} hover:opacity-90 text-white font-semibold transition-all duration-300 shadow-lg hover:shadow-xl`}
                  >
                    <Award className="w-4 h-4 mr-2" />
                    View Certificate
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => setShowTestimonial(showTestimonial === index ? null : index)}
                    className="border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white transition-all duration-300"
                  >
                    <Users className="w-4 h-4 mr-2" />
                    Testimonial
                  </Button>
                </div>

                {/* Testimonial Popup */}
                <AnimatePresence>
                  {showTestimonial === index && (
                    <motion.div
                      initial={{ opacity: 0, y: 20, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 20, scale: 0.9 }}
                      className="absolute top-full left-0 right-0 mt-4 p-6 bg-gray-800/90 backdrop-blur-xl rounded-2xl border border-gray-700/50 shadow-2xl z-20"
                    >
                      <div className="flex items-start gap-4">
                        <img
                          src={exp.testimonial.avatar || "/placeholder.svg"}
                          alt={exp.testimonial.author}
                          className="w-12 h-12 rounded-full border-2 border-blue-400/50"
                        />
                        <div className="flex-1">
                          <p className="text-gray-300 italic mb-3">"{exp.testimonial.text}"</p>
                          <div>
                            <p className="text-white font-semibold">{exp.testimonial.author}</p>
                            <p className="text-blue-400 text-sm">{exp.testimonial.position}</p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certificate Modal */}
        <AnimatePresence>
          {selectedCertificate && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedCertificate(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0, rotateY: -30 }}
                animate={{ scale: 1, opacity: 1, rotateY: 0 }}
                exit={{ scale: 0.8, opacity: 0, rotateY: 30 }}
                className="bg-gray-800/95 backdrop-blur-xl rounded-3xl max-w-6xl w-full max-h-[90vh] overflow-y-auto border border-gray-700/50 shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Certificate Header */}
                <div className="relative p-8 border-b border-gray-700/50">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-6">
                      <div
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${selectedCertificate.color} flex items-center justify-center shadow-lg`}
                      >
                        <Award className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-white mb-2">{selectedCertificate.certificate.title}</h3>
                        <p className="text-xl text-blue-400 font-semibold">{selectedCertificate.company}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => setSelectedCertificate(null)}
                      className="w-12 h-12 bg-gray-700/50 hover:bg-gray-700 rounded-full flex items-center justify-center text-white transition-colors"
                    >
                      <X size={24} />
                    </button>
                  </div>
                </div>

                {/* Certificate Content */}
                <div className="p-8">
                  {/* Certificate Image */}
                  <div className="relative mb-8">
                    <motion.img
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      src={selectedCertificate.certificate.image || "/placeholder.svg"}
                      alt={selectedCertificate.certificate.title}
                      className="w-full h-80 object-cover rounded-2xl border border-gray-700/50 shadow-lg"
                    />
                    <div className="absolute top-4 right-4 flex gap-2">
                      <span className="px-4 py-2 bg-green-600/90 text-white rounded-full text-sm font-semibold flex items-center gap-2 backdrop-blur-sm">
                        <CheckCircle size={16} />
                        Verified
                      </span>
                      <span className="px-4 py-2 bg-yellow-600/90 text-white rounded-full text-sm font-semibold backdrop-blur-sm">
                        Grade: {selectedCertificate.certificate.grade}
                      </span>
                    </div>
                  </div>

                  {/* Certificate Details Grid */}
                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    {/* Left Column */}
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                          <FileText className="w-5 h-5 text-blue-400" />
                          Certificate Information
                        </h4>
                        <div className="space-y-4 bg-gray-800/30 rounded-xl p-6 border border-gray-700/30">
                          <div className="flex justify-between items-center">
                            <span className="text-gray-400">Credential ID:</span>
                            <span className="text-white font-mono bg-gray-700/50 px-3 py-1 rounded-lg">
                              {selectedCertificate.certificate.credentialId}
                            </span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-gray-400">Issue Date:</span>
                            <span className="text-white">{selectedCertificate.certificate.issueDate}</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-gray-400">Duration:</span>
                            <span className="text-white">{selectedCertificate.certificate.hours}</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-gray-400">Mentor:</span>
                            <span className="text-white">{selectedCertificate.certificate.mentor}</span>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="text-xl font-semibold text-white mb-4">Description</h4>
                        <p className="text-gray-300 leading-relaxed bg-gray-800/30 rounded-xl p-6 border border-gray-700/30">
                          {selectedCertificate.certificate.description}
                        </p>
                      </div>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                          <Code className="w-5 h-5 text-green-400" />
                          Skills Acquired
                        </h4>
                        <div className="flex flex-wrap gap-3">
                          {selectedCertificate.certificate.skills.map((skill, idx) => (
                            <motion.span
                              key={skill}
                              initial={{ opacity: 0, scale: 0 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: idx * 0.1 }}
                              className="px-4 py-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 text-blue-300 border border-blue-500/30 rounded-full text-sm font-medium"
                            >
                              {skill}
                            </motion.span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                          <Target className="w-5 h-5 text-purple-400" />
                          Projects Completed
                        </h4>
                        <div className="space-y-3">
                          {selectedCertificate.certificate.projects.map((project, idx) => (
                            <motion.div
                              key={idx}
                              initial={{ opacity: 0, x: 20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: idx * 0.1 }}
                              className="flex items-start gap-3 text-gray-300 bg-gray-800/30 rounded-lg p-4 border border-gray-700/30"
                            >
                              <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0" />
                              <span>{project}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4 pt-6 border-t border-gray-700/50">
                  <Button
  className="bg-gradient-to-r from-purple-500 to-indigo-600 hover:opacity-90 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
  onClick={() => {
    const link = document.createElement("a");
   link.href = "/Prof Ram Meghe Institute of Te_Yash Nitin Dighade_Unnati.pdf"; // Path to the certificate
    link.download = "/Prof Ram Meghe Institute of Te_Yash Nitin Dighade_Unnati.pdf"; // Name of the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }}
>
  <Download size={20} className="mr-2" />
  Download Certificate

                    </Button>
                    <Button
                      variant="outline"
                      className="border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white transition-all duration-300"
                      onClick={() => window.open(selectedCertificate.certificate.verificationUrl, "_blank")}
                    >
                      <ExternalLink size={20} className="mr-2" />
                      Verify Online
                    </Button>
                    <Button
                      variant="outline"
                      className="border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white transition-all duration-300"
                      onClick={() => window.open(selectedCertificate.companyWebsite, "_blank")}
                    >
                      <Building size={20} className="mr-2" />
                      Visit Company
                    </Button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Experience Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { label: "Years Experience", value: "2+", color: "text-blue-400", icon: Calendar },
            { label: "Companies", value: "2", color: "text-green-400", icon: Building },
            { label: "Projects Delivered", value: "8+", color: "text-purple-400", icon: Target },
            { label: "Avg Rating", value: "4.8", color: "text-yellow-400", icon: Star },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-gray-800/40 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 text-center group"
            >
              <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.6 }} className="inline-block mb-4">
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
