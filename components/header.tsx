"use client"

import Link from "next/link"
import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const { theme, setTheme } = useTheme()

  return (
    <header className="sticky top-0 z-50 w-full wave-header text-white">
      <div className="container flex h-16 items-center justify-between px-4 relative z-10">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <h1 className="text-2xl font-bold text-white logo-animation font-[var(--font-heading)]">Arisze</h1>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link
            href="/"
            className="text-sm font-medium transition-colors hover:text-accent magnify-hover text-white/90 hover:text-white"
          >
            Home
          </Link>
          <Link
            href="/events"
            className="text-sm font-medium transition-colors hover:text-accent magnify-hover text-white/90 hover:text-white"
          >
            Events & Activities
          </Link>
          <Link
            href="/dashboard"
            className="text-sm font-medium transition-colors hover:text-accent magnify-hover text-white/90 hover:text-white"
          >
            Dashboard
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium transition-colors hover:text-accent magnify-hover text-white/90 hover:text-white"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium transition-colors hover:text-accent magnify-hover text-white/90 hover:text-white"
          >
            Contact
          </Link>
        </nav>

        {/* Auth Buttons and Theme Toggle */}
        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="magnify-hover text-white hover:bg-white/20"
          >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>

          <Link href="/login">
            <Button
              variant="outline"
              className="bubble-button magnify-hover bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary"
            >
              Login
            </Button>
          </Link>

          <Link href="/signup">
            <Button className="bubble-button gradient-bg-vibrant magnify-hover text-white">Sign Up</Button>
          </Link>
        </div>
      </div>
    </header>
  )
}
