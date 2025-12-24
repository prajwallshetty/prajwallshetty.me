"use client"

import { Github, Linkedin } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto max-w-6xl px-4 py-12 md:px-8 lg:px-16">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-background/80">
            © {new Date().getFullYear()} Prajwal Shetty. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="https://github.com/prajwallshetty"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-opacity hover:opacity-70"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </Link>
            <Link
              href="https://linkedin.com/in/prajwallshetty"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-opacity hover:opacity-70"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

