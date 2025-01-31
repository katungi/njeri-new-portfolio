"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [isDark])

  return (
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
        <Button variant="ghost" size="icon" onClick={() => setIsDark(!isDark)} className="rounded-full text-foreground">
          {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
        </Button>
      </nav>
    </header>
  )
}

