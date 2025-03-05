import React from "react";
import { Button } from "../ui/button";
import { SquareCheck } from "lucide-react";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <div className="bg-main px-4 md:px-8 lg:px-10 relative lg:pb-40">
      <div className="max-w-7xl mx-auto">
        <div className="w-full lg:w-2/5 px-1 md:px-3 lg:px-0 py-16 md:py-32 flex flex-col items-center md:items-start">
          <h1 className="text-3xl text-center md:text-left md:text-5xl font-semibold text-white">
            Kanal und Rohrreinigung in Passau und Umgebung
          </h1>
          <p className="text-[16px] mt-3 lg:mt-5 text-gray-300 text-center md:text-left">
            LP-Kanalservice – Ihr Experte für Kanal- und Rohrreinigung. Wir sind
            rund um die Uhr für Sie da und lösen Verstopfungen schnell, sauber
            und zuverlässig.
          </p>
          <div className="text-gray-300 flex gap-1 md:gap-5 mt-6">
            <div className="flex gap-1">
              <SquareCheck className="bg-main" />
              <p>Schnell & sauber</p>
            </div>
            <div className="flex gap-1">
              <SquareCheck />
              <p>Moderne Technik</p>
            </div>
            <div className="flex gap-1">
              <SquareCheck />
              <p>24/7 Notdienst</p>
            </div>
          </div>
          <a href="tel:+" className="block mt-3 lg:mt-6">
            <Button size="lg">
              Jetzt Anrufen
              <ArrowRight />
            </Button>
          </a>
        </div>
      </div>
      <img
        src="https://ik.imagekit.io/inowebagentur/LP%20Rohrreinigung/rohrreinigung%20hero.jpg?updatedAt=1740095216219"
        alt="Rohrreinigung"
        className="hidden lg:block absolute object-cover right-0 top-0 transform lg:w-1/2 lg:h-full"
        loading="eager"
      />
    </div>
  );
}
