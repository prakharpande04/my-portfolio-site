"use client"

import { useState, useEffect, useRef } from "react"

const Skills = ({ data }) => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const groupedSkills =
    data?.reduce((acc, skill) => {
      if (!acc[skill.category]) {
        acc[skill.category] = []
      }
      acc[skill.category].push(skill)
      return acc
    }, {}) || {}

  const SkillBar = ({ skill, index }) => {
    const [animatedLevel, setAnimatedLevel] = useState(0)

    useEffect(() => {
      if (isVisible) {
        const timer = setTimeout(() => {
          setAnimatedLevel(skill.level)
        }, index * 200)
        return () => clearTimeout(timer)
      }
    }, [isVisible, skill.level, index])

    return (
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-white font-medium">{skill.name}</span>
          <span className="text-cyan-400 font-bold">{skill.level}%</span>
        </div>
        <div className="w-full bg-slate-700 rounded-full h-3 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full transition-all duration-1000 ease-out relative"
            style={{ width: `${animatedLevel}%` }}
          >
            <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <section id="skills" className="py-20 px-6 relative" ref={sectionRef}>
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(groupedSkills).map(([category, skills], categoryIndex) => (
            <div
              key={category}
              className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-center mb-8">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  {category}
                </span>
              </h3>

              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <SkillBar key={skill.name} skill={skill} index={categoryIndex * skills.length + index} />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20">
            <h3 className="text-2xl font-bold text-cyan-400 mb-4">Always Learning</h3>
            <p className="text-slate-300 max-w-2xl mx-auto">
              Technology evolves rapidly, and so do I. I'm constantly exploring new frameworks, tools, and methodologies
              to stay at the forefront of AI and web development.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
