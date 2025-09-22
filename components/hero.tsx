"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Star, Clock } from "lucide-react"
import { BookingModal } from "./booking-modal"

export function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleBookService = () => {
    setIsModalOpen(true)
  }

  const handleViewGallery = () => {
    document.getElementById("gallery")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/luxury-car-being-detailed-with-professional-equipm.jpg"
            alt="Professional car detailing"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/50" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="opacity-0 animate-fade-in-up">
              <h1 className="text-5xl md:text-7xl font-bold text-balance mb-6">
                Professionelle
                <span className="text-primary block">Auto- & Boot</span>
                <span className="text-secondary">Politur</span>
              </h1>
            </div>

            <div className="opacity-0 animate-fade-in-up animate-delay-200">
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-pretty max-w-2xl">
                Professionelle Auto- und Bootspolitur, Kratzerentfernung und Reinigung in Langenargen & Ravensburg.
                Vor-Ort-Service oder in unserer Werkstatt.
              </p>
            </div>

            <div className="opacity-0 animate-fade-in-up animate-delay-300">
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-lg px-8 py-4"
                  onClick={handleBookService}
                >
                  Service buchen
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 py-4 bg-transparent"
                  onClick={handleViewGallery}
                >
                  Galerie ansehen
                </Button>
              </div>
            </div>

            <div className="opacity-0 animate-fade-in-up animate-delay-400">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-center space-x-3 bg-card/80 backdrop-blur-sm rounded-lg p-4">
                  <Shield className="h-8 w-8 text-primary" />
                  <div>
                    <div className="font-semibold">Zertifizierte Profis</div>
                    <div className="text-sm text-muted-foreground">Erfahrene Techniker</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3 bg-card/80 backdrop-blur-sm rounded-lg p-4">
                  <Star className="h-8 w-8 text-secondary" />
                  <div>
                    <div className="font-semibold">5-Sterne Service</div>
                    <div className="text-sm text-muted-foreground">Außergewöhnliche Ergebnisse</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3 bg-card/80 backdrop-blur-sm rounded-lg p-4">
                  <Clock className="h-8 w-8 text-primary" />
                  <div>
                    <div className="font-semibold">Schnelle Bearbeitung</div>
                    <div className="text-sm text-muted-foreground">Taggleicher Service</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}
