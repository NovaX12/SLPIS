import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send, MessageCircle, Clock } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-background via-accent/5 to-secondary/10">
      <Header />

      <main className="flex-1 py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {/* Hero Section */}
            <div className="text-center mb-16 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-secondary/20 blur-3xl -z-10 rounded-full"></div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 font-[var(--font-heading)] gradient-text">
                Get in Touch
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                We'd love to hear from you. Send us a message and we'll respond as soon as possible.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Contact Form - Takes up 2 columns */}
              <div className="lg:col-span-2">
                <Card className="shadow-2xl border-0 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm">
                  <CardHeader className="pb-8">
                    <CardTitle className="text-3xl font-[var(--font-heading)] flex items-center gap-3">
                      <MessageCircle className="h-8 w-8 text-primary" />
                      Send us a Message
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="firstName" className="text-sm font-semibold">
                            First Name
                          </Label>
                          <Input
                            id="firstName"
                            placeholder="John"
                            className="h-12 border-2 focus:border-primary transition-colors"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName" className="text-sm font-semibold">
                            Last Name
                          </Label>
                          <Input
                            id="lastName"
                            placeholder="Doe"
                            className="h-12 border-2 focus:border-primary transition-colors"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-sm font-semibold">
                          Email Address
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="john.doe@example.com"
                          className="h-12 border-2 focus:border-primary transition-colors"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="subject" className="text-sm font-semibold">
                          Subject
                        </Label>
                        <Input
                          id="subject"
                          placeholder="What's this about?"
                          className="h-12 border-2 focus:border-primary transition-colors"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message" className="text-sm font-semibold">
                          Message
                        </Label>
                        <Textarea
                          id="message"
                          placeholder="Tell us more about your inquiry..."
                          rows={6}
                          className="border-2 focus:border-primary transition-colors resize-none"
                        />
                      </div>

                      <Button className="w-full h-14 text-lg bubble-button gradient-bg-vibrant text-white shadow-lg hover:shadow-xl transition-all">
                        <Send className="mr-2 h-5 w-5" />
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Information Sidebar */}
              <div className="space-y-6">
                {/* Contact Details */}
                <Card className="gradient-bg-card text-white border-0 shadow-xl">
                  <CardHeader>
                    <CardTitle className="font-[var(--font-heading)] text-white">Contact Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-white/20 p-3 rounded-full">
                        <Mail className="h-6 w-6" />
                      </div>
                      <div>
                        <div className="font-semibold">Email</div>
                        <div className="text-white/90 text-sm">kathan.chauhan@knf.stud.vu.lt</div>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="bg-white/20 p-3 rounded-full">
                        <Phone className="h-6 w-6" />
                      </div>
                      <div>
                        <div className="font-semibold">Phone</div>
                        <div className="text-white/90 text-sm">+37063637626</div>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="bg-white/20 p-3 rounded-full">
                        <MapPin className="h-6 w-6" />
                      </div>
                      <div>
                        <div className="font-semibold">Location</div>
                        <div className="text-white/90 text-sm">Kaunas, Lithuania</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Response Time */}
                <Card className="gradient-bg-vibrant text-white border-0 shadow-xl">
                  <CardContent className="p-6 text-center">
                    <Clock className="h-12 w-12 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Quick Response</h3>
                    <p className="text-white/90 text-sm">We typically respond within 24 hours during business days.</p>
                  </CardContent>
                </Card>

                {/* University Image */}
                <Card className="overflow-hidden border-0 shadow-xl">
                  <CardContent className="p-0">
                    <div className="relative">
                      <img
                        src="https://www.knf.vu.lt/dokumentai/nuotraukos/panorama.jpg"
                        alt="University panorama"
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                      <div className="absolute bottom-4 left-4 text-white">
                        <h4 className="font-semibold">Vilnius University</h4>
                        <p className="text-sm text-white/90">Kaunas Faculty</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* FAQ Section */}
            <Card className="mt-16 border-0 shadow-xl bg-gradient-to-r from-card to-muted/20">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl font-[var(--font-heading)]">Frequently Asked Questions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-primary mb-2">How do I register for events?</h4>
                    <p className="text-muted-foreground text-sm mb-4">
                      Simply browse our Events & Activities page, click on any venue card, select your preferred
                      activities, and book your spot with our integrated calendar system.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Is Arisze free to use?</h4>
                    <p className="text-muted-foreground text-sm mb-4">
                      Yes! Arisze is completely free for all students. Our platform is designed to enhance your
                      university experience without any cost barriers.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Can I cancel my bookings?</h4>
                    <p className="text-muted-foreground text-sm mb-4">
                      Absolutely. You can manage all your bookings through your dashboard and cancel or modify them
                      according to each venue's cancellation policy.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">How do I earn badges?</h4>
                    <p className="text-muted-foreground text-sm mb-4">
                      Badges are earned through various activities like attending events, maintaining login streaks,
                      connecting with other students, and completing your profile.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
