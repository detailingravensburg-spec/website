"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Michael Schmidt",
    location: "Ravensburg",
    vehicle: "BMW M5",
    rating: 5,
    text: "Absolut unglaubliche Arbeit! Mein BMW sieht besser aus als beim Kauf. Die Keramikversiegelung ist fantastisch - Wasser perlt einfach ab. Sehr empfehlenswert!",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    name: "Sarah Weber",
    location: "Friedrichshafen",
    vehicle: "Mercedes C-Klasse",
    rating: 5,
    text: "Der Kratzerentfernungsservice war phänomenal. Ich dachte, die tiefen Kratzer an meinem Auto wären permanent, aber sie haben sie komplett verschwinden lassen.",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    name: "Thomas Müller",
    location: "Konstanz",
    vehicle: "Audi RS6",
    rating: 5,
    text: "Bester Aufbereitungsservice in der Region! Die Liebe zum Detail ist unübertroffen. Mein Audi hat noch nie so gut ausgesehen. Professionell und zuverlässig.",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    name: "Lisa Hoffmann",
    location: "Langenargen",
    vehicle: "Porsche 911",
    rating: 5,
    text: "Hervorragender Keramikversiegelungsservice! Der hydrophobe Effekt ist unglaublich und der Glanz ist fantastisch. Jeden Euro wert.",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    name: "Andreas Klein",
    location: "Tettnang",
    vehicle: "Tesla Model S",
    rating: 5,
    text: "Außergewöhnliche Lackkorrektorarbeit. Sie haben jahrelange Wirbelspuren und kleine Kratzer entfernt. Das Finish ist makellos.",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    name: "Julia Richter",
    location: "Wangen",
    vehicle: "Range Rover",
    rating: 5,
    text: "Komplettaufbereitungsservice übertraf alle Erwartungen. Innen- und Außenbereich sehen brandneu aus. Professionell, pünktlich und die Ergebnisse sind einfach atemberaubend.",
    image: "/placeholder.svg?height=80&width=80",
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Was unsere Kunden sagen</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Vertrauen Sie nicht nur unserem Wort - hören Sie von zufriedenen Kunden aus der Region
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.name}
              className="group hover:shadow-xl transition-all duration-300 relative overflow-hidden"
            >
              <CardContent className="p-6">
                <Quote className="h-8 w-8 text-primary/20 mb-4" />

                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <p className="text-muted-foreground mb-6 text-pretty">"{testimonial.text}"</p>

                <div className="flex items-center space-x-4">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.vehicle} • {testimonial.location}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-primary/5 rounded-lg p-8 max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                <div className="text-sm text-muted-foreground">Zufriedene Kunden</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">5.0</div>
                <div className="text-sm text-muted-foreground">Durchschnittsbewertung</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">98%</div>
                <div className="text-sm text-muted-foreground">Wiederkehrrate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">5+</div>
                <div className="text-sm text-muted-foreground">Jahre Erfahrung</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
