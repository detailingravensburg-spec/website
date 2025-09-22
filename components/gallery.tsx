"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

const galleryItems = [
  {
    id: 1,
    category: "polishing",
    title: "Lackkorrektor - BMW M3",
    before: "/bmw-m3-with-swirl-marks-and-scratches-before-polis.jpg",
    after: "/bmw-m3-with-perfect-glossy-paint-finish-after-prof.jpg",
  },
  {
    id: 2,
    category: "ceramic",
    title: "Keramikversiegelung - Mercedes S-Klasse",
    before: "/mercedes-s-class-before-ceramic-coating-applicatio.jpg",
    after: "/mercedes-s-class-with-ceramic-coating--water-beadi.jpg",
  },
  {
    id: 3,
    category: "scratch",
    title: "Kratzerentfernung - Audi A4",
    before: "/audi-a4-with-deep-scratches-and-key-marks-on-door-.jpg",
    after: "/audi-a4-with-perfectly-repaired-paint--no-visible-.jpg",
  },
  {
    id: 4,
    category: "detailing",
    title: "Komplettaufbereitung - Porsche 911",
    before: "/porsche-911-interior-and-exterior-before-complete-.jpg",
    after: "/porsche-911-showroom-condition-after-complete-deta.jpg",
  },
  {
    id: 5,
    category: "polishing",
    title: "Lackrestaurierung - Ferrari 458",
    before: "/ferrari-458-with-oxidized-and-faded-red-paint-befo.jpg",
    after: "/ferrari-458-with-vibrant-restored-red-paint--mirro.jpg",
  },
  {
    id: 6,
    category: "ceramic",
    title: "Keramikschutz - Tesla Model S",
    before: "/placeholder.svg?height=400&width=600",
    after: "/placeholder.svg?height=400&width=600",
  },
]

const categories = [
  { id: "all", label: "Alle Arbeiten" },
  { id: "polishing", label: "Politur" },
  { id: "ceramic", label: "Keramikversiegelung" },
  { id: "scratch", label: "Kratzerentfernung" },
  { id: "detailing", label: "Komplettaufbereitung" },
]

export function Gallery() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const filteredItems =
    activeCategory === "all" ? galleryItems : galleryItems.filter((item) => item.category === activeCategory)

  return (
    <section id="gallery" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Vorher & Nachher Galerie</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Sehen Sie die unglaublichen Transformationen, die wir mit unseren professionellen Services erreichen
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              onClick={() => setActiveCategory(category.id)}
              className="transition-all duration-200"
            >
              {category.label}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div key={item.id} className="group">
              <div className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="relative">
                  <div className="grid grid-cols-2">
                    <div className="relative overflow-hidden">
                      <img
                        src={item.before || "/placeholder.svg"}
                        alt={`${item.title} - Before`}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-2 left-2 bg-destructive text-destructive-foreground px-2 py-1 rounded text-xs font-medium">
                        Vorher
                      </div>
                    </div>
                    <div className="relative overflow-hidden">
                      <img
                        src={item.after || "/placeholder.svg"}
                        alt={`${item.title} - After`}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-2 right-2 bg-primary text-primary-foreground px-2 py-1 rounded text-xs font-medium">
                        Nachher
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                  <Button variant="outline" size="sm" onClick={() => setSelectedImage(item.after)}>
                    Vollbild ansehen
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="max-w-4xl max-h-full">
              <img
                src={selectedImage || "/placeholder.svg"}
                alt="Full size view"
                className="max-w-full max-h-full object-contain"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
