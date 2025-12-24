"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink } from "lucide-react"

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const projects = [
  {
    name: "Clientx",
    description:
      "A lightweight, modern CRM for freelancers and small agencies to manage their clients and projects.",
    tech: ["React", "TypeScript", "MongoDB", "Express", "Tailwind CSS"],
    github: "https://github.com/prajwallshetty/ClientX",
    live: "https://clientx.tech",
  },
  {
    name: "seminar hall booking platform",
    description:
      "A role-based seminar hall booking platform built with Next.js (App Router), shadcn/ui, Prisma, and NextAuth.js",
    tech: ["React", "Node.js", "MongoDB", "Next.js", "Express"],
    github: "https://github.com/prajwallshetty/Book-Seminar-Hall",
    live: "book-seminar-hall.vercel.app",
  },
  {
    name: "Lernova",
    description:
      "LMS SaaS app featuring user authentication, subscriptions.",
    tech: ["MERN", "TypeScript", "VAPI.api", "Chart.js", "Stripe"],
    github: "https://github.com/prajwallshetty/Lernova",
    live: "https://github.com/prajwallshetty/Lernova",
  },
]

export function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen bg-background px-4 py-20 md:px-8 lg:px-16"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            Projects
          </h2>
          <p className="mx-auto max-w-2xl text-base text-foreground/70 md:text-lg">
            A collection of projects I&apos;ve built using modern technologies and
            best practices.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <Card className="group h-full border-foreground/10 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl">{project.name}</CardTitle>
                  <CardDescription className="text-foreground/70">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4 flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="outline"
                        className="border-foreground/20 bg-background text-xs text-foreground/70"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="flex-1"
                  >
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <Github className="h-4 w-4" />
                      Code
                    </a>
                  </Button>
                  {project.live && (
                    <Button
                      variant="default"
                      size="sm"
                      asChild
                      className="flex-1"
                    >
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Live
                      </a>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

