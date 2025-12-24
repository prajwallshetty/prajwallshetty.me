"use client"

import { useState, useEffect } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Github } from "lucide-react"
import Image from "next/image"

const name = "Prajwal Shetty"
const letters = name.split("")

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.03,
      delayChildren: 0.3,
    },
  },
}

const letterVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.8,
    filter: "blur(8px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
}

// Add a subtle hover animation for the name
const nameHoverVariants = {
  rest: {
    scale: 1,
    transition: {
      duration: 0.3,
    },
  },
  hover: {
    scale: 1.02,
    transition: {
      duration: 0.3,
    },
  },
}

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
      delay: 0.8,
    },
  },
}

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
      delay: 0.4,
    },
  },
}

export function Hero() {
  const [imageError, setImageError] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects")
    projectsSection?.scrollIntoView({ behavior: "smooth" })
  }

  // Grid animation values
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 50, damping: 20 })
  const springY = useSpring(y, { stiffness: 50, damping: 20 })

  useEffect(() => {
    const interval = setInterval(() => {
      x.set(Math.sin(Date.now() / 2000) * 20)
      y.set(Math.cos(Date.now() / 2000) * 20)
    }, 16)
    return () => clearInterval(interval)
  }, [x, y])

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 py-20">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          style={{
            x: springX,
            y: springY,
          }}
          className="absolute inset-0"
        >
          <div
            className="h-full w-full"
            style={{
              backgroundImage: `
                linear-gradient(rgba(0, 0, 0, 0.08) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0, 0, 0, 0.08) 1px, transparent 1px)
              `,
              backgroundSize: "50px 50px",
            }}
          />
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex w-full flex-col items-center justify-center">
        <motion.div
          variants={scaleIn}
          initial="hidden"
          animate="visible"
          className="mb-8 flex justify-center"
        >
          <div className="relative h-32 w-32 overflow-hidden rounded-full border-2 border-foreground/10 md:h-40 md:w-40">
            {!imageError && (
              <Image
                src="/profile.jpeg"
                alt="Prajwal Shetty"
                fill
                className="object-cover"
                priority
                onError={() => setImageError(true)}
              />
            )}
            <div className="absolute inset-0 flex items-center justify-center bg-foreground/5 text-4xl font-bold text-foreground/20">
              
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-6 w-full text-center"
        >
          <motion.h1
            variants={nameHoverVariants}
            initial="rest"
            whileHover={!isMobile ? "hover" : "rest"}
            className="mb-2 text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl"
          >
            {letters.map((letter, index) => (
              <motion.span
                key={index}
                variants={letterVariants}
                className={
                  letter === " "
                    ? "inline-block w-2"
                    : "inline-block"
                }
                style={{
                  display: "inline-block",
                  color: letter === " " ? "transparent" : "#0F172A",
                }}
                whileHover={
                  !isMobile
                    ? {
                        scale: 1.15,
                        y: -5,
                        transition: { duration: 0.2, type: "spring", stiffness: 400 },
                      }
                    : {}
                }
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </motion.h1>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="mb-8 w-full text-center"
        >
          <p className="mb-2 text-xl font-medium text-foreground/80 md:text-2xl">
            Full Stack Developer
          </p>
          <p className="text-sm text-foreground/60 md:text-base">
            Building modern web applications with React, Next.js, Node.js, and
            TypeScript
          </p>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="flex w-full flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Button
            onClick={scrollToProjects}
            size="lg"
            className="w-full min-w-[160px] sm:w-auto"
          >
            View Projects
          </Button>
          <Button
            variant="outline"
            size="lg"
            asChild
            className="w-full min-w-[160px] sm:w-auto"
          >
            <a
              href="https://github.com/prajwallshetty"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2"
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

