import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Target, Users, Lightbulb, Heart } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 font-[var(--font-heading)] gradient-text">
                About Arisze
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Your ultimate leisure plan activity hub for student life in Kaunas
              </p>
            </div>

            {/* Mission Statement */}
            <Card className="mb-12 gradient-bg-card text-white border-0 shadow-xl">
              <CardContent className="p-8 text-center">
                <h2 className="text-3xl font-bold mb-4 font-[var(--font-heading)]">Leisure Plan Activity Hub</h2>
                <p className="text-lg leading-relaxed text-white/90">
                  Arisze is designed to be the central hub for students in Kaunas, Lithuania, helping them plan,
                  connect, and enjoy their university experience. We transform the way students discover leisure
                  activities, connect with peers, and make the most of their time outside the classroom.
                </p>
              </CardContent>
            </Card>

            {/* Goals and Features */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <Card className="magnify-hover gradient-bg-vibrant text-white border-0 shadow-xl">
                <CardHeader className="text-center">
                  <Target className="h-12 w-12 mx-auto mb-4" />
                  <CardTitle className="font-[var(--font-heading)]">Our Goal</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-white/90">
                    To create the ultimate leisure planning platform that connects students with activities, venues, and
                    each other.
                  </p>
                </CardContent>
              </Card>

              <Card className="magnify-hover gradient-bg-card text-white border-0 shadow-xl">
                <CardHeader className="text-center">
                  <Users className="h-12 w-12 mx-auto mb-4" />
                  <CardTitle className="font-[var(--font-heading)]">Community</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-white/90">
                    Building a vibrant community where students can discover new friendships and shared interests.
                  </p>
                </CardContent>
              </Card>

              <Card className="magnify-hover gradient-bg-vibrant text-white border-0 shadow-xl">
                <CardHeader className="text-center">
                  <Lightbulb className="h-12 w-12 mx-auto mb-4" />
                  <CardTitle className="font-[var(--font-heading)]">Innovation</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-white/90">
                    Using cutting-edge technology to personalize recommendations and streamline activity planning.
                  </p>
                </CardContent>
              </Card>

              <Card className="magnify-hover gradient-bg-card text-white border-0 shadow-xl">
                <CardHeader className="text-center">
                  <Heart className="h-12 w-12 mx-auto mb-4" />
                  <CardTitle className="font-[var(--font-heading)]">Experience</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-white/90">
                    Enhancing the university experience by making leisure planning effortless and enjoyable.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Key Features */}
            <Card className="mb-12">
              <CardHeader>
                <CardTitle className="text-2xl font-[var(--font-heading)] text-center">Platform Features</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-primary">For Students</h3>
                    <ul className="space-y-3 text-muted-foreground">
                      <li>• Discover cafes, restaurants, and activity venues</li>
                      <li>• Book tables and activities with integrated calendar</li>
                      <li>• Connect with universities in Kaunas</li>
                      <li>• Build your profile and earn achievement badges</li>
                      <li>• Get personalized activity recommendations</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-primary">Platform Benefits</h3>
                    <ul className="space-y-3 text-muted-foreground">
                      <li>• Streamlined leisure activity planning</li>
                      <li>• Real-time availability and booking system</li>
                      <li>• Community-driven reviews and ratings</li>
                      <li>• Integration with university systems</li>
                      <li>• Mobile-first responsive design</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Vision */}
            <Card className="gradient-bg text-white border-0 shadow-xl">
              <CardContent className="p-8 text-center">
                <h2 className="text-3xl font-bold mb-4 font-[var(--font-heading)]">Our Vision</h2>
                <p className="text-lg leading-relaxed text-white/90 max-w-4xl mx-auto">
                  We envision Arisze as the go-to platform for every student in Kaunas, where planning leisure
                  activities becomes as easy as checking your schedule. By connecting students with the best venues,
                  activities, and each other, we're building a community that enhances the university experience beyond
                  the classroom.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
