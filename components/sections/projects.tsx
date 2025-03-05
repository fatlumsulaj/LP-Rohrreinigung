"use client"

import { useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

type Project = {
  id: number
  title: string
  description: string
  category: "rohrreinigung" | "abfluss" | "kanal" | "notdienst"
  imageUrl: string
}

// Using the provided image for all projects
const projectImage =
  "https://ik.imagekit.io/inowebagentur/LP%20Rohrreinigung/housekeeper-cleaning-hotel-room_53876-144786.jpg?updatedAt=1741131716721"

const projects: Project[] = [
  {
    id: 1,
    title: "WC-Verstopfung in Mehrfamilienhaus",
    description: "Notdiensteinsatz innerhalb von 30 Minuten",
    category: "notdienst",
    imageUrl: projectImage,
  },
  {
    id: 2,
    title: "Küchenabfluss-Sanierung",
    description: "Beseitigung hartnäckiger Fettablagerungen",
    category: "abfluss",
    imageUrl: projectImage,
  },
  {
    id: 3,
    title: "Kanalreinigung für Wohnkomplex",
    description: "Professionelle Spülung mit Hochdruckreiniger",
    category: "kanal",
    imageUrl: projectImage,
  },
  {
    id: 4,
    title: "Badezimmer-Abfluss Entstopfung",
    description: "Schnelle Hilfe bei verstopftem Waschbecken",
    category: "abfluss",
    imageUrl: projectImage,
  },
  {
    id: 5,
    title: "Rohrsanierung in Altbau",
    description: "Komplette Reinigung des Rohrsystems",
    category: "rohrreinigung",
    imageUrl: projectImage,
  },
  {
    id: 6,
    title: "Notfall-Rohrreinigung Restaurant",
    description: "Schnelle Hilfe bei Wasserschaden",
    category: "notdienst",
    imageUrl: projectImage,
  },
  {
    id: 7,
    title: "Kanalinspektion mit Kamera",
    description: "Lokalisierung von Schäden im Kanalsystem",
    category: "kanal",
    imageUrl: projectImage,
  },
  {
    id: 8,
    title: "Duschabfluss-Reinigung",
    description: "Beseitigung von Haarverstopfungen",
    category: "abfluss",
    imageUrl: projectImage,
  },
]

type Category = "all" | Project["category"]

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState<Category>("all")

  const filteredProjects = projects.filter((project) => activeCategory === "all" || project.category === activeCategory)

  return (
    <section id="referenzen" className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-blue-600 font-medium mb-4">UNSERE ERFOLGREICHEN EINSÄTZE</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy-900 mb-4">
            Wir <span className="text-blue-600">lösen</span> Ihre Abflussprobleme
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Entdecken Sie eine Auswahl unserer kürzlich durchgeführten Projekte und überzeugen Sie sich von der Qualität
            und Vielfalt unserer Rohrreinigungsdienstleistungen.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {[
            { id: "all", label: "Alle" },
            { id: "rohrreinigung", label: "Rohrreinigung" },
            { id: "abfluss", label: "Abfluss" },
            { id: "kanal", label: "Kanalarbeiten" },
            { id: "notdienst", label: "Notdienst" },
          ].map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id as Category)}
              className={cn(
                "px-6 py-2 rounded-full text-sm font-medium transition-colors",
                activeCategory === category.id
                  ? "bg-blue-600 text-white"
                  : "bg-white text-slate-600 hover:bg-slate-100",
              )}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative aspect-square overflow-hidden rounded-lg bg-white shadow-sm"
            >
              <Image
                src={project.imageUrl || "/placeholder.svg"}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white font-medium text-lg">{project.title}</h3>
                  <p className="text-slate-200 text-sm mt-1">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

