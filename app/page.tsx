import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden gradient-bg text-white">
          <div className="container mx-auto px-4 py-24 md:py-32">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 font-[var(--font-heading)] logo-animation">
                Welcome to Arisze
              </h1>
              <p className="text-lg md:text-xl mb-8 opacity-90 leading-relaxed">
                Arisze is a web platform designed to be the central hub for students, helping them plan, connect, and
                enjoy their university experience. Explore events, connect with fellow students, get personalized
                recommendations, and discover new opportunities tailored just for you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/events">
                  <Button size="lg" variant="secondary" className="bubble-button magnify-hover">
                    Explore Events
                  </Button>
                </Link>
                <Link href="/dashboard">
                  <Button
                    size="lg"
                    variant="outline"
                    className="bubble-button magnify-hover border-white text-white hover:bg-white hover:text-primary bg-transparent"
                  >
                    My Dashboard
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-[var(--font-heading)]">
                Everything You Need for Student Life
              </h2>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center p-6 rounded-lg bg-card magnify-hover">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full gradient-bg flex items-center justify-center">
                    <span className="text-2xl">🎓</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 font-[var(--font-heading)]">University Hub</h3>
                  <p className="text-muted-foreground">
                    Connect with universities in Kaunas and manage your academic journey.
                  </p>
                </div>

                <div className="text-center p-6 rounded-lg bg-card magnify-hover">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full gradient-bg flex items-center justify-center">
                    <span className="text-2xl">🎉</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 font-[var(--font-heading)]">Events & Activities</h3>
                  <p className="text-muted-foreground">
                    Discover cafes, restaurants, and activities perfect for student gatherings.
                  </p>
                </div>

                <div className="text-center p-6 rounded-lg bg-card magnify-hover">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full gradient-bg flex items-center justify-center">
                    <span className="text-2xl">👥</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 font-[var(--font-heading)]">Community</h3>
                  <p className="text-muted-foreground">
                    Build your profile, earn badges, and connect with fellow students.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
