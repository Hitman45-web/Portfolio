"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ExternalLink, Github, X, Calendar, Tag } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    id: 1,
    title: "SensAI- AI powered Career Coach",
    description:
      "Sensai is a full-stack AI-powered platform that helps job seekers build resumes, generate cover letters, prep for interviews, access industry insights, and take quizzes – all in one place.",
    longDescription:
      "Sensai is a full-stack AI-powered platform that helps job seekers build resumes, generate cover letters, prep for interviews, access industry insights, and take quizzes – all in one place.",
    image: "/sensai.png?height=400&width=600",
    tech: ["React", "Next.js","TailwindCSS", "Clerk", "PostgreSQL", "Express","API"],
    category: "Full Stack",
    github: "https://github.com/Hitman45-web/SensAi-Ai-powered-Career-Coach",
    live: "https://sens-ai-ai-powered-career-coach-4b6s82zxa.vercel.app/",
    date: "2025",
    features: [
      "📝 AI Resume & Cover Letter Generator",
      "🎯 AI-Powered Interview Prep & Quizzes",
      "📊 Real-Time Industry Insights",
      "🔐 Authentication via Clerk",
      "⚡ Background Jobs with Inngest",
    ],
  },
  {
    id: 2,
    title: "Knowledge Representation and Insights Generation from Structured Datasets",
    description: "A project focused on transforming structured datasets into meaningful insights using data preprocessing, visualization, machine learning, and natural language generation techniques. It enables efficient knowledge representation for informed decision-making..",
    longDescription:
      "The Knowledge Representation and Insights Generation from Structured Datasets project aims to extract valuable insights from structured data by leveraging a pipeline of advanced data science methodologies. The project involves steps such as data cleaning, feature engineering, exploratory data analysis, and the application of machine learning models like clustering (e.g., K-Means, DBSCAN) and regression/classification techniques. Visualization tools like Seaborn and Matplotlib are used to present trends and patterns, while natural language generation methods help convert analytical results into easy-to-understand summaries. This comprehensive approach enables stakeholders to make data-driven decisions by transforming raw data into actionable knowledge, demonstrating the importance of structured datasets in real-world applications such as healthcare, finance, and sports analytics.",
    image: "/know.jpg?height=400&width=600",
    tech: ["Python", "Pandas", "K-Means", "Matplotlib", "Linear Regression", "Scikit-learn","Apchae Spark", "NLTK","Scikit-learn","PCA"],
    category: "AI/ML",
    github: "https://github.com/Hitman45-web/Knowledge-Representation-and-Insights-Generation-from-Structured-Dataset",
    live: "https://github.com/Hitman45-web/Knowledge-Representation-and-Insights-Generation-from-Structured-Dataset",
    date: "2024",
    features: [
      "Clean and transform structured data for analysis",
      "Visualize trends, correlations, and distributions",
      "Use ML models like clustering and PCA for meaningful structure",
      "Generate human-readable insights from data patterns",
      "Apply regression and classification to forecast outcomes",
      "Use plots and dashboards to present key findings",
       "Create summary reports or natural language output from results"
    ],
  },
  {
    id: 3,
    title: "Weather Prediction ML Model",
    description:
      "Machine learning model for accurate weather prediction using historical data and multiple algorithms.",
    longDescription:
      "An advanced weather prediction system that combines multiple machine learning algorithms to provide accurate forecasts. The model analyzes historical weather data, atmospheric patterns, and geographical factors to predict weather conditions with high accuracy.",
    image: "/placeholder.svg?height=400&width=600",
    tech: ["Python", "TensorFlow", "Pandas", "Scikit-learn", "Flask"],
    category: "AI/ML",
    github: "#",
    live: "#",
    date: "2023",
    features: [
      "Multi-algorithm ensemble model",
      "Historical data analysis",
      "Real-time weather API integration",
      "Interactive visualization dashboard",
      "Location-based predictions",
    ],
  },
  {
    id: 4,
    title: "News-Mag Real Time News Platform",
    description: "News-Mag is a dynamic React-based online news platform that delivers the latest updates across multiple genres. It offers users real-time access to news articles from categories such as technology, sports, entertainment, business, and health. Designed for a smooth user experience, News-Mag provides fast performance with light/dark mode and a responsive layout for all devices.",
    longDescription:
      "News-Mag is a dynamic React-based online news platform that delivers the latest updates across multiple genres. It offers users real-time access to news articles from categories such as technology, sports, entertainment, business, and health. Designed for a smooth user experience, News-Mag provides fast performance with light/dark mode and a responsive layout for all devices.",
    image: "/news-mag.jpg?height=400&width=600",
    tech: ["React", "JavaScript", "HTML", "CSS", "NewsAPI"],
    category: "Frontend",
    github: "https://github.com/Hitman45-web/News-Mag",
    live: "https://github.com/Hitman45-web/News-Mag",
    date: "2024",
    features: [
      "📌 Multiple News Categories: Browse articles from diverse genres.",
"🔍 Search Functionality: Find articles easily using keywords.",
"🌙 Light/Dark Mode: Toggle between themes for comfortable reading.",
"📱 Responsive Design: Works seamlessly on mobile, tablet, and desktop.",
"⏱️ Real-time Updates: Fetches live news using APIs dynamically.",
"⚡ Optimized Performance: Fast browsing with a smooth interface."
    ],
  },
  {
    id: 5,
    title: "Tic Tac Toe Multiplayer Game + AI",
    description: "A real-time multiplayer Tic-Tac-Toe game built with React and Socket.IO Client, supporting both 2-player online mode and single-player mode vs AI.",
    longDescription:
      "A real-time multiplayer Tic-Tac-Toe game built with React and Socket.IO Client, supporting both 2-player online mode and single-player mode vs AI.",
    image: "/tictac.jpg?height=400&width=600",
    tech: ["React", "JavaScript", "AI", "Node.js","Socket.Io"],
    category: "Frontend",
    github: "https://github.com/Hitman45-web/Tic-Tac-Toe-Multiplayer-Game",
    live: "https://github.com/Hitman45-web/Tic-Tac-Toe-Multiplayer-Game",
    date: "2024",
    features: [
   "🔁 Real-time multiplayer with Socket.IO",
"🧠 Single-player mode with basic AI logic",
"👫 Room-based play with friends",
"🎨 Interactive and responsive UI",
"🔄 Game reset and win/draw detection"
    ],
  },
  {
    id: 6,
    title: "Blockchain Voting System",
    description: "Secure and transparent voting system built on blockchain technology with smart contracts.",
    longDescription:
      "A revolutionary voting system that leverages blockchain technology to ensure transparency, security, and immutability in the electoral process. The system uses smart contracts to automate vote counting and provides real-time results while maintaining voter privacy.",
    image: "/placeholder.svg?height=400&width=600",
    tech: ["Solidity", "Web3.js", "React", "Ethereum", "IPFS"],
    category: "Blockchain",
    github: "#",
    live: "#",
    date: "2024",
    features: [
      "Immutable vote records",
      "Smart contract automation",
      "Real-time result tracking",
      "Voter privacy protection",
      "Transparent audit trail",
    ],
  },
]

const categories = ["All", "Full Stack", "AI/ML", "Frontend", "Mobile", "Blockchain"]

export default function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null)

  const filteredProjects =
    selectedCategory === "All" ? projects : projects.filter((project) => project.category === selectedCategory)

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A showcase of my recent work and technical expertise
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                  : "bg-gray-800 text-gray-400 hover:text-white border border-gray-700"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                exit={{ opacity: 0, scale: 0.8, rotateY: 30 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{
                  y: -10,
                  rotateX: 5,
                  rotateY: 5,
                  scale: 1.02,
                  transition: { duration: 0.3 },
                }}
                style={{ transformStyle: "preserve-3d" }}
                className="group bg-gray-800/50 rounded-2xl overflow-hidden border border-gray-700 hover:border-blue-500/50 transition-all duration-300 cursor-pointer hover:shadow-2xl hover:shadow-blue-500/20"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <motion.div
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-blue-600/80 text-white text-xs rounded-full backdrop-blur-sm">
                      {project.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 text-gray-400 text-sm mb-2">
                    <Calendar size={14} />
                    {project.date}
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 mb-4 line-clamp-2">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.slice(0, 3).map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded-md">
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded-md">
                        +{project.tech.length - 3}
                      </span>
                    )}
                  </div>

                  <div className="flex gap-3">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 border-gray-600 text-gray-300 hover:bg-gray-700"
                      onClick={(e) => {
                        e.stopPropagation()
                        window.open(project.github, "_blank")
                      }}
                    >
                      <Github size={16} className="mr-2" />
                      Code
                    </Button>
                    <Button
                      size="sm"
                      className="flex-1 bg-blue-600 hover:bg-blue-700"
                      onClick={(e) => {
                        e.stopPropagation()
                        window.open(project.live, "_blank")
                      }}
                    >
                      <ExternalLink size={16} className="mr-2" />
                      Live
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="bg-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-gray-700"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative">
                  <img
                    src={selectedProject.image || "/placeholder.svg"}
                    alt={selectedProject.title}
                    className="w-full h-64 object-cover"
                  />
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 w-10 h-10 bg-gray-900/80 rounded-full flex items-center justify-center text-white hover:bg-gray-900 transition-colors"
                  >
                    <X size={20} />
                  </button>
                </div>

                <div className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <h3 className="text-3xl font-bold text-white">{selectedProject.title}</h3>
                    <span className="px-3 py-1 bg-blue-600 text-white text-sm rounded-full">
                      {selectedProject.category}
                    </span>
                  </div>

                  <p className="text-gray-300 mb-6 leading-relaxed">{selectedProject.longDescription}</p>

                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                        <Tag size={20} />
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.tech.map((tech) => (
                          <span key={tech} className="px-3 py-1 bg-gray-700 text-gray-300 rounded-md">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-xl font-semibold text-white mb-4">Key Features</h4>
                      <ul className="space-y-2">
                        {selectedProject.features.map((feature, index) => (
                          <li key={index} className="text-gray-300 flex items-start gap-2">
                            <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Button
                      className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                      onClick={() => window.open(selectedProject.live, "_blank")}
                    >
                      <ExternalLink size={20} className="mr-2" />
                      View Live Project
                    </Button>
                    <Button
                      variant="outline"
                      className="border-gray-600 text-gray-300 hover:bg-gray-700"
                      onClick={() => window.open(selectedProject.github, "_blank")}
                    >
                      <Github size={20} className="mr-2" />
                      View Source Code
                    </Button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
