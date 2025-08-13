"use client"

import { useState, useEffect } from "react"
import Header from "./components/Header"
import Hero from "./components/Hero"
import About from "./components/About"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import Contact from "./components/Contact"
import LoadingScreen from "./components/LoadingScreen"
import ParticleBackground from "./components/ParticleBackground"

function App() {
  const [loading, setLoading] = useState(true)
  const [portfolioData, setPortfolioData] = useState(null)

  // Mock data that would come from MongoDB
  const mockData = {
    personal: {
      name: "Prakhar Pande",
      title: "Full Stack Web Developer",
      bio: "Passionate about creating intelligent solutions that bridge the gap between human creativity and artificial intelligence.",
      avatar: "/placeholder.svg?height=400&width=400",
      email: "pandeprakhar1801@gmail.com",
      location: "Nagpur, Maharashtra, India",
    },
    projects: [
      {
        id: 1,
        title: "Neural Network Visualizer",
        description:
          "Interactive web application for visualizing neural network architectures and training processes in real-time.",
        image: "/placeholder.svg?height=300&width=500",
        technologies: ["React", "D3.js", "TensorFlow.js", "WebGL"],
        github: "https://github.com",
        demo: "https://demo.com",
        featured: true,
      },
      {
        id: 2,
        title: "AI Chat Assistant",
        description: "Intelligent chatbot with natural language processing capabilities and context-aware responses.",
        image: "/placeholder.svg?height=300&width=500",
        technologies: ["Python", "OpenAI API", "FastAPI", "React"],
        github: "https://github.com",
        demo: "https://demo.com",
        featured: true,
      },
      {
        id: 3,
        title: "Smart Analytics Dashboard",
        description: "Real-time analytics platform with predictive insights and automated reporting features.",
        image: "/placeholder.svg?height=300&width=500",
        technologies: ["Vue.js", "Node.js", "MongoDB", "Chart.js"],
        github: "https://github.com",
        demo: "https://demo.com",
        featured: false,
      },
    ],
    skills : [
      { name: "HTML", level: 90, category: "Frontend" },
      { name: "CSS", level: 88, category: "Frontend" },
      { name: "JavaScript", level: 92, category: "Frontend" },
      { name: "ReactJS", level: 90, category: "Frontend" },
      { name: "NodeJS", level: 85, category: "Backend" },
      { name: "C/C++", level: 80, category: "Programming Language" },
      { name: "Java", level: 86, category: "Programming Language" },
      { name: "Python", level: 88, category: "Backend" },
      { name: "MySQL", level: 82, category: "Database" },
      { name: "MongoDB", level: 80, category: "Database" },
      { name: "ExpressJS", level: 84, category: "Backend" },
      { name: "Spring", level: 78, category: "Backend" },
      { name: "SpringBoot", level: 80, category: "Backend" },
      { name: "REST API", level: 87, category: "Backend" },
      { name: "OpenCV", level: 82, category: "AI/ML" },
      { name: "Auth0", level: 75, category: "Authentication" },
      { name: "Tailwind CSS", level: 85, category: "Frontend" },
      { name: "AWS S3", level: 80, category: "Cloud" },
      { name: "AWS EC2", level: 82, category: "Cloud" },
      { name: "AWS Lambda", level: 78, category: "Cloud" },
      { name: "AWS VPC", level: 76, category: "Cloud" },
      { name: "Vercel", level: 88, category: "Deployment" },
      { name: "Docker", level: 84, category: "DevOps" },
      { name: "Jenkins", level: 78, category: "DevOps" }
    ]
  }

  useEffect(() => {
    // Simulate API call to MongoDB backend
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 2000))
      setPortfolioData(mockData)
      setLoading(false)
    }

    fetchData()
  }, [])

  if (loading) {
    return <LoadingScreen />
  }

  return (
    <div className="relative min-w-screen min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-x-hidden">
      <ParticleBackground />
      <Header />
      <main>
        <Hero data={portfolioData.personal} />
        <About data={portfolioData.personal} />
        <Projects data={portfolioData.projects} />
        <Skills data={portfolioData.skills} />
        <Contact data={portfolioData.personal} />
      </main>
    </div>
  )
}

export default App
