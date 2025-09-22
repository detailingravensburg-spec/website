"use client"

import { Phone, Mail, MapPin, Facebook, Instagram, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="text-2xl font-bold mb-4">ProfiPolitur</div>
            <p className="text-background/80 mb-6 text-pretty">
              Professionelle Auto- und Bootspolitur, Kratzerentfernung und Keramikversiegelung in Langenargen &
              Ravensburg. Vor-Ort-Service oder in unserer Werkstatt.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-background/60 hover:text-background transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-background/60 hover:text-background transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-background/60 hover:text-background transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Unsere Leistungen</h3>
            <ul className="space-y-2 text-background/80">
              <li>
                <a href="#services" className="hover:text-background transition-colors">
                  Professionelle Politur
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-background transition-colors">
                  Keramikversiegelung
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-background transition-colors">
                  Kratzerentfernung
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-background transition-colors">
                  Komplettaufbereitung
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-background transition-colors">
                  Bootaufbereitung
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-background transition-colors">
                  Kostenlose Beratung
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Schnellzugriff</h3>
            <ul className="space-y-2 text-background/80">
              <li>
                <a href="#gallery" className="hover:text-background transition-colors">
                  Galerie
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-background transition-colors">
                  Unser Ablauf
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-background transition-colors">
                  Bewertungen
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-background transition-colors">
                  Kontakt
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition-colors">
                  Datenschutz
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Kontakt</h3>
            <div className="space-y-4 text-background/80">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4" />
                <span>+49 7543 123 456</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4" />
                <span>info@profipolitur.de</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 mt-1" />
                <div>
                  <div>Hauptstraße 45</div>
                  <div>88085 Langenargen, Baden-Württemberg</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-background/60 text-sm">© 2024 ProfiPolitur. Alle Rechte vorbehalten.</p>
            <div className="flex space-x-6 mt-4 md:mt-0 text-sm text-background/60">
              <a href="#" className="hover:text-background transition-colors">
                Nutzungsbedingungen
              </a>
              <a href="#" className="hover:text-background transition-colors">
                Datenschutz
              </a>
              <a href="#" className="hover:text-background transition-colors">
                Cookie-Richtlinie
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
