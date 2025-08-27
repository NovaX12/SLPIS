"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Camera, Award, Calendar, Users } from "lucide-react"

const availableBadges = [
  { id: "streak", name: "Day Streak Badge", icon: "🔥", description: "7-day login streak" },
  { id: "event", name: "Event Badge", icon: "🎉", description: "Attended 5 events" },
  { id: "social", name: "Social Butterfly", icon: "🦋", description: "Connected with 10 students" },
  { id: "academic", name: "Academic Star", icon: "⭐", description: "Completed university registration" },
  { id: "explorer", name: "City Explorer", icon: "🗺️", description: "Visited 3 different venues" },
  { id: "leader", name: "Community Leader", icon: "👑", description: "Organized an event" },
]

export default function DashboardPage() {
  const [userBadges, setUserBadges] = useState(["streak", "event"])
  const [profileImage, setProfileImage] = useState("/diverse-student-profiles.png")
  const [bio, setBio] = useState("Computer Science student at KTU. Love board games and coffee!")

  const addBadge = (badgeId: string) => {
    if (!userBadges.includes(badgeId)) {
      setUserBadges([...userBadges, badgeId])
    }
  }

  const removeBadge = (badgeId: string) => {
    setUserBadges(userBadges.filter((id) => id !== badgeId))
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 font-[var(--font-heading)]">My Dashboard</h1>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Profile Section */}
              <Card className="magnify-hover">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 font-[var(--font-heading)]">
                    <Users className="h-5 w-5" />
                    <span>Profile</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex flex-col items-center space-y-4">
                    <div className="relative">
                      <Avatar className="w-24 h-24">
                        <AvatarImage src={profileImage || "/placeholder.svg"} alt="Profile" />
                        <AvatarFallback>JD</AvatarFallback>
                      </Avatar>
                      <Button
                        size="icon"
                        variant="secondary"
                        className="absolute -bottom-2 -right-2 rounded-full bubble-button"
                      >
                        <Camera className="h-4 w-4" />
                      </Button>
                    </div>

                    <div className="w-full space-y-4">
                      <div>
                        <Label>Full Name</Label>
                        <Input defaultValue="John Doe" />
                      </div>

                      <div>
                        <Label>Email</Label>
                        <Input defaultValue="john.doe@ktu.lt" type="email" />
                      </div>

                      <div>
                        <Label>University</Label>
                        <Input defaultValue="Kaunas Tech University" />
                      </div>

                      <div>
                        <Label>Student ID</Label>
                        <Input defaultValue="KTU2024001" />
                      </div>

                      <div>
                        <Label>Bio</Label>
                        <Textarea
                          value={bio}
                          onChange={(e) => setBio(e.target.value)}
                          placeholder="Tell us about yourself..."
                          rows={3}
                        />
                      </div>

                      <Button className="w-full bubble-button gradient-bg">Update Profile</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Badges Section */}
              <Card className="magnify-hover">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 font-[var(--font-heading)]">
                    <Award className="h-5 w-5" />
                    <span>My Badges</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="font-semibold mb-3">Earned Badges</h3>
                    <div className="grid grid-cols-2 gap-3">
                      {userBadges.map((badgeId) => {
                        const badge = availableBadges.find((b) => b.id === badgeId)
                        return badge ? (
                          <div
                            key={badgeId}
                            className="p-3 border rounded-lg text-center space-y-2 bg-secondary/10 magnify-hover cursor-pointer"
                            onClick={() => removeBadge(badgeId)}
                          >
                            <div className="text-2xl">{badge.icon}</div>
                            <div className="text-sm font-medium">{badge.name}</div>
                            <div className="text-xs text-muted-foreground">{badge.description}</div>
                          </div>
                        ) : null
                      })}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-3">Badge Inventory</h3>
                    <div className="grid grid-cols-2 gap-3">
                      {availableBadges
                        .filter((badge) => !userBadges.includes(badge.id))
                        .map((badge) => (
                          <div
                            key={badge.id}
                            className="p-3 border rounded-lg text-center space-y-2 magnify-hover cursor-pointer hover:bg-muted/50"
                            onClick={() => addBadge(badge.id)}
                          >
                            <div className="text-2xl opacity-50">{badge.icon}</div>
                            <div className="text-sm font-medium">{badge.name}</div>
                            <div className="text-xs text-muted-foreground">{badge.description}</div>
                          </div>
                        ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Recent Activity */}
            <Card className="mt-8 magnify-hover">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 font-[var(--font-heading)]">
                  <Calendar className="h-5 w-5" />
                  <span>Recent Activity</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 p-3 bg-muted rounded-lg">
                    <div className="text-2xl">🎉</div>
                    <div>
                      <div className="font-medium">Booked table at Vero Cafe</div>
                      <div className="text-sm text-muted-foreground">2 hours ago</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 p-3 bg-muted rounded-lg">
                    <div className="text-2xl">🔥</div>
                    <div>
                      <div className="font-medium">Earned Day Streak Badge</div>
                      <div className="text-sm text-muted-foreground">1 day ago</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 p-3 bg-muted rounded-lg">
                    <div className="text-2xl">🎓</div>
                    <div>
                      <div className="font-medium">Registered with KTU</div>
                      <div className="text-sm text-muted-foreground">3 days ago</div>
                    </div>
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
