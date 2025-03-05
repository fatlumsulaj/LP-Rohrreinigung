import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

export default function About() {
  return (
    <section className="bg-white mt-10 mb-10 md:mb-28 px-4 md:px-8 lg:px-10 py-5 text-black">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-10 items-center">
        <img
          src="https://ik.imagekit.io/inowebagentur/LP%20Rohrreinigung/rohrreinigung%20about.jpg?updatedAt=1740611011026"
          alt="Rohrverstopfung Passau"
          loading="eager"
          className="w-full max-w-lg mx-auto lg:mx-0 rounded-md"
        />
        <div className="max-w-[500px] px-2 row-start-1 lg:row-start-auto">
          <p className="bg-[#f0f3fa] w-fit px-3 py-1 text-tertiary font-medium uppercase">
            Über uns
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold my-5">
            Ihr Experte für{" "}
            <span className="text-tertiary">Rohrreinigung in Passau</span> –
            Schnell, Sauber, Zuverlässig!
          </h2>
          <p className="typography-body">
            Als Ihr zuverlässiger Partner für Rohrreinigung in Passau stehen
            wir für schnellen, sauberen und professionellen Service. Dank
            unserer langjährigen Erfahrung und unserem regionalen Einsatz sind
            wir jederzeit für Sie da – zuverlässig, transparent und mit
            höchsten Qualitätsstandards.
          </p>
          <p className="typography-body mt-3">
            Ob verstopfte Abflüsse,
            WC-Verstopfungen oder die regelmäßige Reinigung Ihrer Rohrsysteme
            – wir sorgen dafür, dass alles wieder reibungslos funktioniert.
            Vertrauen Sie auf unsere Expertise und lassen Sie uns Ihr Problem
            schnell und effizient lösen!
          </p>
          <Link href="/kontakt" className="inline-block mt-3 lg:mt-4">
            <Button>
              Jetzt Kontaktieren
              <ArrowRight />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
