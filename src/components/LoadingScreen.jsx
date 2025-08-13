"use client"

import { useState, useEffect } from "react"

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0)
  const [loadingText, setLoadingText] = useState("Just a sec...")

  useEffect(() => {
    const messages = [
      "Just a sec...",
      "Warming up the magic ✨",
      "Gathering your creations",
      "Almost there..."
    ]

    let msgIndex = 0
    const msgTimer = setInterval(() => {
      msgIndex = (msgIndex + 1) % messages.length
      setLoadingText(messages[msgIndex])
    }, 1600)

    const progressTimer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressTimer)
          return 100
        }
        return prev + Math.floor(Math.random() * 3) + 1
      })
    }, 80)

    return () => {
      clearInterval(progressTimer)
      clearInterval(msgTimer)
    }
  }, [])

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-gradient-to-b from-amber-50 via-orange-100 to-rose-50 transition-opacity duration-700">
      <div className="bg-white/40 backdrop-blur-xl rounded-3xl shadow-lg p-10 w-[300px] flex flex-col items-center border border-white/30">
        
        {/* Animated Loader */}
        <div className="relative mb-6">
          <div className="w-20 h-20 rounded-full border-4 border-rose-400 animate-[spin_3s_linear_infinite]"></div>
          <div className="absolute inset-3 rounded-full border-4 border-orange-300 animate-pulse"></div>
        </div>

        {/* Loading text */}
        <h2 className="text-lg font-medium text-rose-700 mb-3 transition-all duration-500 ease-in-out">
          {loadingText}
        </h2>

        {/* Progress Bar */}
        <div className="w-full h-2 bg-white/50 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-rose-400 to-orange-300 transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        {/* Percentage */}
        <p className="mt-2 text-sm text-rose-600">{progress}% complete</p>
      </div>
    </div>
  )
}

export default LoadingScreen
