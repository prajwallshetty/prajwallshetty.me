"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

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

const experience = [
  {
    year: "2023 - Present",
    role: "Full Stack Developer",
    company: "Freelance / Personal Projects",
    description:
      "Building scalable web applications using modern technologies. Specializing in React, Next.js, and Node.js ecosystems.",
  },
  {
    year: "2022 - 2023",
    role: "E-Commerce Developer",
    company: "Klientship",
    description:
      "Developed and maintained web applications, collaborated with cross-functional teams, and implemented best practices.",
  },
]

const technologies = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "HTML5", "CSS3"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "REST APIs", "GraphQL", "Python", "FastAPI"],
  },
  {
    category: "Database",
    items: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Prisma", "TypeORM"],
  },
  {
    category: "DevOps & Tools",
    items: ["Git", "Docker", "AWS", "Vercel", "CI/CD"],
  },
  {
    category: "Other",
    items: ["Framer Motion", "shadcn/ui", "WebSockets", "JWT", "OAuth"],
  },
]

export function About() {
  return (
    <section
      id="about"
      className="min-h-screen px-4 py-20 md:px-8 lg:px-16"
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
            About
          </h2>
          <p className="mx-auto max-w-2xl text-base text-foreground/70 md:text-lg">
            I&apos;m a passionate full-stack developer with expertise in building
            modern, scalable web applications. I love creating clean, efficient
            code and solving complex problems.
          </p>
        </motion.div>

        <div className="mb-16 grid gap-8 md:grid-cols-2">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <Card className="h-full border-foreground/10">
              <CardHeader>
                <CardTitle>Experience</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {experience.map((exp, index) => (
                    <div key={index} className="relative pl-6">
                      <div className="absolute left-0 top-2 h-2 w-2 rounded-full bg-foreground"></div>
                      {index !== experience.length - 1 && (
                        <div className="absolute left-[3px] top-2 h-full w-[1px] bg-foreground/20"></div>
                      )}
                      <div className="pb-6 last:pb-0">
                        <p className="mb-1 text-sm font-medium text-foreground/60">
                          {exp.year}
                        </p>
                        <h3 className="mb-1 text-lg font-semibold">
                          {exp.role}
                        </h3>
                        <p className="mb-2 text-sm text-foreground/60">
                          {exp.company}
                        </p>
                        <p className="text-sm text-foreground/70">
                          {exp.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <Card className="h-full border-foreground/10">
              <CardHeader>
                <CardTitle>Technologies & Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {technologies.map((category, categoryIndex) => (
                    <div key={categoryIndex} className="space-y-3">
                      <h4 className="text-sm font-semibold text-foreground/90 uppercase tracking-wider">
                        {category.category}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {category.items.map((tech, techIndex) => (
                          <motion.div
                            key={techIndex}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{
                              delay: categoryIndex * 0.1 + techIndex * 0.05,
                              duration: 0.3,
                            }}
                            whileHover={{ scale: 1.05 }}
                          >
                            <Badge
                              variant="outline"
                              className="border-foreground/20 bg-background px-3 py-1 text-xs font-medium text-foreground/80 transition-all hover:border-foreground/40 hover:bg-foreground/5"
                            >
                              {tech}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

