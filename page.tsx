"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Page() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [isDark])

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <header className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <div className="w-12" /> {/* Spacer for centering */}
          <ul className="hidden md:flex items-center gap-8 text-lg">
            <li>
              <Link href="/" className="hover:text-primary transition-colors text-foreground">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-primary transition-colors text-foreground">
                About Me
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-primary transition-colors text-foreground">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/projects" className="hover:text-primary transition-colors text-foreground">
                My Projects
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-primary transition-colors text-foreground">
                Contact Me
              </Link>
            </li>
          </ul>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsDark(!isDark)}
            className="rounded-full text-foreground"
          >
            {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-12 md:py-24">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <div className="w-48 md:w-64 shrink-0">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-31%20at%2011.53.15-rjVIFKEfWKAcH4uSQK45TRj3vTR5NS.png"
              alt="Mascot character with laptop"
              width={400}
              height={400}
              priority
              className="w-full h-auto"
            />
          </div>

          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-6">
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl leading-tight">
              Helping Brands Be Seen Through Real, Beautiful Storytelling
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground">
              Communications and PR Specialist based in Nairobi, Kenya
            </p>

            <Button size="lg" className="rounded-full text-lg px-8">
              About Me
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}

