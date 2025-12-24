import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Projects } from "@/components/projects"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Prajwal Shetty | Full Stack Developer",
  description: "Prajwal Shetty - Full Stack Developer specializing in React, Next.js, Node.js, and TypeScript. View my portfolio and projects.",
  keywords: "Prajwal Shetty, Prajwal, Full Stack Developer, React, Next.js, TypeScript, Web Developer",
}

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Prajwal Shetty",
    jobTitle: "Full Stack Developer",
    description: "Full Stack Developer specializing in React, Next.js, Node.js, and TypeScript",
    url: "https://prajwallshetty.me",
    sameAs: [
      "https://github.com/prajwallshetty",
      "https://linkedin.com/in/prajwallshetty",
    ],
    knowsAbout: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "JavaScript",
      "Web Development",
      "Full Stack Development",
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen">
        <Hero />
        <About />
        <Projects />
      </main>
    </>
  )
}

