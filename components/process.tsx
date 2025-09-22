"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Car, Sparkles, Shield, Clock } from "lucide-react"

const steps = [
  {
    icon: Car,
    title: "Fahrzeugbegutachtung",
    description:
      "Gründliche Inspektion Ihres Fahrzeugs zur Identifizierung spezifischer Bedürfnisse und Erstellung eines individuellen Behandlungsplans.",
    duration: "15 Min",
  },
  {
    icon: Sparkles,
    title: "Tiefenreinigung",
    description: "Komplette Wäsche und Dekontamination zur Entfernung aller Verschmutzungen von der Oberfläche.",
    duration: "45 Min",
  },
  {
    icon: CheckCircle,
    title: "Lackkorrektor",
    description: "Professionelle Politur und Kratzerentfernung mit modernsten Techniken und Premium-Compounds.",
    duration: "2-4 Stunden",
  },
  {
    icon: Shield,
    title: "Schutzauftrag",
    description: "Auftrag von Keramikversiegelung oder Premium-Wachs für langanhaltenden Schutz und verbesserte Optik.",
    duration: "1-2 Stunden",
  },
  {
    icon: Clock,
    title: "Endkontrolle",
    description:
      "Qualitätskontrolle und finale Detailarbeiten zur Sicherstellung perfekter Ergebnisse vor der Übergabe.",
    duration: "30 Min",
  },
]

export function Process() {
  return (
    <section id="process" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Unser Professioneller Ablauf</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Jedes Fahrzeug erhält sorgfältige Aufmerksamkeit durch unseren bewährten 5-Schritte-Prozess
          </p>
        </div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-border transform -translate-y-1/2" />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <Card key={step.title} className="relative group hover:shadow-lg transition-all duration-300">
                {/* Step Number */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm z-10">
                  {index + 1}
                </div>

                <CardHeader className="text-center pt-8">
                  <step.icon className="h-12 w-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform duration-200" />
                  <CardTitle className="text-lg">{step.title}</CardTitle>
                </CardHeader>

                <CardContent className="text-center">
                  <p className="text-muted-foreground mb-4 text-sm">{step.description}</p>
                  <div className="inline-flex items-center space-x-1 text-xs font-medium text-secondary">
                    <Clock className="h-3 w-3" />
                    <span>{step.duration}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-card rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Qualitätsgarantie</h3>
            <p className="text-muted-foreground mb-6">
              Wir stehen hinter unserer Arbeit mit einer umfassenden Zufriedenheitsgarantie. Wenn Sie nicht vollständig
              zufrieden mit den Ergebnissen sind, machen wir es richtig.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                <span>100% Zufriedenheitsgarantie</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                <span>Versichert & Lizenziert</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                <span>Nur Premium-Produkte</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
