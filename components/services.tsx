"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Sparkles, Shield, Droplets, Zap, ArrowRight } from "lucide-react"
import { BookingModal } from "./booking-modal"
import { useState } from "react"

const services = [
  {
    icon: Sparkles,
    title: "Professionelle Politur",
    description:
      "Lackaufbereitung für strahlenden Glanz. Entfernung von Kratzern, Wirbelspuren und Oxidation für perfekte Ergebnisse.",
    features: ["Lackkorrektor", "Kratzerentfernung", "Glanzverbesserung", "UV-Schutz"],
    price: "Ab €120",
    image: "/car-paint-being-polished-with-professional-equipme.jpg",
  },
  {
    icon: Shield,
    title: "Keramikversiegelung",
    description: "Langanhaltender Schutz mit hydrophoben Eigenschaften für jahrelangen Glanz und Schutz.",
    features: ["9H Härte-Schutz", "Hydrophobe Beschichtung", "5 Jahre Garantie", "Selbstreinigungseffekt"],
    price: "Ab €600",
    image: "/ceramic-coating-being-applied-to-luxury-car--water.jpg",
  },
  {
    icon: Droplets,
    title: "Kratzerentfernung",
    description:
      "Professionelle Reparatur von Lackkratzern, Schlüsselspuren und kleineren Schäden mit modernsten Techniken.",
    features: ["Tiefe Kratzer-Reparatur", "Schlüsselspuren-Entfernung", "Lack-Nachbesserung", "Nahtlose Angleichung"],
    price: "Ab €60",
    image: "/car-scratch-being-professionally-repaired--before-.jpg",
  },
  {
    icon: Zap,
    title: "Komplette Aufbereitung",
    description: "Vollständige Innen- und Außenreinigung, Schutz und Restaurierung für das ultimative Finish.",
    features: ["Innenraum-Tiefenreinigung", "Außenwäsche & Wachs", "Reifen & Felgenpflege", "Glasbehandlung"],
    price: "Ab €180",
    image: "/complete-car-detailing-service--interior-and-exter.jpg",
  },
]

export function Services() {
  const [isBookingOpen, setIsBookingOpen] = useState(false)

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Unsere Premium-Leistungen</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Professionelle Fahrzeugpflege mit modernsten Techniken und Premium-Produkten
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={service.title} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="aspect-video overflow-hidden">
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <div className="flex items-center space-x-3 mb-2">
                  <service.icon className="h-8 w-8 text-primary" />
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                </div>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-primary">{service.price}</div>
                  <Button className="group/btn" onClick={() => setIsBookingOpen(true)}>
                    Jetzt buchen
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </section>
  )
}
