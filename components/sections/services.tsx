import {
  ArrowRight,
  TableIcon as Toilet,
  Bath,
  UtensilsCrossed,
  ShowerHead,
  WashingMachine,
  Wrench,
  SplineIcon as Spiral,
  Waves,
  PipetteIcon as Pipe,
  Trash,
  CloudRain,
  Droplets,
} from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

export default function ServicesSection() {
  return (
    <section id="leistungen" className="bg-slate-50 py-14 md:py-20 lg:py-24 px-4 md:px-8 lg:px-10">
      <div className="max-w-7xl mx-auto">
        {/* First Service Section */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-12 mb-32">
          {/* Heading Section - Left Side */}
          <div className="lg:w-1/3 mb-12 lg:mb-0">
            <p className="text-blue-600 font-medium mb-4">ROHRVERSTOPFUNGEN</p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
              <span className="text-blue-600">Schnelle</span> Hilfe bei
              Rohrverstopfungen - 24/7 Notdienst
            </h2>
            <p className="text-black/80">
              Eine plötzliche WC-Verstopfung, ein überlaufendes Waschbecken oder
              ein blockierter Abfluss in der Küche – solche Probleme treten
              immer dann auf, wenn man sie am wenigsten erwartet. Genau hier
              kommt unser Rohrreinigung Notdienst ins Spiel! Wir sind 24 Stunden
              am Tag, 7 Tage die Woche für Sie erreichbar und sorgen für eine
              schnelle, zuverlässige Lösung.
            </p>
            <a href="tel:+49 174 9634925" className="inline-block mt-4">
              <Button>
                Jetzt anrufen
                <ArrowRight className="size-5" />
              </Button>
            </a>
          </div>

          {/* Services Grid - Right Side */}
          <div className="lg:w-2/3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {/* Service Cards */}
              {[
                {
                  icon: Toilet,
                  title: "WC-Verstopfung beseitigen",
                  description:
                    "Bei überlaufenden oder nicht abfließenden Toiletten",
                },
                {
                  icon: Bath,
                  title: "Waschbecken- und Badewannen-Abfluss reinigen",
                  description: "Entfernung von Haaren, Seifenresten und Kalk",
                },
                {
                  icon: UtensilsCrossed,
                  title: "Küchenspüle entstopfen",
                  description: "Fettablagerungen und Essensreste lösen",
                },
                {
                  icon: ShowerHead,
                  title: "Duschabfluss frei machen",
                  description: "Beseitigung von Haar- und Schmutzverstopfungen",
                },
                {
                  icon: WashingMachine,
                  title: "Urinalreinigung",
                  description:
                    "Abflussprobleme bei Waschmaschine & Spülmaschine beheben",
                },
                {
                  icon: Wrench,
                  title: "Abflussprobleme",
                  description:
                    "Allgemeine Abflussprobleme und Rohrverstopfungen beheben",
                },
              ].map((service, index) => (
                <div key={index} className="bg-white rounded-lg shadow-sm p-6">
                  <div className="bg-blue-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-navy-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-600">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Second Service Section */}
        <div className="flex flex-col-reverse lg:flex-row lg:items-start lg:space-x-12">
          {/* Services Grid - Left Side */}
          <div className="lg:w-2/3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {/* Service Cards */}
              {[
                {
                  icon: Spiral,
                  title: "Mechanische Rohrreinigung",
                  description:
                    "Hartnäckige Ablagerungen mit Spiralen und Fräsen entfernen",
                },
                {
                  icon: Waves,
                  title: "Hochdruckspülung",
                  description:
                    "Tiefenreinigung mit Hochdruckwasser für maximale Sauberkeit",
                },
                {
                  icon: Pipe,
                  title: "Kanalreinigung & Kanalspülung",
                  description:
                    "Entfernen von Schlamm, Fetten und Verkrustungen",
                },
                {
                  icon: Trash,
                  title: "Abflussreinigung in Küche, Bad & Keller",
                  description: "Verstopfungen schnell und sicher beseitigen",
                },
                {
                  icon: CloudRain,
                  title: "Fallrohrreinigung",
                  description:
                    "Reinigung von Regenfallrohren und Dachentwässerungen",
                },
                {
                  icon: Droplets,
                  title: "Drainagen & Entwässerungssysteme reinigen",
                  description: "Für eine funktionierende Wasserableitung",
                },
              ].map((service, index) => (
                <div key={index} className="bg-white rounded-lg shadow-sm p-6">
                  <div className="bg-blue-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-navy-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-600">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Heading Section - Right Side */}
          <div className="lg:w-1/3 mb-12 lg:mb-0">
            <p className="text-blue-600 font-medium mb-4">KANALREINIGUNG</p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
              <span className="text-blue-600">Professionelle</span> Rohr- und
              Kanalreinigung für langfristige Sauberkeit
            </h2>
            <p className="text-black/80">
              Verstopfte oder verschmutzte Rohre können nicht nur unangenehme
              Gerüche verursachen, sondern auch ernsthafte Schäden an Ihrem
              Abwassersystem hervorrufen. Unsere professionelle Rohr- und
              Kanalreinigung sorgt für eine effektive Beseitigung von
              Ablagerungen, sodass Ihre Rohre wieder frei und funktionstüchtig
              sind.
            </p>
            <a href="tel:+49 174 9634925" className="inline-block mt-4">
              <Button>
                Jetzt anrufen
                <ArrowRight className="size-5" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
