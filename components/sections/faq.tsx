"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function Faq() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <p className="text-blue-600 font-medium mb-4">FAQS</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy-900 mb-4">
              Haben Sie <span className="text-blue-600">Fragen?</span>
              <br />
              Wir helfen gerne.
            </h2>
            <p className="text-slate-600">
              Hier finden Sie Antworten auf häufig gestellte Fragen zu unseren Rohrreinigungsdienstleistungen und
              Notfalleinsätzen.
            </p>
          </div>
          <div className="mt-8 lg:mt-0 lg:col-span-7">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Wie schnell können Sie bei einem Notfall vor Ort sein?</AccordionTrigger>
                <AccordionContent>
                  In Notfällen sind wir in der Regel innerhalb von 30-60 Minuten bei Ihnen. Unser 24/7 Notdienst steht
                  Ihnen rund um die Uhr zur Verfügung, auch an Wochenenden und Feiertagen.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger>Sind Ihre Mitarbeiter qualifiziert und versichert?</AccordionTrigger>
                <AccordionContent>
                  Ja, alle unsere Mitarbeiter sind ausgebildete Fachkräfte mit langjähriger Erfahrung in der
                  Rohrreinigung. Wir sind vollständig versichert und arbeiten nach den höchsten Sicherheitsstandards.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger>Welche Methoden der Rohrreinigung verwenden Sie?</AccordionTrigger>
                <AccordionContent>
                  Wir setzen verschiedene professionelle Methoden ein, darunter Hochdruckreinigung, Spiralreinigung und
                  Kamerainspektion. Die Wahl der Methode hängt von der Art der Verstopfung und dem Zustand Ihrer Rohre
                  ab.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger>Wie hoch sind die Kosten für eine Rohrreinigung?</AccordionTrigger>
                <AccordionContent>
                  Die Kosten variieren je nach Art und Umfang der erforderlichen Arbeiten. Wir bieten faire,
                  transparente Preise und erstellen Ihnen gerne einen kostenlosen Kostenvoranschlag vor Ort.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger>Geben Sie eine Garantie auf Ihre Arbeit?</AccordionTrigger>
                <AccordionContent>
                  Ja, wir stehen für die Qualität unserer Arbeit ein und bieten eine Zufriedenheitsgarantie. Bei
                  wiederkehrenden Problemen innerhalb kurzer Zeit kommen wir kostenlos wieder.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  )
}

