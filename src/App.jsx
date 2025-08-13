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
      avatar: "https://res.cloudinary.com/daijotiaw/image/upload/v1755101293/ppimage_l6nteo.png",  // "src/components/ppimage.png",
      email: "pandeprakhar1801@gmail.com",
      location: "Nagpur, Maharashtra, India",
    },
    projects: [
      {
        id: 1,
        title: "FaceTrack : An automatic Attendance Marking System using Group Photos",
        description:
          "Web application for marking attendance using facial recognition and group photos.",
        image: "https://res.cloudinary.com/daijotiaw/image/upload/v1755101293/pr1_l5k2lh.png",
        technologies: ["React", "Node.js", "MongoDB", "OpenCV", "Express.js", "Tailwind CSS", "Auth0", "Python"],
        github: "https://github.com/Mini-Project-5th-sem-gr10",
        site: "https://rbu-attendace.vercel.app/",
        filter: "aiml"
      },
      {
        id: 2,
        title: "QueryNexus: NLP based Customer Query Handling System",
        description: "AI-powered system for handling customer queries using natural language processing.",
        image: "https://res.cloudinary.com/daijotiaw/image/upload/v1755101291/pr2_dfkjdi.png",
        technologies: ["React", "Node.js", "MongoDB", "OpenAI API", "Express.js", "Tailwind CSS", "Auth0"],
        github: "https://github.com/orgs/QueryNexus/dashboard",
        site: "https://querynexus.netlify.app",
        filter: "aiml"
      },
      {
        id: 3,
        title: "ShopNexus : An ECommerce Platform",
        description: "An ecommerce platform. Users can browse products, add them to cart, and make purchases.",
        image: "https://res.cloudinary.com/daijotiaw/image/upload/v1755101293/pr3_evc20h.png",
        technologies: ["Vue.js", "Node.js", "MongoDB", "Chart.js"],
        github: "https://github.com/prakharpande04/ShopNexus",
        site: "https://shopnexus04.vercel.app",
        filter: "web"
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
      { name: "REST API", level: 87, category: "Backend" },
      { name: "OpenCV", level: 82, category: "AI/ML" },
      { name: "Auth0", level: 75, category: "Authentication" },
      { name: "Tailwind CSS", level: 85, category: "Frontend" },
      { name: "AWS S3", level: 80, category: "Cloud" },
      { name: "AWS EC2", level: 82, category: "Cloud" },
      { name: "AWS Lambda", level: 78, category: "Cloud" },
      { name: "AWS VPC", level: 76, category: "Cloud" },
      { name: "Vercel", level: 88, category: "Deployment" }
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
