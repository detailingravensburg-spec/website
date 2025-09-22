"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    vehicle: "",
    service: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const subject = `Service Request from ${formData.name}`
      const body = `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Vehicle: ${formData.vehicle}
Service: ${formData.service}

Message:
${formData.message}
      `.trim()

      const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=info@profipolitur.de&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
      window.open(gmailUrl, "_blank")

      setIsSubmitted(true)

      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          phone: "",
          vehicle: "",
          service: "",
          message: "",
        })
        setIsSubmitted(false)
      }, 3000)
    } catch (error) {
      console.error("Error opening Gmail:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleCall = () => {
    window.location.href = "tel:+4975431234567"
  }

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Kostenloses Angebot erhalten</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Bereit, Ihr Fahrzeug zu verwandeln? Kontaktieren Sie uns heute für ein persönliches Angebot
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl">Service buchen</CardTitle>
            </CardHeader>
            <CardContent>
              {isSubmitted ? (
                <div className="text-center py-8">
                  <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Vielen Dank!</h3>
                  <p className="text-muted-foreground">
                    Ihre Anfrage wurde über Gmail gesendet. Wir melden uns bald bei Ihnen!
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Vollständiger Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Ihr vollständiger Name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        E-Mail-Adresse *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="ihre@email.de"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-2">
                        Telefonnummer
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+49 7543 123 456"
                      />
                    </div>
                    <div>
                      <label htmlFor="vehicle" className="block text-sm font-medium mb-2">
                        Fahrzeugmarke & Modell
                      </label>
                      <Input
                        id="vehicle"
                        name="vehicle"
                        value={formData.vehicle}
                        onChange={handleChange}
                        placeholder="z.B. BMW M3, Mercedes C-Klasse"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium mb-2">
                      Benötigter Service
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                    >
                      <option value="">Service auswählen</option>
                      <option value="polishing">Professionelle Politur</option>
                      <option value="ceramic">Keramikversiegelung</option>
                      <option value="scratch">Kratzerentfernung</option>
                      <option value="detailing">Komplettaufbereitung</option>
                      <option value="boat">Bootaufbereitung</option>
                      <option value="consultation">Kostenlose Beratung</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Zusätzliche Details
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Erzählen Sie uns über den Zustand Ihres Fahrzeugs und spezielle Anforderungen..."
                    />
                  </div>

                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90" disabled={isSubmitting}>
                    <Send className="mr-2 h-4 w-4" />
                    {isSubmitting ? "Gmail wird geöffnet..." : "Angebot anfordern"}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <Phone className="h-8 w-8 text-primary" />
                  <div>
                    <h3 className="font-semibold text-lg">Anrufen</h3>
                    <p className="text-muted-foreground">Sofortige Antworten</p>
                  </div>
                </div>
                <button onClick={handleCall} className="text-xl font-semibold hover:text-primary transition-colors">
                  +49 7543 123 456
                </button>
                <p className="text-sm text-muted-foreground">Mo-Fr: 8:00 - 18:00 Uhr</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <Mail className="h-8 w-8 text-primary" />
                  <div>
                    <h3 className="font-semibold text-lg">E-Mail</h3>
                    <p className="text-muted-foreground">24/7 Antwort</p>
                  </div>
                </div>
                <p className="text-xl font-semibold">info@profipolitur.de</p>
                <p className="text-sm text-muted-foreground">Antwort innerhalb von 2 Stunden</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <MapPin className="h-8 w-8 text-primary" />
                  <div>
                    <h3 className="font-semibold text-lg">Besuchen Sie uns</h3>
                    <p className="text-muted-foreground">Professionelle Werkstatt</p>
                  </div>
                </div>
                <p className="font-semibold">Hauptstraße 45</p>
                <p className="text-muted-foreground">88085 Langenargen, Baden-Württemberg</p>
                <p className="text-sm text-muted-foreground mt-2">
                  ✅ Vor-Ort-Service in Ravensburg und Umgebung verfügbar
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <Clock className="h-8 w-8 text-primary" />
                  <div>
                    <h3 className="font-semibold text-lg">Öffnungszeiten</h3>
                    <p className="text-muted-foreground">Wann wir verfügbar sind</p>
                  </div>
                </div>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span>Montag - Freitag:</span>
                    <span>8:00 - 18:00 Uhr</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Samstag:</span>
                    <span>9:00 - 16:00 Uhr</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sonntag:</span>
                    <span>Geschlossen</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
