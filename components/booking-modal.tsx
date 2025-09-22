"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, Mail, MapPin, Clock, X } from "lucide-react"

interface BookingModalProps {
  isOpen: boolean
  onClose: () => void
}

export function BookingModal({ isOpen, onClose }: BookingModalProps) {
  if (!isOpen) return null

  const handleCall = () => {
    window.location.href = "tel:+4975431234567"
  }

  const handleEmail = () => {
    window.location.href = "mailto:info@profipolitur.de?subject=Service Buchungsanfrage"
  }

  const handleDirections = () => {
    window.open("https://maps.google.com/?q=Hauptstraße+45,+88085+Langenargen,+Baden-Württemberg", "_blank")
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-fade-in" onClick={onClose} />

      {/* Modal */}
      <Card className="relative w-full max-w-md mx-4 animate-scale-in shadow-2xl">
        <CardHeader className="relative">
          <Button variant="ghost" size="sm" className="absolute right-2 top-2 h-8 w-8 p-0" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
          <CardTitle className="text-2xl text-center text-primary">Service buchen</CardTitle>
          <p className="text-center text-muted-foreground">Kontaktieren Sie uns direkt</p>
        </CardHeader>

        <CardContent className="space-y-4">
          {/* Call Button */}
          <Button
            onClick={handleCall}
            className="w-full h-16 bg-primary hover:bg-primary/90 text-left justify-start space-x-4"
          >
            <Phone className="h-6 w-6" />
            <div>
              <div className="font-semibold">Jetzt anrufen</div>
              <div className="text-sm opacity-90">+49 7543 123 456</div>
            </div>
          </Button>

          {/* Email Button */}
          <Button
            onClick={handleEmail}
            variant="outline"
            className="w-full h-16 text-left justify-start space-x-4 hover:bg-muted bg-transparent"
          >
            <Mail className="h-6 w-6 text-primary" />
            <div>
              <div className="font-semibold">E-Mail senden</div>
              <div className="text-sm text-muted-foreground">info@profipolitur.de</div>
            </div>
          </Button>

          {/* Location Button */}
          <Button
            onClick={handleDirections}
            variant="outline"
            className="w-full h-16 text-left justify-start space-x-4 hover:bg-muted bg-transparent"
          >
            <MapPin className="h-6 w-6 text-primary" />
            <div>
              <div className="font-semibold">Besuchen Sie uns</div>
              <div className="text-sm text-muted-foreground">Hauptstraße 45, Langenargen</div>
            </div>
          </Button>

          {/* Business Hours */}
          <div className="bg-muted/50 rounded-lg p-4 mt-6">
            <div className="flex items-center space-x-2 mb-3">
              <Clock className="h-5 w-5 text-primary" />
              <span className="font-semibold">Öffnungszeiten</span>
            </div>
            <div className="space-y-1 text-sm">
              <div className="flex justify-between">
                <span>Mo - Fr:</span>
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
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
