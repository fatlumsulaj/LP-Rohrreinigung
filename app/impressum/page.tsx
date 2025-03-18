import React from "react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Impressum | LP-Konstruktion Hausmeisterservice'
}

export default function Impressum() {
  return (
    <main className="px-4 md:px-8 my-10 md:my-14 lg:my-16">
      <div className="max-w-screen-xl mx-auto flex flex-col">
        <h1 className="font-semibold text-xl md:text-2xl">Impressum</h1>
        <div className="my-4">
          <p className="typography-body text-black/80">Leonor Paqarizi</p>
          <p className="typography-body text-black/80">LP-Konstruktion Hausmeisterservice</p>
          <p className="typography-body text-black/80">Bibereckerweg 4</p>
          <p className="typography-body text-black/80">94036 Passau</p>
          <p className="typography-body text-black/80">Deutschland</p>
        </div>
        <div className="my-4">
          <h2 className="font-semibold text-lg md:text-xl mb-2">Kontakt</h2>
          <p className="typography-body text-black/80">Telefon: +49 174 9634925</p>
          <p className="typography-body text-black/80">E-Mail: ⁠lp.konstruktion1@gmail.com</p>
          <p className="typography-body text-black/80">Internet: www.lp-hausmeisterservice.de</p>
        </div>
        <div className="my-4">
          <h2 className="font-semibold text-lg md:text-xl mb-2">Umsatzsteuer-ID</h2>
          <p className="typography-body text-black/80">
            Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:
          </p>
          <p className="typography-body text-black/80">Nicht vorhanden</p>
        </div>
        <div className="my-4">
          <h2 className="font-semibold text-lg md:text-xl mb-2">EU-Streitschlichtung</h2>
          <p className="typography-body text-black/80">
            Die Europäische Kommission stellt eine Plattform zur
            Online-Streitbeilegung (OS) bereit:{" "}
            <Link
              href="https://ec.europa.eu/consumers/odr/"
              className="text-blue-600"
            >
              https://ec.europa.eu/consumers/odr/.
            </Link>
            Unsere E-Mail-Adresse finden Sie oben im Impressum.
          </p>
        </div>
        <div className="my-4">
          <h2 className="font-semibold text-lg md:text-xl mb-2">
            Verbraucherstreitbeilegung / Universalschlichtungsstelle
          </h2>
          <p className="typography-body text-black/80">
            Wir sind nicht bereit oder verpflichtet, an
            Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
            teilzunehmen.
          </p>
        </div>
      </div>
    </main>
  );
}