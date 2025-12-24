import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://prajwallshetty.me"),
  title: "Prajwal Shetty | Full Stack Developer",
  description: "Prajwal Shetty - Full Stack Developer specializing in React, Next.js, Node.js, and TypeScript. Building modern web applications with clean code and best practices.",
  keywords: [
    "Prajwal Shetty",
    "Prajwal",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "Web Developer",
    "Software Engineer",
    "Frontend Developer",
    "Backend Developer",
    "Node.js Developer",
    "Portfolio",
  ],
  authors: [{ name: "Prajwal Shetty" }],
  creator: "Prajwal Shetty",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://prajwallshetty.me",
    siteName: "Prajwal Shetty Portfolio",
    title: "Prajwal Shetty | Full Stack Developer",
    description: "Prajwal Shetty - Full Stack Developer specializing in React, Next.js, Node.js, and TypeScript. Building modern web applications.",
    images: [
      {
        url: "/profile.jpeg",
        width: 1200,
        height: 630,
        alt: "Prajwal Shetty",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Prajwal Shetty | Full Stack Developer",
    description: "Full Stack Developer specializing in React, Next.js, Node.js, and TypeScript.",
    creator: "@prajwallshetty",
    images: ["/profile.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://prajwallshetty.me",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}

