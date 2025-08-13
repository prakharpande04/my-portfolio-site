"use client"

import { useState, useEffect } from "react"

const Hero = ({ data }) => {
  const [text, setText] = useState("")
  const [isTyping, setIsTyping] = useState(true)

  const fullText = data?.title || "AI Engineer & Full Stack Developer"

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setText(fullText.slice(0, index + 1))
        index++
      } else {
        setIsTyping(false)
        clearInterval(timer)
      }
    }, 100)

    return () => clearInterval(timer)
  }, [fullText])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-6">
      <div className="container mx-auto text-center z-10">
        <div className="mb-8">
          <div className="relative inline-block">
            <img
              src={data?.avatar || "/placeholder.svg"}
              alt={data?.name}
              className="w-32 h-32 rounded-full object-cover"
            />
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            {data?.name || "Alex Chen"}
          </span>
        </h1>

        <div className="text-xl md:text-2xl text-slate-300 mb-8 h-8">
          <span className="font-mono">
            {text}
            {isTyping && <span className="animate-pulse">|</span>}
          </span>
        </div>

        <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed">{data?.bio}</p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25">
            <span className="relative z-10">View My Work</span>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>

          <button
            className="px-8 py-4 border-2 border-purple-500/50 rounded-full font-semibold transition-all duration-300 hover:bg-purple-500/10 hover:border-purple-400"
            onClick={() => window.open("https://drive.google.com/file/d/1CvrgaLhIdF9C1n5i7nyNu4PQCP1Acw6C/view?usp=sharing", "_blank")}
            >
            Download Resume
          </button>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}

export default Hero
