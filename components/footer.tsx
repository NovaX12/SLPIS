import { Instagram, Linkedin } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="wave-footer bg-gradient-to-r from-[var(--gradient-dark)] to-[var(--gradient-light)] text-white mt-20">
      <div className="container mx-auto px-4 py-16 pt-32">
        <div className="flex flex-col items-center justify-center space-y-6">
          <div className="flex items-center space-x-6">
            <Link
              href="https://www.instagram.com/"
              target="_blank"
              className="magnify-hover transition-transform hover:text-accent"
            >
              <Instagram className="h-6 w-6" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link
              href="https://www.linkedin.com/feed/"
              target="_blank"
              className="magnify-hover transition-transform hover:text-accent"
            >
              <Linkedin className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>

          <div className="text-center">
            <p className="text-sm opacity-80">© 2025 Arisze. Connecting students in Kaunas, Lithuania.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
