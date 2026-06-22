"use client"

import { useEffect, useRef } from "react"

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = document.documentElement.scrollHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Soft pastel orbs for light theme
    const orbs = [
      { x: 0, y: 0, radius: 500, color: "99, 102, 241", speed: 0.3, angle: 0, offsetY: 0 },       // indigo
      { x: 0, y: 0, radius: 450, color: "168, 85, 247", speed: 0.2, angle: Math.PI, offsetY: 200 }, // purple
      { x: 0, y: 0, radius: 400, color: "236, 72, 153", speed: 0.25, angle: Math.PI / 2, offsetY: 500 }, // pink
      { x: 0, y: 0, radius: 380, color: "59, 130, 246", speed: 0.35, angle: Math.PI * 1.5, offsetY: 800 }, // blue
      { x: 0, y: 0, radius: 420, color: "16, 185, 129", speed: 0.28, angle: Math.PI * 0.7, offsetY: 1100 }, // emerald
      { x: 0, y: 0, radius: 460, color: "245, 158, 11", speed: 0.22, angle: Math.PI * 1.2, offsetY: 1400 }, // amber
    ]

    let animationId: number
    let time = 0

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      time += 0.005

      orbs.forEach((orb) => {
        orb.angle += orb.speed * 0.01
        orb.x = canvas.width / 2 + Math.cos(orb.angle + time) * (canvas.width * 0.4)
        orb.y = orb.offsetY + canvas.height * 0.15 + Math.sin(orb.angle + time) * (canvas.height * 0.1)

        const gradient = ctx.createRadialGradient(orb.x, orb.y, 0, orb.x, orb.y, orb.radius)
        gradient.addColorStop(0, `rgba(${orb.color}, 0.07)`)
        gradient.addColorStop(0.5, `rgba(${orb.color}, 0.035)`)
        gradient.addColorStop(1, `rgba(${orb.color}, 0)`)

        ctx.fillStyle = gradient
        ctx.fillRect(orb.x - orb.radius, orb.y - orb.radius, orb.radius * 2, orb.radius * 2)
      })

      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      if (animationId) cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" style={{ background: "transparent" }} />
  )
}
