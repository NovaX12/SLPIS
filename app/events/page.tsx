"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { CalendarIcon, Phone, Mail, Globe, X } from "lucide-react"
import { format } from "date-fns"

const universities = [
  {
    name: "Vilnius University",
    image: "https://www.knf.vu.lt/modules/mod_news_pro_gk5/cache/default/defaultnsp-205.png",
    phone: "+370-5-2687001",
    email: "info@vu.lt",
    website: "vu.lt",
  },
  {
    name: "Kaunas Tech University",
    image: "https://ktu.edu/wp-content/uploads/2017/06/ktu_1.png",
    phone: "+370 (614) 20055",
    email: "klausk@ktu.lt",
    website: "ktu.lt",
  },
  {
    name: "VMU (Vytautas Magnus University)",
    image: "https://www.vdu.lt/wp-content/uploads/2023/09/VDU_Jono-Petronio-nuotr.jpg",
    phone: "+370 37 751 175",
    email: "studentas@vdu.lt",
    website: "vdu.lt",
  },
]

const events = [
  {
    name: "CAFFEINE LT",
    image: "https://lh3.googleusercontent.com/p/AF1QipOxqxBEYc9XUl3TzaGeHVrTWl40Nwy0xM37cJ6Y=s680-w680-h510-rw",
    phone: "+370 699 77541",
    email: "bendras@reitanconvenience.lt",
    website: "caffeine.lt",
    activities: ["Board & Card Games", "Trivia", "Study Groups", "Coffee Tasting"],
  },
  {
    name: "Vero Cafe",
    image:
      "https://lh3.googleusercontent.com/gps-cs-s/AC9h4npJs8E1vKciv15otVzZD05-FiyplJLfTm2c3Ra8A3KgrxDM8NAh8MezPsSNaW1PxT_IF4vEYx1f7ezTwk08wM-JjiEPggMGgXpJwZb_YILqIN-CzHSZBo6tDO6yoB3GHhmAGasf=s294-w294-h220-n-k-no",
    phone: "+370 618 55401",
    email: "info@verocafe.lt",
    website: "verocafe.lt",
    activities: ["Word Games", "Book Club", "Art Sessions", "Live Music"],
  },
  {
    name: "Caif cafe",
    image:
      "https://lh3.googleusercontent.com/gps-cs-s/AC9h4nq1jRXzOlWpWXl492ln18WWtwwuaZA0UZtLM-dTpnRqX1JIZ94msHMGXTl1MzFJtECsMDgspo-vTpwnNf42vLrihST9notX30LKYxJwN6-TzHIhm8GmQ78BZJ3dNTwMwCAQPefldw=s294-w294-h220-n-k-no",
    phone: "+370 699 02640",
    email: "info@caifcafe.lt",
    website: "caifcafe.lt",
    activities: ["Chess", "Poetry Reading", "Language Exchange", "Networking"],
  },
]

export default function EventsPage() {
  const [activeTab, setActiveTab] = useState<"universities" | "events">("universities")
  const [showModal, setShowModal] = useState<string | null>(null)
  const [selectedDate, setSelectedDate] = useState<Date>()
  const [selectedActivities, setSelectedActivities] = useState<string[]>([])

  const toggleActivity = (activity: string) => {
    setSelectedActivities((prev) =>
      prev.includes(activity) ? prev.filter((a) => a !== activity) : [...prev, activity],
    )
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 font-[var(--font-heading)]">
              Events & Activities
            </h1>

            <div className="flex justify-center mb-8">
              <div className="sliding-toggle relative w-80">
                <div
                  className="sliding-toggle-highlight"
                  style={{
                    left: activeTab === "universities" ? "0.25rem" : "50%",
                    width: activeTab === "universities" ? "calc(50% - 0.25rem)" : "calc(50% - 0.25rem)",
                  }}
                />
                <div className="relative z-10 flex">
                  <Button
                    variant="ghost"
                    onClick={() => setActiveTab("universities")}
                    className={`flex-1 bubble-button transition-colors ${
                      activeTab === "universities" ? "text-white" : "text-foreground"
                    }`}
                  >
                    Universities
                  </Button>
                  <Button
                    variant="ghost"
                    onClick={() => setActiveTab("events")}
                    className={`flex-1 bubble-button transition-colors ${
                      activeTab === "events" ? "text-white" : "text-foreground"
                    }`}
                  >
                    Events
                  </Button>
                </div>
              </div>
            </div>

            {/* Universities Section */}
            {activeTab === "universities" && (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {universities.map((university, index) => (
                  <Card key={index} className="magnify-hover gradient-bg-card text-white border-0 shadow-xl">
                    <CardHeader>
                      <div className="w-full h-48 mb-4 rounded-lg overflow-hidden">
                        <img
                          src={university.image || "/placeholder.svg"}
                          alt={university.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <CardTitle className="font-[var(--font-heading)] text-white">{university.name}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex items-center space-x-2 text-sm text-white/90">
                        <Phone className="h-4 w-4" />
                        <span>{university.phone}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-white/90">
                        <Mail className="h-4 w-4" />
                        <span>{university.email}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-white/90">
                        <Globe className="h-4 w-4" />
                        <a
                          href={`https://${university.website}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-accent transition-colors"
                        >
                          {university.website}
                        </a>
                      </div>

                      <div className="pt-4 space-y-3">
                        <h4 className="font-semibold text-white">Student Registration</h4>
                        <div className="space-y-2">
                          <Input
                            placeholder="Student ID"
                            className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
                          />
                          <Input
                            placeholder="Full Name"
                            className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
                          />
                          <Input
                            placeholder="Email"
                            type="email"
                            className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
                          />
                          <Button className="w-full bubble-button gradient-bg-vibrant text-white">
                            Submit Application
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}

            {/* Events Section */}
            {activeTab === "events" && (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {events.map((event, index) => (
                  <Card
                    key={index}
                    className="magnify-hover gradient-bg-card text-white border-0 shadow-xl cursor-pointer"
                    onClick={() => setShowModal(event.name)}
                  >
                    <CardHeader>
                      <div className="w-full h-48 mb-4 rounded-lg overflow-hidden">
                        <img
                          src={event.image || "/placeholder.svg"}
                          alt={event.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <CardTitle className="font-[var(--font-heading)] text-white">{event.name}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex items-center space-x-2 text-sm text-white/90">
                        <Phone className="h-4 w-4" />
                        <span>{event.phone}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-white/90">
                        <Mail className="h-4 w-4" />
                        <span>{event.email}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-white/90">
                        <Globe className="h-4 w-4" />
                        <a
                          href={`https://${event.website}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-accent transition-colors"
                        >
                          {event.website}
                        </a>
                      </div>

                      <div className="pt-4">
                        <h4 className="font-semibold mb-2 text-white">Activities</h4>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {event.activities.map((activity, actIndex) => (
                            <span
                              key={actIndex}
                              className="px-3 py-1 bg-white/20 text-white text-xs rounded-full border border-white/30"
                            >
                              {activity}
                            </span>
                          ))}
                        </div>
                        <p className="text-white/80 text-sm">Click to book and select activities</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>

        {showModal && (
          <div className="modal-overlay" onClick={() => setShowModal(null)}>
            <div className="modal-content w-full max-w-2xl p-6" onClick={(e) => e.stopPropagation()}>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold font-[var(--font-heading)]">Book {showModal}</h2>
                <Button variant="ghost" size="icon" onClick={() => setShowModal(null)}>
                  <X className="h-5 w-5" />
                </Button>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">Select Activities</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {events
                      .find((e) => e.name === showModal)
                      ?.activities.map((activity, index) => (
                        <button
                          key={index}
                          onClick={() => toggleActivity(activity)}
                          className={`p-3 rounded-lg border-2 transition-all ${
                            selectedActivities.includes(activity)
                              ? "border-primary bg-primary/10 text-primary"
                              : "border-border hover:border-primary/50"
                          }`}
                        >
                          {activity}
                        </button>
                      ))}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label>Select Date</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button variant="outline" className="w-full justify-start text-left font-normal bg-transparent">
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {selectedDate ? format(selectedDate, "PPP") : "Pick a date"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar mode="single" selected={selectedDate} onSelect={setSelectedDate} initialFocus />
                      </PopoverContent>
                    </Popover>
                  </div>

                  <div>
                    <Label>Time</Label>
                    <Input type="time" />
                  </div>
                </div>

                <div>
                  <Label>Group Size</Label>
                  <Input type="number" placeholder="Number of people" min="1" />
                </div>

                <Button
                  className="w-full bubble-button gradient-bg-vibrant text-white text-lg py-3"
                  disabled={selectedActivities.length === 0 || !selectedDate}
                >
                  Book Now - {selectedActivities.length} Activities Selected
                </Button>
              </div>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  )
}
